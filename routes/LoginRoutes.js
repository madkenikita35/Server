import express from "express"
import User from "../Model/User.js";
import bcrypt from "bcrypt"

const router  = express.Router();

router.get("/", async(req, res) => {
    const user = await User.find();
    res.send(user);
})

router.post("/", async(req, res) => {
   
    try {
        const {id, password} = req.body;
        if(!id || !password){
           return res.status(400).send("Give required field")
    }

        const  hashesPass = await bcrypt.hash(password, 10)
            const newUser = await User.create({
                id,
                password: hashesPass
            })
            res.status(200).send("User Created")
        }
    catch (error) {
        res.status(400).send(error.message)
    }
})

export default router;