const express = require('express');
const app = express();
const http = require('http');
app.use(express.static("public"));
const port = 80;
const server = http.createServer(app);

server.listen(port, () => {
    console.log("listening on " + port);
});




