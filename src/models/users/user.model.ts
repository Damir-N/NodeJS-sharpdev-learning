import mongoose from "mongoose";
import bcrypt from 'bcrypt';

export interface UserDocument extends mongoose.Document{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    balance: string; 
    comparePasswords: (password: string) => Promise<boolean>
} 

const UserSchema = new mongoose.Schema({
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
}, 
{timestamps: true}
);

UserSchema.methods.comparePasswords = async function(pass: string): Promise<boolean>{
    const user = this as UserDocument;
    return bcrypt.compare(pass, user.password).catch((err: Error) => false);
} 

UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {

    let user = this as UserDocument;

    if(!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;

    return next();
});

const User = mongoose.model<UserDocument>('users', UserSchema);

export default User;