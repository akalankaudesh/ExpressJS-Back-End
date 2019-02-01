import Promise=require("promise");
import {ItemDAO} from "../item-dao";
import mysql=require("mysql");
import {Pool, PoolConnection} from "mysql";
import {Item} from "../../../entity/item";



export class ItemDaoImpl implements ItemDAO{
    constructor(private connection:PoolConnection){

    }
    
    delete(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM items WHERE item_code='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        }); 
       
    }

    find(id: string): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM items WHERE item_code='${id}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Item>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM items`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });
    }

    save(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO items VALUES ('${entity.itemcode}','${entity.description}','${entity.unitprice}','${entity.qty}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    update(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

            // console.log(`UPDATE items SET description = '${entity.description}', unit_price ='${entity.unitprice}' WHERE  item_code='${entity.itemcode}'`);
            this.connection.query(`UPDATE items SET description = '${entity.description}', unit_price ='${entity.unitprice}' WHERE item_code='${entity.itemcode}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }
    
}
