const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    saved_timelines:[{
        timeline_id :Number,
        timeline_progress:Number
    }]

}, {timestamps:true})

const User = mongoose.model('User', userSchema)

module.exports = User;


