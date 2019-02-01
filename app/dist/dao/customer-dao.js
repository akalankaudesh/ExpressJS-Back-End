"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var Promise = require("promise");
var CustomerDAO = /** @class */ (function () {
    function CustomerDAO() {
    }
    CustomerDAO.prototype.findAllCustomers = function () {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "posdb",
            user: "root",
            password: "1234"
        });
        return new Promise(function (resolve, reject) {
            connection.query("SELECT * FROM customer", function (err1, results, fields) {
                if (err1) {
                    reject(err1);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    return CustomerDAO;
}());
exports.CustomerDAO = CustomerDAO;
