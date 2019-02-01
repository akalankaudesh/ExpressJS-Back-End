"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var Promise = require("promise");
var ItemBO = /** @class */ (function () {
    function ItemBO() {
    }
    ItemBO.prototype.findAllItems = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = itemDAO.findAll();
                    promise.then(function (items) {
                        resolve(items);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.FindItem = function (itemcode) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = itemDAO.find(itemcode);
                    promise.then(function (item) {
                        resolve(item);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.SaveItem = function (item) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = itemDAO.save(item);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.UpdateItem = function (item) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = itemDAO.update(item);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.DeleteItem = function (itemcode) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise = itemDAO.delete(itemcode);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    return ItemBO;
}());
exports.ItemBO = ItemBO;
