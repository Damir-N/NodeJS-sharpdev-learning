import express from "express";

const authRoutes = express.Router();

authRoutes.post('/login', (req,res) => {
    res.status(200).send('Start a new session');
})

authRoutes.post('/signup', (req,res) => {
    res.status(200).send('Create a new user');
})

export default authRoutes;