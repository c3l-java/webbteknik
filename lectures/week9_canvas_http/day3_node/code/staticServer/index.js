var http = require("http"),
    path = require("path"),
    fs = require("fs"),
    server = http.createServer(function (req, res) {
        "use strict";
        var filePath;
        if (req.url === "/") {
            filePath = "./public/index.html";
        } else {
            filePath = "./public" + req.url;
        }
        fs.exists(filePath, function (exists) {
            if (exists) {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                fs.createReadStream(filePath).pipe(res);
            } else {
                res.writeHead(404, {
                    "Content-Type": "text/plain"
                });
                res.write("404 Error couldn't find file");
                res.end();
            }
        });
    });
server.listen(4000);
console.log("server started on port 4000");