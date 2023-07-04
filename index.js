const express = require("express");
const cors = require('cors');

const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors());

const {connection} = require("./db")
const {travelRouter} = require("./routes/travel.route")

app.get("/", (req,res) => {
    res.send("Welcome to backend of Plan my trip")
})


app.use("/api",travelRouter)

app.listen(process.env.port, async ()=>{
    try{
        await connection
        console.log("Connected to DB")
    } catch(err){
        console.log(err.message)
    }
    console.log(`Server is listening at port ${process.env.port}`)
})
