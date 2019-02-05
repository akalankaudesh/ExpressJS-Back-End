import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import {ItemDAO} from "../dao/custom/item-dao";
import {ItemDTO} from "../dto/item-dto";
import Promise = require("promise");
import {CustomerDAO} from "../dao/custom/customer-dao";
import cors=require("cors");

export class ItemBO{

    findAllItems(): Promise<Array<ItemDTO>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const itemDAO = <ItemDAO> getDAO(DAOTypes.ITEM, connection);

                    const promise = itemDAO.findAll();
                    promise.then(items => {
                        resolve(items);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });

    }

  FindItem(itemcode:string):Promise<Array<ItemDTO>>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if (err){
                    reject (err);
                } else {
                   const itemDAO=<ItemDAO>getDAO(DAOTypes.ITEM,connection);
                   const promise=itemDAO.find(itemcode);
                   promise.then(item=>{
                       resolve(item);
                       pool.releaseConnection(connection);
                   }).catch(error=>{
                      reject(error);
                      pool.releaseConnection(connection);
                   });

                }
            });
        });
  }

    SaveItem(item:ItemDTO):Promise<boolean>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if (err){
                    reject(err);
                } else {
                    const itemDAO=<ItemDAO>getDAO(DAOTypes.ITEM, connection);
                   const promise=itemDAO.save(item);
                   promise.then(result=>{
                       resolve(result);
                       pool.releaseConnection(connection);
                   }).catch(error=>{
                       reject(error);
                       pool.releaseConnection(connection);
                   });
                }
            });
        });
    }

    UpdateItem(item:ItemDTO):Promise<boolean>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if (err){
                    reject(err);
                } else {
                    const itemDAO=<ItemDAO>getDAO(DAOTypes.ITEM,connection);
                    const promise=itemDAO.update(item);
                    promise.then(result=>{
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                       reject(error);
                       pool.releaseConnection(connection);
                    });
                }
            });
        });
    }

    DeleteItem(itemcode:string):Promise<boolean>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err, connection)=>{
                if (err){
                    reject(err);
                } else {
                    const itemDAO=<ItemDAO>getDAO(DAOTypes.ITEM,connection);
                    const promise=itemDAO.delete(itemcode);
                    promise.then(result=>{
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }
    countItems():Promise<number>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) =>{
                if (err){
                    reject(err);
                } else {
                    const itemDAO=<CustomerDAO>getDAO(DAOTypes.ITEM,connection );
                    const promise=itemDAO.count();
                    promise.then(count=>{
                        resolve(count);
                    }).catch(err => {
                        reject(err);
                    });
                }
            } );
        });
    }
}

