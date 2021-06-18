import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 50,
    },
    balance: {
        type: Number,
        required: true,
        min: 0, 
    },
})

// userSchema.pre('save', async (next) => {
//     const salt = await bcrypt.genSalt();
//     // @ts-ignore
//     this.password = await bcrypt.hash(this.password, salt);  
//     next();
// })

export default mongoose.model('users', userSchema);