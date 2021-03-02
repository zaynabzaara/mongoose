const mongoose = require('mongoose')

const personPrototype = mongoose.Schema({
  name : {
        type : String,
        required : true 
    },
    age : {
        type : Number
    },
    favoriteFoods :[{type:String}]
})


module.exports=mongoose.model('persons', personPrototype)