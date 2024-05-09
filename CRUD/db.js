const mongodb = require('mongodb');
const {MongoClient} = require('mongodb')


 async function mongodb_connect(url){


    try{

        client = await MongoClient.connect(url);
        console.log("connected to mongodb");

        
    }catch(e){

        console.log("error connecting to mongodb", e);
    }

}


module.exports = mongodb_connect;

