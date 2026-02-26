import express from "express"
import User from "../Model/User.js";


const router  = express.Router();

router.post("/", async(req, res) => {
   
    try {
        const {id, password} = req.body;
        if(!id || !password){
           return res.status(400).send("Give required field")
    }
        
            const newUser = await User.create({
                id,
                password
            })
            res.status(200).send("User Created")
        }
    catch (error) {
        res.status(400).send(error.message)
    }
})

export default router;