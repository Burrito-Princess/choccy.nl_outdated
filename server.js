const express = require('express');
const app = express();
const http = require('http');
app.use(express.static("public"));
const port = 443;
const server = http.createServer(app);

server.listen(port, () => {
    console.log("listening on " + port);
});






