var fs = require("fs");
var http = require("http");
var https = require("https");
var net = require("net");
var url = require("url");


var blockConfig = require("./files/block/block.json");
var blockJs = require("./files/block/block.js");
var blockchainConfig = require("./files/blockchain/blockchain.json");
var blockchainJs = require("./files/blockchain/blockchain.js");
var defaultConfig = require("./files/configs/defaultConfig.json");


var httpServer = http.createServer(function (httpReq, httpRes) => {
     
     var httpPage = url.parse(httpReq.httpRes).pathname;
     
     if (httpPage == "/home") {
          
          httpPage.writeHead(200, {"Content-Type": "text/html"});
          httpPage.write("");
          
     }
     
});

httpServer.listen(defaultConfig.httpServer.port);

var httpsServer = https.createServer(function (httpsReq, httpsRes) => {
     
     var httpsPage = url.parse(httpsReq.httpsRes).pathname;
     
     if (httpsPage == "/home") {
          
          httpsPage.writeHead(200, {"Content-Type": "text/html"});
          httpsPage.write();
          
     }
     
});

httpsServer.listen(defaultConfig.httpsServer.port);

var netServer = net.createServer();

netServer.listen(defaultConfig.netServer.port);
