const mongoose = require("mongoose")
const Schema = mongoose.Schema

const roomSchema = new Schema({
    number:Number,
    floor:Number,
    bed:Number,
    avalaible:{type:Boolean,default:true},
})

exports.Room= mongoose.model("room",roomSchema)