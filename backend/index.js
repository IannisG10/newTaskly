const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const data_model = require("./models/data")

const app = express()
// Initialisé les middleware
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://guerraiannis:newTaskly10@cluster0.ze19o.mongodb.net/taskManager?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>{
            console.log("Connexion à la base de donnée a bien été établie")
        })
        .catch((err)=>{
            console.error("Erreur de connexion à la base de données")
        })

const PORT = 3050

app.get("/",(req,res)=>{
    res.send("Serveur démarré sur le port 3050")
})

app.post("/task",(req,res) => {
    const { desc,tags } = req.body
    try{
        console.log("Données reçu du front : ",data)
        const test = new data_model({description: desc, tag: tags})
        test.save()
        res.status(201).json(data)
    }catch(err){
        console.error("Probleme de reception des données")
    }
})

app.listen(PORT,()=>{
    try{
        console.log(`Serveur en écoute sur le port ${PORT}`)
    }catch(err){
        console.error(`Erreur d'acès au serveur via le port ${PORT}`)
    }
})