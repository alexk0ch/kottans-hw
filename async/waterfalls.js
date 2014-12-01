  var http = require('http'), 
      async = require('async'),
      fs = require('fs');

  async.waterfall([
    function(cb){
      fs.readFile(process.argv[2], function(err, data){
        cb(null, data.toString())
      })
    },

    function(URL, cb){
      http.get(URL, function(res){
        var body = '';
        res.on('data', function(chunk){
          body += chunk.toString();
        });
        res.on('end', function(){
          cb(null, body);
        });
      }).on('error', function(err) {
        cb(err);
      });
    }
    ],
    function(err, result){
      if (err) return console.error(err);
      console.log(result);
    });