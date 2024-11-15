const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const db= async ()  => {
  await  mongoose.connect(process.env.database,
        {
         // useFindandModify:false,
         // useunifiedtopology:true
           
    
    
        }).then(()=>{ console.log('mongodb connected')}).catch((err)=>{
            console.log('not connected')
        })
}

module.exports =db
