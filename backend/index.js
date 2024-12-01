const express = require("express")
const cors = require("cors")

const app = express()
// Initialisé les middleware
app.use(express.json())
app.use(cors())

const PORT = 3050

app.get("/",(req,res)=>{
    res.send("Serveur démarré sur le port 3050")
})

app.post("/task",(req,res) => {
    const data = req.body
    try{
        console.log("Données reçu du front : ",data)
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