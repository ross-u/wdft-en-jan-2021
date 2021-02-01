const http = require("http");

const server = http.createServer(function (request, response) {
  //     example.com/
  if (request.url === "/") {
    response.write("HOME PAGE !!!"); // Set the HTTP response message body
    response.end(); // Send the response back
  }
  //     example.com/about
  else if (request.url === "/about") {
    response.write("THIS IS ABOUT PAGE !!!");
    response.end();
    //     example.com/*
  } else {
    response.write("404 PAGE");
    response.end();
  }
});

server.listen(3000, function () {
  console.log("Server is running at PORT 3000");
});
