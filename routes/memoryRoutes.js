import express from "express"
import { Memory } from "../Model/Memory";

const router = express.Router;

router.get("/", (req,res) =>{
    res.send("Memory");
})

router.post("/",(req,res)=>{
    try {
        const {title, value} = req.body;
        if(!title || !value){
            res.Status(400).send("Send All field");
        }

        const newmemory = Memory.Create({
            title,
            value
        })
        res.Status(200).send("memory Created SuccessFully")
    } catch (error) {
        res.send(error.message())
    }})