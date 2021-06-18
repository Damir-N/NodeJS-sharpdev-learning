import { Request, Response } from "express";
import Users from '../../models/users/user.model';

const userController = {
    getAll: async (req: Request, res: Response) => {
        const users = await Users.find();
        res.send(users);
    },
    add: async (req: Request, res: Response) => {
        const user = new Users(req.body);
        user.save().then((result: string) => res.send(result)).catch((err: string) => res.send(err));
    }
}

export default userController;