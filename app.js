const express = require("express");
const app = express();
const connectDB = require("./confing/dbcon")
const sendData = require('./Seeder')
const News = require("./models/newsModels")
const cors=require("cors")

require("colors")
app.use(cors())

sendData()
connectDB()

app.get("/", (req, res) => {
    res.send("this is home page ")
})

app.use(express.json())

app.get('/getdata', async (req, res) => {
    try {
        const sendData = await News.find({  });
        res.status(200).json(sendData)
        
    } catch (error) {
        console.log(error)
    }
})

app.listen(8000, () => {
    console.log("app is running on port 8000".bgMagenta.white)
})