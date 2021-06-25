import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

export const requestValidation = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try{
        await schema.validate(req.body);
        return next();
    } catch(err){
        return res.status(400).send(err.message);
    }
}