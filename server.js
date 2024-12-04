const express = require('express')
const mongoose = require('mongoose')
const db=require('./db')
const routes= require('./route')
const bodyparser=require('body-parser');
const dotenv= require('dotenv')
dotenv.config()
console.log()
const app=express()
app.use(express.json())
app.use(routes)

//app.use(bodyparser.json())
//app.use(express.urlencoded({extended:false}))


db()
const port=process.env.port
app.listen(port,console.log('amanuwa is loading '+port))

