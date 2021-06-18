import express from "express";
import userController from "../../controllers/users";

const authRoutes = express.Router();

authRoutes.post('/login', (req,res) => {
    res.status(200).send('Start a new session');
})

authRoutes.post('/signup', userController.add)

export default authRoutes;