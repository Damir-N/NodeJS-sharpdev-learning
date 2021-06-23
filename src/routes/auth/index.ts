import express from "express";
import { addNewUserHandler } from "../../controllers/users.controller";

const authRoutes = express.Router();

authRoutes.post('/login', (req,res) => {
    res.status(200).send('Start a new session');
})

authRoutes.post('/signup', addNewUserHandler)

export default authRoutes;