import express from "express";

const transactionsRoutes = express.Router();

transactionsRoutes.get('/', (req,res) => {
    res.status(200).send('Get all transactions');
})

transactionsRoutes.post('/', (req,res) => {
    res.status(200).send('Create a new transaction');
})

export default transactionsRoutes;