const express  = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const url = "mongodb+srv://NearbyKart_production:vgDxWwhHwhdWkSO0@cluster0.nkwn8jm.mongodb.net";

app.use(bodyParser.json());


app.use('/api',require('./insert'))

const dbconnect = require('./db');


 client = dbconnect(url);

app.listen(port,()=>{

    console.log('listening on port: '+port);

});
