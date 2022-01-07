var http = require("http");

let port = process.env.PORT || 3000
http
  .createServer(function (request, response) {
      let content = "Nothing to see here"
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(content, "utf-8");
  })
  .listen(port);
console.log("Server running at", port);
