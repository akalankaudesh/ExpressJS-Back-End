"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var customer_dispatcher_1 = __importDefault(require("./customer-dispatcher"));
var item_dispatcher_1 = __importDefault(require("./item-dispatcher"));
var place_order_dispatcher_1 = __importDefault(require("./place-order-dispatcher"));
//this will return a new instance of a router object that can be used to handle routing.
var mainDispatcher = express.Router();
// mainDispatcher.use("*",(req,res)=>{
//     res.send("<h1>Main Dispather</h1>");
// });
mainDispatcher.use("/api/v1/customers", customer_dispatcher_1.default);
mainDispatcher.use("/api/v1/items", item_dispatcher_1.default);
mainDispatcher.use("/api/v1/orders", place_order_dispatcher_1.default);
exports.default = mainDispatcher;
