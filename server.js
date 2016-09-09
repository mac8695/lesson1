/**
 * Created by MaC on 2016-09-09.
 */
// link to node's http library
var http = require('http');

// start a local server on 3000 and listen for events
http.createServer(function (request, response) {
    response.writeHead(200); //http status ok
    response.end('Our first node page');
}).listen(3000);

//print that server has started
console.log('server running on port 3000');
