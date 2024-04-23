# Backend-Code
# Node.js Project README

## Description

This is a Node.js project that includes authentication, posts, and comments functionality. It utilizes MySQL database for data storage and Swagger for API documentation.

## Folder Structure

project-name/
│
├── config/
│ └── database.js # Database configuration file
│
├── controllers/
│ ├── authController.js # Controller for authentication routes
│ ├── postController.js # Controller for post-related routes
│ └── commentController.js # Controller for comment-related routes
│
├── models/
│ ├── user.js # User model
│ ├── post.js # Post model
│ └── comment.js # Comment model
│
├── routes/
│ ├── authRoutes.js # Authentication routes
│ ├── postRoutes.js # Routes for posts
│ └── commentRoutes.js # Routes for comments
│
├── swagger/
│ └── swagger.json # Swagger/OpenAPI specification
│
├── app.js # Main application file
├── package.json # Project dependencies and scripts
└── README.md # Project README file


## Installation

1. Clone the repository:
git clone <repository-url>

Clone the repository to your local machine using the provided repository URL.


2. Install dependencies:
npm install express cors body-parser dotenv

Each package will be installed and added to your project's node_modules directory. These packages are commonly used in Node.js projects for creating web servers (express), enabling Cross-Origin Resource Sharing (cors), parsing request bodies (body-parser), and managing environment variables (dotenv).

3. Configure MySQL database:

   - Create a MySQL database.
   - Update the database configuration in `config/database.js` with your database credentials.

4. Run the application:


## MySQL Connection and Schema

To connect to MySQL database and create schemas, follow these steps:

1. Install MySQL module:

npm install mysql2


2. Import the MySQL module and establish a connection in `config/database.js`.

3. Create schemas in `config/database.js`.

## Swagger Installation

To install Swagger for API documentation, follow these steps:

1. Install Swagger CLI globally:
npm install swagger-ui-express

This command will download and install the swagger-ui-express package into your Node.js project, allowing you to serve Swagger UI for API documentation.

1.Run the Project:
Open your terminal.
Navigate to the root directory of your project.

Run the command:
node index.js

This command will start your Node.js server, and it will be running locally on your machine.

Open Swagger:
Open a web browser.
Enter the URL:

http://localhost:your_port/swagger-ui/

Replace your_port with the port number on which your Node.js server is running. If you haven't specified a port, the default port is 4000.
This URL will open Swagger UI in your web browser, where you can view and interact with your API documentation.

I run this in my local this command

http://localhost:4000/api-docs/

1.In mysql take the schema and I attached here 

with data addd the mysql schema files
