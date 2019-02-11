const express = require('express');
const logger = require('morgan');
const movies = require('./routes/test') ;
const users = require('./routes/user');
const countries = require('./routes/country');
const states = require('./routes/state');
const cities = require('./routes/city');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
var jwt = require('jsonwebtoken');
var swaggerUI = require('swagger-ui-express');
var swaggerDoc = require('./app/swagger.json'); //app\
const app = express();
app.set('secretKey', 'nodeRestApi'); // jwt secret token
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(req, res){
res.json({"tutorial" : "Build REST API with node.js"});
});
// public route
app.use('/user', users);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDoc));
// private route
app.use('/test', validateUser, movies);
app.use('/countries', countries);
app.use('/states', states);
app.use('/cities',cities);

app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  next();
});
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
  
}
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req, res, next) {
 let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// handle errors
app.use(function(err, req, res, next) {
 console.log(err);
 
  if(err.status === 404)
   res.status(404).json({message: "Not found"});
  else 
    res.status(500).json({message: "Something looks wrong :( !!!"});
});
app.listen(3000, function(){
 console.log('Node server listening on port 3000');
});