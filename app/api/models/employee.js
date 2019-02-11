const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    id: { type: Number, trim: true },
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
    email: { type: String, trim: true},
    contact: { type: Number, trim: true},
    city_id : { type: Number, trim: true },
    state_id : { type: Number, trim: true },
    country_id : { type: Number, trim: true },
    dateofbirth : {type: Date},
    dateofjoining : {type: Date},
    salary : {type : Number,trim : true},
    gender : {type : String, trim : true},
    depertment_id : {type :Number},
    isactive : {type : Boolean},
    skills : {type : String},
    summary : {type : String},
    experience : {type :Number}
});
module.exports = mongoose.model('Employee', EmployeeSchema)