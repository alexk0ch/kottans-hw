  var http = require('http'), 
      async = require('async'),
      fs = require('fs'),
      ulrOne = process.argv[2],
      urlTwo = process.argv[3];

  async.series({
     requestOne: function (cb) {
      http.get(ulrOne, function (res) {
      var body = '';
      res.on('data', function (data) {
        body += data.toString();
      })
      res.on('end', function () {
        cb(null, body)
      })
     }).on('error', function (err) {
        cb(err);
     })
   },

     requestTwo: function (cb) {
      http.get(urlTwo, function (res) {
      var body = '';
      res.on('data', function (data) {
        body += data.toString();
      })
      res.on('end', function () {
        cb(null, body)
      })
     }).on('error', function (err) {
        cb(err);
     })
  }
},
  function(err, results){
    console.log(err || results)
  });