"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var CustomerDAOImpl = /** @class */ (function () {
    function CustomerDAOImpl(connection) {
        this.connection = connection;
    }
    CustomerDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM customer WHERE cusid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM customer WHERE cusid='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM customer", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO customer VALUES ('" + entity.id + "','" + entity.name + "','" + entity.address + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("UPDATE customer SET cusname = '" + entity.name + "', address ='" + entity.address + "' WHERE cusid='" + entity.id + "'");
            _this.connection.query("UPDATE Customer SET name = '" + entity.name + "', address ='" + entity.address + "' WHERE id='" + entity.id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT COUNT(*) as count FROM customer ", function (error, results) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    return CustomerDAOImpl;
}());
exports.CustomerDAOImpl = CustomerDAOImpl;
