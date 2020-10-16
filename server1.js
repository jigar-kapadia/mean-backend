const express = require('express');
const logger = require('morgan');
const movies = require('./routes/test') ;
const assert = require('assert');
//const mongo = require('mongodb');
//const mongoClient = require('./config/dbMongoClient');
const app = express();
const mongoClient = require('mongodb').MongoClient;

mongoClient.connect("mongodb://jk:jk1a2345@ds11a7535.mlab.com:17535",function(err,client){
assert.equal(null,client);
console.log('Connected');
//client.close();
});


app.listen(3000, function(){
    console.log('3000');
   });
