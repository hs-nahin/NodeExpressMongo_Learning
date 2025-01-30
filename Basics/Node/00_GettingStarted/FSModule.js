const fs = require('fs');

// Synchronous Way
fs.writeFileSync('myfile.text', 'Hello ');
const files = fs.readFileSync('myfile.text');
console.log(files.toString());

console.log('End of the code');

// Asynchronous Way
fs.readFile('myfile.text', (err, data) => {
    console.log(err);
    console.log(data.toString());
});
console.log('End of the code');