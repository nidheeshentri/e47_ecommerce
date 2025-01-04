require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose');
const productRouter = require("./src/routes/productRouter")
const userRouter = require('./src/routes/userRouter')

const saltRounds = process.env.SALT_ROUNDS;
const port = process.env.PORT
const db_link = process.env.DB_CONNECT_LINK
const app = express()

mongoose.connect(db_link)
.then(res => {
    console.log("DB connected successfully")
})
.catch(err => {
    console.log(err)
})

app.use(express.json())

app.get("/", (req, res) => {
    res.send("API is live")
})
app.use("/products", productRouter)
app.use("/user", userRouter)

app.listen(port, ()=>{
    console.log(`Running on http://localhost:${port}`)
})