const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const StateSchema = new Schema({
    id: { type: Number, trim: true },
    name: { type: String, trim: true },
    country_id : { type: String, trim: true }
});
module.exports = mongoose.model('State', StateSchema)