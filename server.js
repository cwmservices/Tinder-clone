import express from 'express';
import {cards} from './cards_data.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/cards',async(req,res)=>{
    try{
        res.json(cards);
    }catch(error){
        console.log("Internel server error...");
    }
})

app.listen(PORT,(req,res)=>{
    console.log(`Listening on port ${PORT}...`);
})