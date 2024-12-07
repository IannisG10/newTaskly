const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")

const dataModel = require("./models/data")
//Instanciation
const app = express()

//Middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/").then(()=>{
    console.log("Connect successfully with the dataBase")
}).catch(err => console.error("Error with the connection DB"))

const PORT = 3173

app.post("/data",async (req,res)=>{
    const {_id,desc,tags,date,isCheck} = req.body
    
    try {
        const myData = new dataModel({
            _id: _id,
            desc: desc,
            tags: tags,
            date: date,
            isCheck: isCheck
        })
        const saveData = await myData.save()
        res.status(200).json(saveData) 
        console.log("Data post succesfully")       
    } catch (err) {
        console.error("Impossible to post data")
    }
})

app.get("/",(req,res) => {
    res.json({
        name: "GUERRA",
        lastname: "Iannis"
    })
})
//get the data
app.get("/data",async (req,res) => {
    
   try{
        const myData = await dataModel.find({})
        res.status(200).json(myData)
   }catch(err){
        console.log("Error during the recuperation of the data",err)
   }
})

app.get("/data/:id", async (req,res) => {
    const { id } = req.params

    try{
       const myData = await dataModel.findById(id)
       res.status(200).json(myData)
    }catch(err){
        console.error("Error: cannot get the specific data",err)
    }
})

// update data
app.put("/data/:id", async (req,res) => {
    const id = req.params.id;
    const updateData = req.body;

    try {
        const myData = await dataModel.findByIdAndUpdate(id,updateData,{new: true})

        if(!myData){
           return res.status(404).json({message: "Nothing element find"})
        }

        const dataToupdate = await dataModel.findById(id)
        res.status(200).json(dataToupdate)
        console.log("Data update succesfully ",dataToupdate)
        
    } catch (err) {
        res.status(404).json({error: err})
        
    }
})

app.delete("/data/:id", async (req,res)=>{
    const id = req.params.id;

    try{
        const myData = await dataModel.findByIdAndDelete(id)
        if(!myData){
            return res.status(404).json({message: "Nothing data find"})
        }
        const dataRest = await dataModel.find({})
        res.status(200).json(dataRest)
        
    }catch(err){
        console.log("Impossile to delete data")
    }

})
app.listen(PORT, ()=>{
    try{
        console.log(`Server is running on ${PORT} port`)
    }catch(err){
        console.error("An error is catching on the port")
    }
})