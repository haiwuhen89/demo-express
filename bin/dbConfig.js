/**
 * Created by zhangke on 15/12/31.
 */
var mysql = require('mysql');

exports.db_connect = function () {
    var db_connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'runtest'
        //debug    : 'true'
    });
    return db_connection;
};