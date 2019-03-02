const userModel = require('../models/user');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports = {
    create: function(req, res, next) {
     
     userModel.create({ firstname: req.body.firstName, lastname : req.body.lastName, email: req.body.email, password: req.body.password,role : req.body.role,accesstype : req.body.accesstype }, function (err, result) {
         if (err) 
          next(err);
         else
          res.json({status: "success", message: "User added successfully!!!", data: null});
         
       });
    },
   authenticate: function(req, res, next) {
     userModel.findOne({email:req.body.email}, function(err, userInfo){
        if (err) {
         next(err);
        } else {
   if(bcrypt.compareSync(req.body.password, userInfo.password)) {
      const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
      res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
   }
   else{
      res.json({status:"error", message: "Invalid email/password!!!", data:null});
   }
        }
       });
    },
    getallusers : function(req,res,next){
       userModel.find({},function(err,users){
          if(err)
            next(err);
            else{
               res.json({status:"success", message: "users found!!!", data:{user: users}})
            }
       })
    },
    getuserbyemail : function(req,res,next){
       console.log(req.params.email);
       userModel.findOne({email : req.params.email},function(err,users){
          if(err)
            next(err)
         else
            res.json({status : "success", message : "", data : {user : users}})
       })
    },
    getuserbyid : function(req,res,next){
      console.log(req.params.id);
      userModel.findById(req.params.id ,function(err,users){
         if(err)
           next(err)
        else
           res.json({status : "success", message : "", data : {user : users}})
      })
   }
   }