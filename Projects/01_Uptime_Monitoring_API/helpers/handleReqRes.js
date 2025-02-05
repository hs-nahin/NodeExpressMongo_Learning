/**
 * Handle request response
 * Handle request and response
 */

const url = require("url"); // Import URL module to parse request URLs
const { StringDecoder } = require("string_decoder"); // Import StringDecoder to handle incoming request payloads

// Module Scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, ""); // Trim slashes from the path
  const method = req.method.toLowerCase(); // Convert request method to lowercase
  const queryStringObject = parsedUrl.query; // Get query parameters as an object
  const headersObject = req.headers; // Get request headers

  // Create a string decoder to handle incoming request payloads
  const decoder = new StringDecoder("utf-8");
  let realData = "";

  // Listen for incoming data from the request
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  // Listen for the end of the request
  req.on("end", () => {
    realData += decoder.end(); // Finalize decoding the request payload
    console.log(realData); // Log the request body

    // Parse the incoming string data into a JSON object
    const parsedData = JSON.parse(realData);
    // Log the parsed JSON object to the console, showing the data structure
    console.log(parsedData);

    // Send a response
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Hello Nahin"); // Send response message
  });
};


module.exports = handler;