import express=require("express");
import customerDispatcher from "./customer-dispatcher";
import itemDispatcher from "./item-dispatcher";
import orderDispatcher from "./place-order-dispatcher";

//this will return a new instance of a router object that can be used to handle routing.
const mainDispatcher=express.Router();

// mainDispatcher.use("*",(req,res)=>{
//     res.send("<h1>Main Dispather</h1>");
// });
mainDispatcher.use("/api/v1/customers",customerDispatcher);
mainDispatcher.use("/api/v1/items",itemDispatcher);
mainDispatcher.use("/api/v1/orders",orderDispatcher);

export default mainDispatcher;


