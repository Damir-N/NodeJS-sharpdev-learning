import { Request, Response } from "express";
import User from '../models/users/user.model';
import { createNewUser } from "../services/users.service";

export const getAllUsersHandler = async (req: Request, res: Response) => {
    const users = await User.find();
    res.send(users);
};
export const addNewUserHandler =  async (req: Request, res: Response) => {
    try{
        const user = await createNewUser(req.body);
        return res.status(200).send(user.toJSON());
    } catch(err){
        return res.status(409).send(err.message);
    }
}
