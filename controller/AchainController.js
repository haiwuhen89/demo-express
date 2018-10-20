/**
 * Created by zhangke on 15/12/30.
 */
var http = require("http");

exports.getList = function (req,res) {
    // body...

    // 使用了superagent来发起请求
    var superagent = require('superagent');
    // 查询本机ip，这里需要根据实际情况选择get还是post
    var sreq = superagent.get('https://browser.achain.com/wallets/api/browser/act/TransactionList.Query?block_num=0&acct_address=ACTEiVHrZMwikGbft1nTPP1uyiQdxSd3DyJE&page=1&per_page=10');
    sreq.pipe(res);
    sreq.on('end', function(){
        console.log('done');
    });

    // var sreq = http.request({
    //     host:     'http://browser.achain.com', // 目标主机
    //     path:     'http://browser.achain.com/wallets/api/browser/act/TransactionList.Query?block_num=0&acct_address=ACTEiVHrZMwikGbft1nTPP1uyiQdxSd3DyJE&page=1&per_page=10', // 目标路径
    //     method:   'get' // 请求方式
    // }, function(sres){
    //     sres.pipe(res);
    //     sres.on('end', function(){
    //         console.log('done');
    //     });
    // });
}