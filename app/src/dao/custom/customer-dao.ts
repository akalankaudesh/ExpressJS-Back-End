import {Customer} from "../../entity/customer";
// import promise=require("promise");

import {promises} from "fs";

export interface CustomerDAO extends SuperDAO<Customer,string>{
    count():Promise<number>;
}