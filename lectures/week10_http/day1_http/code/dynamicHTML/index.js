/*global console: false, require: false, module: false, exports: false */
var express = require("express"),
    app = express(),
    books = {
        TJJJ34564382: {
            title: "Tom cats",
            description: "The best book on cats EVER,",
            author: "Tom Blackmore"
        },
        BTJJ34564382: {
            title: "Tom dogs",
            description: "Following the enormous success of Tom cats.",
            author: "Tom Blackmore"
        }
    };
// http://localhost:8001/books/TJJJ34564382
// http://localhost:8001/books/BTJJ34564382
// http://localhost:8001/books/XXJJ34564382
app.get("/books/:isbn", function (req, res) {
    "use strict";
    var html,
        book = books[req.params.isbn];
    if (book !== undefined) {
        html = "<!DOCTYPE html>\n";
        html += "<html>\n";
        html += "<head>\n";
        html += "<title>" + book.title + "</title>\n";
        html += "</head>\n";
        html += "<body>\n";
        html += "<h1>" + book.title + "</h1>\n";
        html += "<p>" + book.description + "</p>\n";
        html += "</body>\n";
        html += "</html>";
        res.send(html, 200, {
            "Content-Type": "text/html"
        });
    } else {
        res.send("Not found", 404, {
            "Content-Type": "text/plain"
        });
    }
});
app.listen(8001);
console.log("DynamicHTML server running on port 8001");