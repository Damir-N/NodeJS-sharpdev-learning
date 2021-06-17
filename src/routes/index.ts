import express from "express";
import authRoutes from "./auth";
import transactionsRoutes from "./transactions";
import usersRoutes from "./users";

const routes = express.Router();

routes.get('/', (req,res) => {
    res.status(200).send('Hello from PW api');
})

routes.use('/auth', authRoutes);
routes.use('/users', usersRoutes);
routes.use('/transactions', transactionsRoutes);

export default routes;