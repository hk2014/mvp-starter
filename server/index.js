var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
//var items = require('../database-mysql');
var db = require('../database-mongo');
const docApi = require('../helpers/docApi')
var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
	//console.log('req_serv:', req.body.term);

  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/items', function (req, res) {
  
  docApi.findDoctor(req.body.term, (error, result)=> {
 
  if(error){
    console.log('server_post_err:',error);
    res.status(400);
    res.end();
  }else{
    res.status(201);
   
    if(result.data){
    for(var i = 0; i < result.data.length;i++){

      db.save(result.data[i]);

    }
    }
  

    res.end();
  }
  
  })

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

