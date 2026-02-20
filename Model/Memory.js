import mongoose from "mongoose"

const MemorySchema = new mongoose.Schema({
    title:{
        type: String,
        required :true
    },
    value:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

export const Memory = mongoose.model('Memory', MemorySchema);