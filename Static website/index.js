const express = require('express');
const app = express();



app.listen(4000,()=>{

    console.log('listening on port 4000');
})

app.get('/site',(req,res)=>{

    res.sendFile(__dirname+ '/'+'index.html');

})