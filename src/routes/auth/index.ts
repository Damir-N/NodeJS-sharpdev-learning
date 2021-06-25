import express from "express";
import { login } from "../../controllers/auth.controller";
import { addNewUserHandler } from "../../controllers/users.controller";

const authRoutes = express.Router();

authRoutes.post('/login', login)

authRoutes.post('/signup', addNewUserHandler)

export default authRoutes;