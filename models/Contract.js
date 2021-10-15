const {Schema, model} = require('mongoose')

const schema = new Schema({
    company:{
        type:String,
        required:false
    },
    contactFace:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    totalSum:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:true
    },
    additional:{
        type:String,
        required:false
    },
    start:{
        type: Date,
        default: Date.now()
    }
})
module.exports = model('Contract', schema)