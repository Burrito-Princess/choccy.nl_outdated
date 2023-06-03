const port = 80;
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(request, response) {
  const hostname = request.headers.host.split(':')[0];
  
  switch (hostname) {
    case 'choccy.nl':
      serveStaticFile('public/index.html', response);
      break;
    case 'official-lou.nl':
      serveStaticFile('official-lou/index.html', response);
      break;
    default:
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.write(`<p>We do not serve the host: <b>${hostname}</b>.</p>`);
      response.end();
  }
});

function serveStaticFile(filePath, response) {
    const fileExtension = path.extname(filePath);
    const contentType = getContentType(fileExtension);
    const file = path.join(__dirname, filePath);
  
    fs.readFile(file, function(error, content) {
      if (error) {
        response.statusCode = 500;
        response.setHeader('Content-Type', 'text/html');
        response.write('<p>Error reading file.</p>');
        response.end();
      } else {
        response.statusCode = 200;
        response.setHeader('Content-Type', contentType);
        response.write(content);
        response.end();
      }
    });
  }
  
  function getContentType(fileExtension) {
    switch (fileExtension) {
      case '.html':
        return 'text/html';
      case '.css':
        return 'text/css';
      case '.js':
        return 'text/javascript';
      default:
        return 'text/plain';
    }
  }

server.listen(port, () => {
    console.log("listening on " + port);
});






