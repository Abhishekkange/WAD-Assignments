const express  = require('express');
const app = express();
const port = 5000;
const url = "mongodb+srv://NearbyKart_production:vgDxWwhHwhdWkSO0@cluster0.nkwn8jm.mongodb.net/pratik";


app.use('/api',require('./insert'))

const dbconnect = require('./db');

 dbconnect(url);

app.listen(port,()=>{

    console.log('listening on port: '+port);

});
