const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CountrySchema = new Schema({
    id: { type: Number, trim: true },
    name: { type: String, trim: true },
    iso3: { type: String, trim: true },
    iso2: { type: String, trim: true },
    phone_code : {type : String, trim : true},
    capital : { type: String, trim: true },
    currency : { type: String, trim: true }

});
module.exports = mongoose.model('Country', CountrySchema)