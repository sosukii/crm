const {Schema, model} = require('mongoose')

const schema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:false
    },
    name:{
        type:String,
        required:false,
        unique:false
    },
    phone:{
        type:String,
        required:false,
        unique:false
    },
    job:{
        type:String,
        required:false,
        unique:false
    },
    payment:{
        type:Number,
        required:false
    },
    equipments:{
        type:String,
        required:false
    }
})

module.exports = model('User', schema)

