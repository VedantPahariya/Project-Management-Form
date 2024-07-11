# Project Management Form
 
This repository consists of code for 'Project Management Form' made using HTML and JavaScript as the main basis with Backend database using JsonPowerDB. It also uses libraries using Bootstrap and jQuery to make the code more simpler and readable. 
Code is Written with proper comments in such a way that any person can read and understand its working easily.

## About the Form

This form takes 5 inputs from the user that are Project ID, Project Name, Assigned to, Assignment Date and its Deadline. Out of these 5 inputs, Project ID behaves as the primary key which should be unique for different projects. Project ID is the key to retrieve/save your project data. Other details are stored under this ID.  
Just like storing the Project details, this form can also be used to maintain list of daily tasks that can be either distributed in a group or personal use, for managing tasks, important events, responsibility distribution in groups etc.

## How to use?

To use this project, Reader should only know the basic programming. As already mentioned, the code has comments which explains major syntaxes properly which makes it more convinient to read. Follow the following steps to setup the project:  

1. Set your own Backend DataBase using JSONPowerDB.  
Go to `http://api.login2explore.com:5577/user/index.html` and login.
If you don't have an account, then register yourself on `http://api.login2explore.com:5577/user/register_dev.html`.
Its important to make an account to access their API for Backend DataBase.

3. Go to `Tools` (one of the options in hamburger menu) ->`Tokens`.  
Select `Connection Token` as the Type of Token and then `Generate Connection_Tokens`

4. Copy the token and paste it in the variable `connToken` in `index.js` file.

Now, you are ready to use this repo for your personal use. For checking the data stored in DataBase by the form,  
Go to `Visualize`-> `JsonDB`. 
Select the DataBase and then its Relation which are mentioned on 6th and 7th line of the `index.js` file. You can also modify it for your personal convinience.  

You will see Proper Table with the structured data on the screen if some data is submitted through the form.

## Benefits of using JsonPowerDB

JsonPowerDB is easy to use because of simple syntax and user friendly graphical user interface.
