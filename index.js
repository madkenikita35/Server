import express from "express"
import { Router } from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb+srv://Nikita:Nikita@memory.nzssf9q.mongodb.net/?appName=Memory"

try {
    mongoose.connect(MONGO_URI)
    .then(() =>{
            console.log(`MongoDb Connected Successfully`)
            app.listen(PORT,() =>{
            console.log(`Server is running on port ${PORT}`)
    });

    })
} catch (error) {
    res.send(error);
}



app.get("/", (req, res) =>{
   res.send("Hello");
})


