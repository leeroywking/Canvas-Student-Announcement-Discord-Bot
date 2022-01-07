var http = require("http");

http
  .createServer(function (request, response) {
      let content = "Nothing to see here"
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(content, "utf-8");
  })
  .listen(process.env.PORT || 3000);
console.log("Server running at http://127.0.0.1:8125/");
