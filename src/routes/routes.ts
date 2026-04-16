import express from "express";
import { dummyController } from "../controllers/dummyController";

export const router = express.Router();

const { fetchAllTodo } = dummyController;

router.get("/todos", fetchAllTodo);
