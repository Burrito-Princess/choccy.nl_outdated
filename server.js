const port = 80;
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(request, response) {
  const hostname = request.headers.host.split(':')[0];
  const url = request.url;

  switch (hostname) {
    case 'choccy.nl':
        if (url === '/assets/css/n_style.css') {
            serveStaticFile('public/assets/css/n_style.css', 'text/css', response);
          } else if (url === '/assets/img/mountain_backl_3.svg') {
            serveStaticFile('public/assets/img/mountain_backl_3.svg', 'image/svg+xml', response);
          } else {
            serveStaticFile('public/index.html', 'text/html', response);
          }
          break;
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

function serveStaticFile(filePath, contentType, response) {
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
  

server.listen(port, () => {
    console.log("listening on " + port);
});






