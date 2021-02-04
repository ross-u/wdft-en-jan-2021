const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  if (request.url === "/") {
    fs.readFile(__dirname + "/index.html", "utf8", (error, loadedFile) => {
      if (error) {
        response.write(error);
        response.end();
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(loadedFile);
        response.end();
      }
    });
  } else if (request.url === "/about") {
    fs.readFile(__dirname + "/about.html", "utf8", (error, loadedFile) => {
      if (error) {
        response.write(error);
        response.end();
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(loadedFile);
        response.end();
      }
    });
  } else {
    response.write(`<h1>404 Error</h1>`);
    response.end();
  }
});

server.listen(3000, function () {
  console.log("Server is running at PORT 3000");
});
