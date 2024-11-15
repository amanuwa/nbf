const mongoose=require('mongoose')
const {Schema}= mongoose
const bcrypt = require('bcryptjs');

const joi=require('joi')
//const uniqueValidator= require("mongoose-unique-validator");
const nschema= new Schema

({
    email:
    {
        type:String,
        required:true,
        uniqueValidator:true
        
    },

    password:
    {
        type:String,
        required:true,
    }

})
 

const AuthSchema=joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().required()
})



/*
AuthSchema.pre("save",async function(next)
{
    try {
         const salt=await bcrypt.genSalt(10)
         const hashpassword= await bcrypt.hash(this.password,salt)
         hashpassword=this.password
         next()
    } catch (error) {
        
    }
})*/



//const auth=mongoose.model('auth',AuthSchema)
const yschema=mongoose.model('procfile',nschema)
module.exports = {
    yschema,
    AuthSchema
};