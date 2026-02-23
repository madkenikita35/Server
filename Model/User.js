import mongoose from "mongoose";

const userSchema = new mongooose.Schema({
    id:{
        type: String,
        required :true
    },
    password : {
        type: Number,
        required: true
    }
})

export default User = mongoose.model("User", userSchema)