import express from "express";
import { authController, signupSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema } from "../controllers/authController";
import { validate } from "../middlewares/validate";

export const authRouter = express.Router();

const { signup, login, refresh, logout, forgotPassword, resetPassword } = authController;

authRouter.post("/signup", validate(signupSchema), signup);
authRouter.post("/login", validate(loginSchema), login);
authRouter.post("/refresh", refresh);
authRouter.post("/logout", logout);
authRouter.post("/forgot-password", validate(forgotPasswordSchema), forgotPassword);
authRouter.post("/reset-password/:resetToken", validate(resetPasswordSchema), resetPassword);
