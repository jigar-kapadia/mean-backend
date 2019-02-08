//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://jk:jk12345@ds117535.mlab.com:17535/meandb'; //'mongodb://localhost/node_rest_api'; mongodb://<dbuser>:<dbpassword>@ds117535.mlab.com:17535/meandb
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;