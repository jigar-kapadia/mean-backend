const countryModel = require('../models/country');

module.exports = {
    getCountries : function(req,res,next){
        let countriesList = [];
        countryModel.find({},function(err,country){
            if(err){
                next(err);
            }
            else{
                var parsedJson = JSON.parse(JSON.stringify(country));
                res.json({status : "success", message : "Countries Found", data : parsedJson[0].countries });
            }

        })
    }
}
