import { Router } from "express";
import { loginUser, registerUser, userDetails } from "./user.controller.js";


const userRouter = Router();

userRouter.post('/register_user', registerUser);

userRouter.post('/login', loginUser);

userRouter.get('/user-details', userDetails);


export { userRouter };