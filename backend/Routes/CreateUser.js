//here we require to define something so that when i click on createuser it allows to 
//create a new user and append the detailsto the database 

const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const jwtSecret = "MyNameIsEndToEndYoutubeChannel$#"


router.post("/createuser",[
  // username must be an email
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('name').isLength({ min: 5 }),
  body('password',"Incorrect Password").isLength({ min: 5 })
] ,async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //now thisis going to be used for bycrypt for encoding the password
    const salt = await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password,salt)

    try{
        await   User.create({
                    name: req.body.name,
                    password:secPassword,
                    location :req.body.location,
                    email :req.body.email
        })
    
    res.json({success :true});
    }

    catch(error){
        console.log(error);
    }
})

router.post("/loginuser",[
  // username must be an email
  body('email').isEmail(),
  // password must be at least 5 chars long
  
  body('password',"Incorrect Password").isLength({ min: 5 })
],async(req,res) =>{
    //the validation is not req as we just need to chekc if the provided email and password exist in the database, but still what the person is enetering needs to be checked right so validation can still be used 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email
    try{
        let userData = await   User.findOne({email})
        //this returns the matched email's entire body
        if (!userData){
            return res.status(400).json({ errors: "Try logging in with correct credentials - email" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
        // if(req.body.password !== userData.password){
        //     return res.status(400).json({ errors: "Try logging in with correct credentials - passwrd" });
        // }

        //now we use bcrypt to compare

        if(!pwdCompare){
            return res.status(400).json({ errors: "Try logging in with correct credentials - passwrd" });
        }
        //while creating a token an object is necessary
        const data = {
            user:{
                id:userData.id
                //this id is the unique key associated with the db document 
            }
        }
        const authToken = jwt.sign(data,jwtSecret)

        return res.json({success : true, authTokenValue : authToken})
    }

    catch(error){
        console.log(error);
        res.json({success : false})
    }
})
module.exports = router;