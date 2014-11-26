var q = require('q'), 
	qhttp = require('q-io/http'),
	ids = 'http://localhost:7000/',
	db = 'http://localhost:7001/';

var buildDbPath = String.prototype.concat.bind(db);

qhttp.read(ids)
	.then(buildDbPath)
	.then(qhttp.read)
	.then(JSON.parse)
	.then(console.log, console.error)
	.done();
//13 lines!

 // var qhttp = require('q-io/http')
 //   , _ = require('lodash')
 //   , cachePath = "http://localhost:7000/"
 //   , dbPath = "http://localhost:7001/";

 // var buildDbPath = _.bind(String.prototype.concat, dbPath);

 // qhttp.read(cachePath)
 // .then(_.compose(qhttp.read, buildDbPath))
 // .then(_.compose(console.log, JSON.parse))
 // .then(null, console.error)
 // .done();
 //11 lines - 2 lines saved? omg