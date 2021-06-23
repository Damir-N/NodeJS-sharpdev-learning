import express from "express";
import { getAllUsersHandler } from "../../controllers/users.controller";

const usersRoutes = express.Router();

usersRoutes.get('/', getAllUsersHandler)

usersRoutes.get('/me', (req,res) => {
    res.status(200).send('Get current user info');
})

export default usersRoutes;