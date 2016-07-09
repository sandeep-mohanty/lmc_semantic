// Launch a http server on node locally
"use strict";

// Define and initialize all the required properties and functions we need to launch the application
var os = require("os");
var ifaces = os.networkInterfaces();
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var PORT = process.env.PORT || 3000;
var platform = process.platform;
var networkName = (platform.toLowerCase() === "linux") ? "eth0" : "local area network";
var app = null;
var getServerIp = function() {

	for ( var network in ifaces ) {

		if ( network.toLowerCase() === networkName ) {
			
			for (var i = 0; i < ifaces[network].length; i += 1) {
				
				if ( ifaces[network][i]["family"] === "IPv4" ) {
					return ifaces[network][i]["address"];
				}

			}
				
		}
		
	}
};

var ipaddress = getServerIp() || "localhost";

var colors = ["Red"];

// Here we will define and invoke an IIFE function which would create a http server to serve a static index.html file.
(function() {

	app = express();
	app.use(express.static('.'));
    app.use(bodyParser.json());
	express.static.mime.define({'image/svg+xml': ['svg']});
    
    app.get("/colors", function(req, res){
		console.log("Hurray got a new GET request to serve !");
		res.setHeader("Content-Type", "application/json");
		res.send(JSON.stringify(colors));
	});
    
    app.get("/es", function(req, res){
		res.sendFile(__dirname + "/index.html");
	});
    
    app.get("/fr", function(req, res){
		res.sendFile(__dirname + "/index.html");
	});
    
    app.get("/it", function(req, res){
		res.sendFile(__dirname + "/index.html");
	});
    app.get("/en", function(req, res){
		res.sendFile(__dirname + "/index.html");
	});
    
    app.get("/de", function(req, res){
		res.sendFile(__dirname + "/index.html");
	});
    
    app.get("/ko", function(req, res){
		res.sendFile(__dirname + "/index.html");
	});
    app.get("/ja", function(req, res){
		res.sendFile(__dirname + "/index.html");
	});
    
    app.get("/zh", function(req, res){
		res.sendFile(__dirname + "/index.html");
	});
    
    app.get("/zh_tw", function(req, res){
		res.sendFile(__dirname + "/index.html");
	});
    
    app.post("/colors", function(req,res){
        console.log("Hurray got a new POST request to serve !");
        let color = req.body.color;
        colors.push(color);
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(colors));
    });
    
	app.listen(PORT, ipaddress, function(){
		console.log("\nThe server IP address, platform and network details are as follows:\n");
		console.log("Server Platform: " + platform);
		console.log("Network Name: " + networkName);
		console.log("Server port: " + PORT + "\nServer address: " + ipaddress);
	});

})();
