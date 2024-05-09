const express  = require('express');


const router = express.Router();
const connectToMongo = require('./db');


router.post('/insert',async (req,res)=>{

    const userData = {

        "name":"Abhishek Kange",
        "email":"abhishekkange@gmail.com"

    }

    const collection = connectToMongo();
    console.log(collection);
    // const result =  await collection.insertOne(userData);
    
})

module.exports = router;