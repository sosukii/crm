const express = require('express')
const app = express()
const mongoose = require('mongoose')
const c = require('config')
const Contract = require('./models/Contract')
const User = require('./models/User')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

async function run(){
    try{
        await mongoose.connect(
            c.get('db'),
            {
            useNewUrlParser: true,
            useUnifiedTopology: true
            }
        )
        app.listen(c.get('port'),()=>console.log('server started', c.get('port')))
    }catch(e){
        console.log(e)
    }
}
run()
app.post('/newcontract', (req,res)=>{
    console.log(req.body)
    const {company,contactFace,address,totalSum,phone,additional} = req.body
    const contractInstance = new Contract()
    contractInstance.company =company
    contractInstance.contactFace = contactFace
    contractInstance.address = address
    contractInstance.totalSum = totalSum
    contractInstance.phone = phone
    contractInstance.additional = additional
    contractInstance.save()
    res.status(201).json({message:'контракт записан!'})
})
app.post('/contracts',async (req,res)=>{
    const contracts = await Contract.find({})
    res.send(contracts)
})
app.post('/newstaff',(req,res)=>{
    let user = new User()
    const {...data} = req.body
    for (const [key,value] of Object.entries(data)){
        user[key]=value
    }
    user.save()
    res.status(201).json({message:'user has been saved success'})
})
app.post('/allstaff',async (req,res)=>{
    const staff = await User.find({})
    res.send(staff)
})







