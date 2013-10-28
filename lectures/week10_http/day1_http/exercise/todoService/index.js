var listItems = require("memoryDb");
listItems.create({
    "test": "Tom"
});
console.log(listItems.readAll());