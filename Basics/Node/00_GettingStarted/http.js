const http = require('http');

// const server = http.createServer( (req, res) => {
//     res.write('Hello World');
//     res.end();
// });

const server = http.createServer( (req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    } else if (req.url === '/about') {
        res.write('About Page');
        res.end();
    } else {
        res.write('Page not found');
        res.end();
    }
});

server.listen(3000);