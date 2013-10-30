/*jslint browser:true */
/*global db: false, $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
db.webservice = function () {
    "use strict";
    // post the object to /items url and then call the callback

    function create(obj, callback) {}
    // method get 
    // url /items/id

    function read(id, callback) {}
    // retreive all items and pass them to the callback
    // method get 
    // url /items

    function readAll(callback) {}
    // method put
    // url /items/id

    function update(id, obj, callback) {}
    // method put
    // url /items/id

    function del(id, callback) {}
    return {
        create: create,
        readAll: readAll,
        update: update,
        read: read,
        del: del
    };
};