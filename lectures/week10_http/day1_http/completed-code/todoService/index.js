/*global console: false, require: false, module: false, exports: false */
var listItems = require("memoryDb"),
    express = require("express"),
    app = express();
listItems.create({
    "test": "Tom"
});
app.use(express.json());
//get http://localhost:8001/items
//Returns the list items array
app.get("/items", function (req, res) {
    "use strict";
    res.json(listItems.readAll());
});
//post http://localhost:8001/items
//Adds an item to the items array
app.post("/items", function (req, res) {
    "use strict";
    var item = req.body,
        itemId = listItems.create(item);
    res.json(201, {
        id: itemId
    });
});
//get http://localhost:8001/items/1
//Returns the item with an id of 1
app.get("/items/:id", function (req, res) {
    "use strict";
    var id = Number(req.params.id),
        item = listItems.read(id);
    if (item !== null) {
        res.json(item);
    } else {
        res.send(404, "Not found");
    }
});
//put http://localhost:8001/items/1
//Updates or creates an item with an id of 1
app.put("/items/:id", function (req, res) {
    "use strict";
    var id = Number(req.params.id),
        item = req.body,
        statusCode = (listItems.read(id) === null) ? 201 : 200;
    listItems.update(id, item);
    res.send(statusCode);
});
//del http://localhost:8001/items/1
//Deletes the item with an id of 1
app.del("/items/:id", function (req, res) {
    "use strict";
    var id = Number(req.params.id);
    listItems.del(id);
    res.send(200);
});
app.listen(8001);
console.log("Server started on port 8001");