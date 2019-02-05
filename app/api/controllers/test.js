const testModel = require('../models/test');

module.exports = {
    // getById: function(req, res, next) {
    //  console.log(req.body);
    //  movieModel.findById(req.params.movieId, function(err, movieInfo){
    //   if (err) {
    //    next(err);
    //   } else {
    //    res.json({status:"success", message: "Movie found!!!", data:{movies: movieInfo}});
    //   }
    //  });
    // },
    
   getAll: function(req, res, next) {
     let List1 = [];
     testModel.find({}, function(err, tests){
      if (err){
       next(err);
      } else{
       for (let movie of tests) {
        List1.push({id: movie._id, name: movie.name, number: movie.number});
       }
       res.json({status:"success", message: "Test list found!!!", data:{tests: List1}});
          
      }
   });
    },

//    updateById: function(req, res, next) {
//      movieModel.findByIdAndUpdate(req.params.movieId,{name:req.body.name}, function(err, movieInfo){
//    if(err)
//        next(err);
//       else {
//        res.json({status:"success", message: "Movie updated successfully!!!", data:null});
//       }
//      });
//     },
//    deleteById: function(req, res, next) {
//      movieModel.findByIdAndRemove(req.params.movieId, function(err, movieInfo){
//       if(err)
//        next(err);
//       else {
//        res.json({status:"success", message: "Movie deleted successfully!!!", data:null});
//       }
//      });
//     },

   create: function(req, res, next) {
      testModel.create({ name: req.body.name, number: req.body.number }, function (err, result) {
         if (err) 
          next(err);
         else
          res.json({status: "success", message: "Movie added successfully!!!", data: null});
         
       });
    },
   }