import express from "express"
import mongoose from "mongoose";
import { Memory } from "./Model/Memory.js";
import LoginRoute from "./routes/LoginRoutes.js"
import memRoutes from "./routes/MemoryRoutes.js"
import cors from "cors"

const PORT = 5000;
const MONGO_URI = "mongodb+srv://Nikita:Nikita@memory.nzssf9q.mongodb.net/?appName=Memory"

const app = express();
app.use(express.json())
app.use(cors())

app.use("/", LoginRoute)

app.use("/memory", memRoutes)



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

app.get("/", async (req,res) =>{
    try {
      const memory = await Memory.find();
      res.status(200).send(memory)  
    } catch (error) {
        res.status(400).send(error.message)
    }
    
})

app.post("/", async(req, res)=>{
    try {
        const {title, value} = req.body;
        if(!title || !value){
           return res.status(400).send("Send All field");
        }

        const newmemory = await Memory.create({
            title,
            value
        })
        res.status(200).send(newmemory)
    } catch (error) {
        res.send(error.message)
    }})

    app.delete("/:id", async(req, res) => {
        const {id} = req.params;
        const deleteMem = await Memory.findByIdAndDelete(id);
        res.status(200).send("Deleted Successfuly");
    })


