const mongoose = require('mongoose');

const userSchama = new mongoose.Schema({

    name : { type : String , required : true},
    email : {type : String , required : true , unique : true},
    age :  {type : Number , required :true }
})

module.exports = mongoose.model('UserData', userSchama );


