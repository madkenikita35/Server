import express from "express"
import { Memory } from "../Model/Memory.js";

const router = express.Router();

router.get("/", (req,res) =>{
    res.send("Memory Home page");
})

router.post("/", async(req, res)=>{
    try {
        const {title, value} = req.body;
        if(!title || !value){
            res.status(400).send("Send All field");
        }

        const newmemory = await Memory.create({
            title,
            value
        })
        res.status(200).send("memory Created SuccessFully")
    } catch (error) {
        res.send(error.message)
    }})

    export default router;