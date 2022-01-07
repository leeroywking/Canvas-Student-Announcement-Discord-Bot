var http = require("http");

http
  .createServer(function (request, response) {
    console.log("request ", request.url);
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(content, "utf-8");
  })
  .listen(process.env.PORT || 3000);
