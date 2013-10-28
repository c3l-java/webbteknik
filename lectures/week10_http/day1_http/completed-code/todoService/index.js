var listItems = require("memoryDb"),
    express = require("express"),
    app = express(),
    versionNumber = "v1";
listItems.create({
    "test": "Tom"
});
app.use(express.bodyParser());
app.get("/" + versionNumber + "/items", function (req, res) {
    "use strict";
    res.json(listItems.readAll());
});
app.post("/" + versionNumber + "/items", function (req, res) {
    "use strict";
    var item = req.body,
        itemId = listItems.create(item);
    res.json(201, {
        id: itemId
    });
});
app.get("/" + versionNumber + "/items/:id", function (req, res) {
    "use strict";
    var id = Number(req.params.id),
        item = listItems.read(id);
    if (item !== null) {
        res.json(item);
    } else {
        res.send(404, "Not found");
    }
});
app.listen(8001);