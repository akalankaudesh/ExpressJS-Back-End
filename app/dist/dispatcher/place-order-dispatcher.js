"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// This will return a new instance of a router object that can be used to handle routing
var orderDispatcher = express.Router();
orderDispatcher.route("")
    .get(function (req, res) {
})
    .post(function (req, res) {
});
orderDispatcher.route("/:id")
    .get(function (req, res) {
})
    .delete(function (req, res) {
})
    .put(function (req, res) {
});
exports.default = orderDispatcher;
