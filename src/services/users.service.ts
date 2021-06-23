import { DocumentDefinition } from "mongoose";
import { AppConstants } from "../constants";
import User, { UserDocument } from "../models/users/user.model";

export const createNewUser = async (data: DocumentDefinition<UserDocument>) =>{
    try{
        return await User.create({...data, balance: AppConstants.INITIAL_BALANCE});
    } catch(err){
        throw new Error(err);
    }
}