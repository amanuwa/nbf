const express = require('express');
const router = express.Router();
const Joi = require('joi');
const {  AuthSchema } = require('../nbf/schema'); 
const {  yschema } = require('../nbf/schema');// Make sure this path is correct
const bcrypt = require('bcryptjs');

router.post('/getme', async (req, res) => {
  try {
    const { email, password } = req.body;
    //console.error(req.body);
    // Validate the request body using the `AuthSchema`
    
    const validationResult =  await AuthSchema.validateAsync(req.body);
    const hashedpassword =  await bcrypt.hash(validationResult.password,11)
    validationResult.password =hashedpassword;


    const newUser = new yschema(validationResult);
        await newUser.save().then(()=>{
         res.status(200).send({ message:'user saved'})
        })

    

    // Create a new document using the validated data
    //const newDoc = new validationResult(req.body); // Assuming 'email' and 'password' fields exist in yschema

    // Save the document to MongoDB
    //const savedDoc = await newDoc.save();

    // Send a success response or the saved document (if desired)
  //  res.send({ message: 'Data saved successfully', data: savedDoc }); // Adjust the response as needed
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: 'Internal Server Error' });
  }
});

router.get('/point', (req, res) => {
  res.send({ message: 'GET request received at /point' });
});

module.exports = router;