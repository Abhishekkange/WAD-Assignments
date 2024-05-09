const express = require('express');
const dbconnect = require('./db');
const router = express.Router();


router.post('/insert',(req,res)=>{

    const name = req.body.name;
    const email =req.body.email;

    const db = dbconnect("mongodb+srv://NearbyKart_production:vgDxWwhHwhdWkSO0@cluster0.nkwn8jm.mongodb.net/pratik");


    console.log("connected to db")
    const body = {
        "name":name,
        "email":email
    }
    console.log(db);
    db.collection("pratik").insertOne(body,()=>{

        console.log("data inserted")
    })



});

module.exports = router;