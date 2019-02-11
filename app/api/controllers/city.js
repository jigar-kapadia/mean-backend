const cityModel = require('../models/city');

module.exports = {
    getCities : function(req,res,next){
        cityModel.find({},function(err,state){
            if(err){
                next(err);
            }
            else{
                var parsedJson = JSON.parse(JSON.stringify(state));
                res.json({status : "success", message : "Cities Found", data : parsedJson[0].states });
            }

        })
    },
    getCitiesByStateId : function(req,res,next){
        cityModel.find({},function(err,city){
            if(err){
                next(err);
            }
            else{
                var parsedJson = JSON.parse(JSON.stringify(city));
                var filteredCities = parsedJson[0].cities.filter(x => x.state_id == req.params.stateid)
                res.json({status : "success", message : "Cities Found", data : filteredCities });
            }

        })
    }
}

