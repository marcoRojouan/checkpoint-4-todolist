import express from "express";
import { create, readAll } from "../modules/priority/priorityActions";

const router = express.Router();

router.get("/", readAll);

router.post("/", create);

export default router;
