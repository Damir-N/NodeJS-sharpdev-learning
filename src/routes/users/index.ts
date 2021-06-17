import express from "express";

const usersRoutes = express.Router();

usersRoutes.get('/', (req,res) => {
    res.status(200).send('Get all users');
})

usersRoutes.get('/me', (req,res) => {
    res.status(200).send('Get current user info');
})

export default usersRoutes;