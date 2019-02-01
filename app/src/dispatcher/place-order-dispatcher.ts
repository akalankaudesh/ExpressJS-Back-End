import express = require("express");
import {CustomerBO} from "../business/customer-bo";

// This will return a new instance of a router object that can be used to handle routing
const orderDispatcher = express.Router();



orderDispatcher.route("")
    .get((req, res) => {


    })
    .post((req, res) => {

    });

orderDispatcher.route("/:id")
    .get((req, res) => {

    })
    .delete((req, res) => {

    })
    .put((req, res) => {

    });

export default orderDispatcher;
