import express = require("express");
import cors=require("cors");

import {CustomerBO} from "../business/customer-bo";

// This will return a new instance of a router object that can be used to handle routing
const customerDispatcher = express.Router();



customerDispatcher.route("")
    .get((req, res) => {

        const promise = new CustomerBO().findAllCustomers();
        promise.then(customers=>{
            res.status(200).json(customers);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .head(cors({
      exposedHeaders:['X-Count']
    }),(req, res) => {
        const promise=new CustomerBO().countCustomer();
        promise.then(count => {
            res.append("X-Count",count+"");
            res.sendStatus(200);
        }).catch(err => {
            res.status(500).send(err);
        });
    })
    .post((req, res) => {

        if (!("id" in req.body && "name" in req.body && "address" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        const promise = new CustomerBO().saveCustomer(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    });

customerDispatcher.route("/:id")
    .get((req, res) => {

        const promise = new CustomerBO().findCustomer(req.params.id);
        promise.then(customers=>{

            if (customers.length > 0){
                res.status(200).send(customers[0]);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .delete((req, res) => {

        const promise = new CustomerBO().deleteCustomer(req.params.id);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .put((req, res) => {

        if (!("id" in req.body && "name" in req.body && "address" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.id !== req.params.cid){
            res.status(400).send("Mismatched Customer ID");
            return;
        }

        const promise = new CustomerBO().updateCustomer(req.body);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    });

export default customerDispatcher;
