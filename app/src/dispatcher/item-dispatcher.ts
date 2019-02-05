import express=require("express");
import {ItemBO} from "../business/item-bo";
import cors=require("cors");

import {CustomerBO} from "../business/customer-bo";

const itemDispatcher=express.Router();

itemDispatcher.route("")
    .get((req, res) => {
      const promise=new ItemBO().findAllItems();
        promise.then(items=>{
            res.status(200).json(items);
        }).catch(error=>{
           res.status(500).send(error);
        });
    })

    .head(cors({
        exposedHeaders:['X-Count2']
    }),(req, res) => {
        const promise=new ItemBO().countItems();
        promise.then(count => {
            res.append("X-Count2",count+"");
            res.sendStatus(200);
        }).catch(err => {
            res.status(500).send(err);
        });
    })

    .post((req, res) => {
        if (!("itemcode" in req.body && "description" in req.body && "unitprice" in req.body && "qty" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        const promise = new ItemBO().SaveItem(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));
    });
itemDispatcher.route("/:id")
    .get((req, res) => {
        const promise = new ItemBO().FindItem(req.params.id);
        promise.then(item=>{

            if (item.length > 0){
                res.status(200).send(item[0]);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    })
    .put((req, res) => {
        if (!("itemcode" in req.body && "description" in req.body && "unitprice" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        if (req.body.itemcode !== req.params.id){
            res.status(400).send("Mismatched Item ID");
            return;
        }

        const promise = new ItemBO().UpdateItem(req.body);
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
    .delete((req, res) => {
        const promise = new ItemBO().DeleteItem(req.params.id);
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

export default itemDispatcher;
