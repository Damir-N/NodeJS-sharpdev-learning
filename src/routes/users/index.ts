import express from "express";
import userController from "../../controllers/users";

const usersRoutes = express.Router();

usersRoutes.get('/', userController.getAll)

usersRoutes.get('/me', (req,res) => {
    res.status(200).send('Get current user info');
})

export default usersRoutes;