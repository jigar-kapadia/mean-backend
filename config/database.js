//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://jk:jk12345@ds121105.mlab.com:21105/movsample'; //'mongodb://localhost/node_rest_api';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;