const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectToMongoose = require('./db');


const db = connectToMongoose();

app.use('/api',require('./insert'));

app.listen(3000,()=>{


    console.log("listening on port 3000")
})
