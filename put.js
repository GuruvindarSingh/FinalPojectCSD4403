var express = require('express');
var mongo = require('mongodb');

var app = express();
app.use(express.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.put('/api/costupdate', (req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("JaiHoSales");
  var myquery = { Location: "Brampton" };
  var newvalues = { $set: {Address:Peelton Heights Rd} };
  dbo.collection("Branch").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
	
    db.close();
  });
});
});

var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));