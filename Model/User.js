import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        required :true
    },
    password : {
        type: Number,
        required: true
    }
})

export default mongoose.model("User", userSchema)