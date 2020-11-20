var fs = require("fs");
var http = require("http");
var https = require("https");
var net = require("net");
var url = require("url");


var block = require("./files/blocks/defaultBlock.json");
var blockchain = require("./files/blockchains/defaultBlockchain.json");
var config = require("./files/configs/defaultConfig.json");


var httpServer = http.createServer(function (httpReq, httpRes) => {
     
     
     
});

httpServer.listen(8080);

var httpsServer = https.createServer(function (httpsReq, httpsRes) => {
     
     
     
});

httpsServer.listen(8181);
