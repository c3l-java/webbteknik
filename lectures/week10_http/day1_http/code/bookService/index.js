/*global console: false, require: false, module: false, exports: false */
var express = require("express"),
    app = express(),
    versionNumber = "v1",
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
app.use(require('connect').bodyParser());
app.get("/" + versionNumber + "/books", function (req, res) {
    "use strict";
    res.json(books);
});
app.post("/" + versionNumber + "/books", function (req, res) {
    "use strict";
    var book = req.body;
    res.json(201, book);
});
// http://localhost:8001/books/TJJJ34564382
// http://localhost:8001/books/BTJJ34564382
// http://localhost:8001/books/XXJJ34564382
app.get("/" + versionNumber + "/books/:isbn", function (req, res) {
    "use strict";
    var book = books[req.params.isbn];
    if (book !== undefined) {
        res.json(200, book);
    } else {
        res.send(404, "Not found", {
            "Content-Type": "text/plain"
        });
    }
});
app.put("/" + versionNumber + "/books/:isbn", function (req, res) {
    var book = req.body;
    books[req.params.isbn] = book;
    res.send(200, "Updated", {
        "Content-Type": "text/plain"
    });
});
app.del("/" + versionNumber + "/books/:isbn", function (req, res) {
    res.send(200, "deleted object", {
        "Content-Type": "text/plain"
    });
});
app.listen(8001);
console.log("DynamicHTML server running on port 8001");