var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = '/api/irl';
// jpdbIRL(JPDB Index Read Language) - To read/retrieve Json data
var jpdbIML = '/api/iml';
// jpdbIML(JPDB Index Manipulation Language) - To insert, update and delete Json data
var prjDBName = "Project DataBase";
var prjRelation = "prjData";
var connToken = "90931725|-31949214324208237|90963679";

$("#prjId").focus(); // Makes the cursor focus on the Project ID field when the page loads.
// Above line use jQuery, You can also use 'jQuery' instead of '$'. It is a shorthand of jQuery.The # symbol indicates that you're selecting an element by its ID.    

function validateAndGetFormData() {
    var prjId = $("#prjId").val();
    var prjName = $("#prjName").val();
    var asgn = $("#asgn").val();
    var asgnDate = $("#asgnDate").val();
    var dline = $("#dline").val();
// The .val() method is primarily used to get the values of form elements such as input, select and textarea.
// Above lines stores the values of the Project ID, Project Name, Assigned to, Assignment Date and Deadline fields in the respective variables.

    if (prjId === "") {
        // Triple Equal signs checks if both the type and values are equal.
        alert("Project ID is mandatory");
        $("#prjId").focus();
        return "";
    }
    if (prjName === "") {
        alert("Project Name is mandatory");
        $("#prjName").focus();
        return "";
    }
    if (asgn === "") {
        alert("Assigned to is mandatory");
        $("#asgn").focus();
        return "";
    }
    if (asgnDate === "") {
        alert("Assignment Date is mandatory");
        $("#asgnDate").focus();
        return "";
    }
    if (dline === "") {
        alert("Deadline is mandatory");
        $("#dline").focus();
        return "";
    }
// Above 'if' conditions check if any input field is empty and if it is, it displays an alert message and focuses on the empty field.
// It is not compulsory to make all the fields mandatory, you can remove the 'if' conditions if you want to make any field optional.

    var formData = {
        ProjectID: prjId,
        ProjectName: prjName,
        AssignedTo: asgn,
        AssignedDate: asgnDate,
        Deadline: dline,
    };
    return JSON.stringify(formData);
}
// Above function validates the form data and returns the JSON string of the form data.

function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest = "{\n"
        + "\"token\" : \""
        + connToken
        + "\","
        + "\"dbName\": \""
        + dbName
        + "\",\n" + "\"cmd\" : \"PUT\",\n"
        + "\"rel\" : \""
        + relName + "\","
        + "\"jsonStr\": \n"
        + jsonObj
        + "\n"
        + "}";
    return putRequest;
}

function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
    var url = dbBaseUrl + apiEndPointUrl;
    var jsonObj;
    $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        var dataJsonObj = result.responseText;
        jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
}

function resetForm() {
    $("#prjId").val("");
    $("#prjName").val("");
    $("#asgn").val("");
    $("#asgnDate").val("");
    $("#dline").val("");
    $("#Save").prop("disabled", true);
    $("#Update").prop("disabled", true);
    $("#Reset").prop("disabled", true);
    $("#prjId").prop("disabled", false);
    $("#Delete").prop("disabled", true);
    $("#prjId").focus();
}

function saveForm() {
    var formData = validateAndGetFormData();
    if (formData === "") {
        return;
    }
    var PutRequest = createPUTRequest(connToken, formData, prjDBName, prjRelation);
    jQuery.ajaxSetup({ async: false });
    var result = executeCommandAtGivenBaseUrl(PutRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    resetForm();    
}

function updateForm() {
    var formData = validateAndGetFormData();
    $("#Update").prop("disabled", true);
    var UpdateRequest = createUPDATERecordRequest(connToken, formData, prjDBName, prjRelation, localStorage.getItem("recno"));
    jQuery.ajaxSetup({ async: false });
    var result = executeCommandAtGivenBaseUrl(UpdateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    resetForm();
}

function saveRecNo2LS(result) {
    var lvData = JSON.parse(result.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function fillData(result) {
    saveRecNo2LS(result);
    var data = JSON.parse(result.data).record;
    $("#prjName").val(data.ProjectName);
    $("#asgn").val(data.AssignedTo);
    $("#asgnDate").val(data.AssignedDate);
    $("#dline").val(data.Deadline);
}

function deleteForm() {
    var formData = validateAndGetFormData();
    var DeleteRequest = createREMOVERecordRequest(connToken, prjDBName, prjRelation, localStorage.getItem("recno"));
    jQuery.ajaxSetup({ async: false });
    var result = executeCommandAtGivenBaseUrl(DeleteRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    $("#Delete").prop("disabled", true);
    resetForm();
}

function check() {
    var prjId = $("#prjId").val();
    var jsonStr = {
        ProjectID: prjId
    };
    var prjIdJsonObj = JSON.stringify(jsonStr);
    var getRequest = createGET_BY_KEYRequest(connToken, prjDBName, prjRelation, prjIdJsonObj);
    jQuery.ajaxSetup({ async: false });
    var result = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({ async: true });

    if (result.status === 400) {
        $("#Save").prop("disabled", false);
        $("#Update").prop("disabled", true);
    }
    else if (result.status === 200) {
        $("#Save").prop("disabled", true);
        $("#prjId").prop("disabled", true);
        fillData(result);
        $("#Update").prop("disabled", false);
        $("#Delete").prop("disabled", false);
    }
    $("#Reset").prop("disabled", false);
    $("#prjName").focus();
}