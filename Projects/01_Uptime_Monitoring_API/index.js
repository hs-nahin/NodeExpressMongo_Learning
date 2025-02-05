/* 
* Title: Uptime Monitoring Application
* Description: A RESTful API to monitor up or down time of user defined links
*/

// Dependencies
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');
const { buffer } = require('stream/consumers');


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
    // Request Handling
    // Get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    })
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData); 
        // Send response
        res.end('Hello Nahin');
    })
}

// Start the server
app.createServer();