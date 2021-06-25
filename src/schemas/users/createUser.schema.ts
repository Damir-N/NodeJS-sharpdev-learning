import { object, string } from 'yup';

export const createUserSchema = object({
    firstName: string().required().min(3).max(50),
    lastName: string().required().min(3).max(50),
    email: string().required().email(),
    password: string().required().min(8).max(50),
})