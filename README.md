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
JsonPowerDB provides several benefits for developers and users alike:

1. High Performance: JsonPowerDB is designed to deliver high performance with its unique indexing and storage mechanisms. It can handle large amounts of data and provide fast retrieval and storage operations.

2. Schema-less: JsonPowerDB is a schema-less database, which means you can store and retrieve data without the need for predefined schemas. This flexibility allows for easy adaptation to changing data requirements.

3. Real-time Database: JsonPowerDB supports real-time data synchronization, making it suitable for applications that require instant updates and collaboration. Changes made to the database are immediately reflected across all connected clients.

4. Easy to Use: JsonPowerDB has a simple and intuitive syntax, making it easy for developers to work with. The user-friendly graphical user interface further enhances the ease of use, allowing users to interact with the database effortlessly.

5. NoSQL and SQL Capabilities: JsonPowerDB combines the benefits of both NoSQL and SQL databases. It provides the flexibility and scalability of NoSQL databases while also supporting SQL-like queries for data retrieval and manipulation.

6. Multi-mode Database: JsonPowerDB can be used as a document database, key-value store, graph database, or a combination of these modes. This versatility allows developers to choose the most suitable data model for their application.

7. Built-in Serverless Support: JsonPowerDB supports serverless architecture, eliminating the need for complex server setups. This reduces infrastructure costs and simplifies deployment and scaling of applications.

8. Cross-platform Compatibility: JsonPowerDB is compatible with multiple platforms and programming languages, making it accessible to a wide range of developers. It can be seamlessly integrated into existing applications without major modifications.

In conclusion, JsonPowerDB offers high performance, flexibility, real-time capabilities, ease of use, and compatibility across platforms, making it a powerful choice for developers working with diverse data requirements.