/**
 * Created by zhangke on 15/12/30.
 */
var http = require("http");
var UserModel = require('../model/UserModel');
exports.getUsers = function(req, res) {
    console.log(req.body);
    var pageIndex = req.body.pageIndex;

    UserModel.getUsersMethod((pageIndex-1)*10,pageIndex*10,function(rs){
        console.log('rs::::::',rs);
        res.send(rs);
    });
};
