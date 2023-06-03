const express = require('express');
const app = express();
const http = require('http');
app.use(express.static("public"));
const port = 80;
const server = http.createServer(function(request, response) {
    switch(request.headers.host) {
        case 'choccy.nl': response.write('<script>app.use(express.static("public"));</script>'); break;
        case 'official-lou.nl': response.write('<h1>lou/h1>'); break;
        default: 
            response.statusCode = 404;
            response.write('<p>We do not serve the host: <b>' + request.headers.host + '</b>.</p>');
    }
    response.end();
}


);

server.listen(port, () => {
    console.log("listening on " + port);
});






