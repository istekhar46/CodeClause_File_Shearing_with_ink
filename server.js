require("dotenv").config()
const express = require("express")
const connetDb = require('./config/db');


const app = express()
app.use(express.urlencoded({ extended: true }))
connetDb();

// setting view engine 
app.set("view engine", "ejs")

// Route setups
app.get('/',(req, res)=>{
       res.render('index')
})
app.use('/upload',require('./routes/uploadRoute'))
app.use('/file', require('./routes/downloadRout.js'))

// Live server runnog port ..
const PORT = process.env.PORT
app.listen(PORT,()=>console.log(`server is runnig on http://localhost:${PORT}`))