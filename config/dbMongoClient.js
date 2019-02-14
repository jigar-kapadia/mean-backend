const monogClient = require('mongodb').MongoClient;

const assert = require('assert');

monogClient.connect("mongodb://jk:jk12345@ds117535.mlab.com:17535",function(err,client){
    assert.equal(null,err);
    console.log('Connected');
    //var db = client.db('meandb');
    client.close();
})

module.exports = monogClient