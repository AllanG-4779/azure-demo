const mongoose = require("mongoose")

const Schema = mongoose.Schema

const test = new Schema({
    Name:{
        type:String, 
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Marital:{
        type:String,
        required:true
    },
    Student:{
        type:Boolean,
        required:true
    }

},{timestamps:true})

const Testing = mongoose.model("Testing",test)

module.exports = {testModel:Testing}