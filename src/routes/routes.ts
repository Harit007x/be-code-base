import express from "express";
import { dummyController } from "../controllers/dummyController";
import { authRouter } from "./authRoutes";

export const router = express.Router();

const { fetchAllTodo } = dummyController;

router.get("/todos", fetchAllTodo);
router.use("/auth", authRouter);
