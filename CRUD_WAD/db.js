const express = require('express');

const {MongoClient} = require('mongodb');


async function connectToMongo(){

    try{


        const url = "mongodb+srv://NearbyKart_production:vgDxWwhHwhdWkSO0@cluster0.nkwn8jm.mongodb.net";
        const client = new MongoClient(url);
        await client.connect();
        const database = client.db('pratik');
        if(database){
            console.log("connected to Mongo");
            console.log(database)
            return database.collection('users');
        }
        


    }catch(e){

        console.error(e);
    }

   
    
}

module.exports = connectToMongo