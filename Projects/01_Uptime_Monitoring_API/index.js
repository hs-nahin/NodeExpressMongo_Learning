/*
 * Title: Uptime Monitoring Application
 * Description: A simple RESTful API to monitor the uptime or downtime of user-defined links.
 * Author: Hasnat Shahriyar Nahin
 */

// Dependencies
const http = require("http"); // Import HTTP module to create a server

const {handleReqRes} = require('./helpers/handleReqRes');


// App object - module scaffolding
const app = {};

// Configuration settings
app.config = {
  port: 3000, // Define the port where the server will listen
};

// Function to create and start the server
app.createServer = () => {
  // Create an HTTP server and attach the request handler function
  const server = http.createServer(app.handleRequestRes);

  // Start the server and listen on the defined port
  server.listen(app.config.port, () => {
    console.log(`Server is running on port ${app.config.port}`);
  });
};

// Handle incoming requests and send responses
app.handleRequestRes = handleReqRes;

// Start the server
app.createServer();
