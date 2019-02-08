const stateModel = require('../models/state');

module.exports = {
    getStates : function(req,res,next){
        stateModel.find({},function(err,state){
            if(err){
                next(err);
            }
            else{
                var parsedJson = JSON.parse(JSON.stringify(state));
                res.json({status : "success", message : "States Found", data : parsedJson[0].states });
            }

        })
    },
    getStatesByCountryId : function(req,res,next){
        stateModel.find({},function(err,state){
            if(err){
                next(err);
            }
            else{
                var parsedJson = JSON.parse(JSON.stringify(state));
                var filteredStates = parsedJson[0].states.filter(x => x.country_id == req.params.countryid)
                res.json({status : "success", message : "States Found", data : filteredStates });
            }

        })
    }
}
