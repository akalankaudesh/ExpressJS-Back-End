"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var item_bo_1 = require("../business/item-bo");
var itemDispatcher = express.Router();
itemDispatcher.route("")
    .get(function (req, res) {
    var promise = new item_bo_1.ItemBO().findAllItems();
    promise.then(function (items) {
        res.status(200).json(items);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("itemcode" in req.body && "description" in req.body && "unitprice" in req.body && "qty" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new item_bo_1.ItemBO().SaveItem(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});
itemDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new item_bo_1.ItemBO().FindItem(req.params.id);
    promise.then(function (item) {
        if (item.length > 0) {
            res.status(200).send(item[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .put(function (req, res) {
    if (!("itemcode" in req.body && "description" in req.body && "unitprice" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.itemcode !== req.params.id) {
        res.status(400).send("Mismatched Item ID");
        return;
    }
    var promise = new item_bo_1.ItemBO().UpdateItem(req.body);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .delete(function (req, res) {
    var promise = new item_bo_1.ItemBO().DeleteItem(req.params.id);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
exports.default = itemDispatcher;
