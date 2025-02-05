/* 
* Title: Uptime Monitoring Application
* Description: A RESTful API to monitor up or down time of user defined links
*/

// Dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// Configuration
app.config = {
    port: 3000,
};

// Create a server
app.createServer = () => {
    const server = http.createServer(app.handleRequestRes);
    server.listen(app.config.port, () => {
        console.log(`Server is running on port ${app.config.port}`);
    })
}

// Handle requests and send response
app.handleRequestRes = (req, res) => {
    // Send response
    res.end('কিরে মেহেদী কি খবর?');
}

// Start the server
app.createServer();