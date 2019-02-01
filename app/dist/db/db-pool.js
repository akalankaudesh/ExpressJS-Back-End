"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
exports.pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: "posdb",
    user: "root",
    password: "1234",
    connectionLimit: 10 //limiting the connection
});
