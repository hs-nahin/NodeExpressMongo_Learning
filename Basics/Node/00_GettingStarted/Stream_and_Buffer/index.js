const fs = require('fs');
const http = require('http');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// Reading data from bigdata.txt and writing it to output.txt
// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });

// Using pipe method
// ourReadStream.pipe(ourWriteStream);

// Creating a server
const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(__dirname + '/bigdata.txt', 'utf-8');
    myReadStream.pipe()
});

server.listen(3000, 'localhost');
console.log('Server is running on port 3000');

// NOTE : 'req' is a readable stream and 'res' is a writable stream. So, we can use pipe method to read data from readable stream and write it to writable stream.