var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hey');
});

server.listen(5000,'127.0.0.1');
console.log('Tadaa');
