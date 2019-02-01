import mysql = require("mysql");

export const pool = mysql.createPool({
    host:"localhost",
    port:3306,
    database:"posdb",
    user:"root",
    password:"1234",
    connectionLimit: 10 //limiting the connection
});