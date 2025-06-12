const mongoose = require('mongoose');


//restructuring in js
const {Schema} = mongoose;
//creating schema for user
const UserSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }

});

module.exports = mongoose.model('user',UserSchema)
