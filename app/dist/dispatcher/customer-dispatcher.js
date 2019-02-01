"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var customer_bo_1 = require("../business/customer-bo");
// This will return a new instance of a router object that can be used to handle routing
var customerDispatcher = express.Router();
customerDispatcher.route("")
    .get(function (req, res) {
    var promise = new customer_bo_1.CustomerBO().findAllCustomers();
    promise.then(function (customers) {
        res.status(200).json(customers);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .head(cors({
    exposedHeaders: ['X-Count']
}), function (req, res) {
    var promise = new customer_bo_1.CustomerBO().countCustomer();
    promise.then(function (count) {
        res.append("X-Count", count + "");
        res.sendStatus(200);
    }).catch(function (err) {
        res.status(500).send(err);
    });
})
    .post(function (req, res) {
    if (!("id" in req.body && "name" in req.body && "address" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new customer_bo_1.CustomerBO().saveCustomer(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});
customerDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new customer_bo_1.CustomerBO().findCustomer(req.params.id);
    promise.then(function (customers) {
        if (customers.length > 0) {
            res.status(200).send(customers[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .delete(function (req, res) {
    var promise = new customer_bo_1.CustomerBO().deleteCustomer(req.params.id);
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
    .put(function (req, res) {
    if (!("id" in req.body && "name" in req.body && "address" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.cid) {
        res.status(400).send("Mismatched Customer ID");
        return;
    }
    var promise = new customer_bo_1.CustomerBO().updateCustomer(req.body);
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
exports.default = customerDispatcher;
