import express=require("express");
import mainDispatcher from "./dispatcher/main-dispatcher";
import cors=require("cors");


export const app=express();
app.use(express.json());
app.use(cors());
app.use(mainDispatcher);

app.listen(3000,()=>console.log("Server Listening to the port"));
