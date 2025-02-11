import express from "express";
import { hashingPassword } from "../middlewares/argon2.middleware";
import { createUser } from "../modules/user/userActions";

const router = express.Router();

router.post("/", hashingPassword, createUser);

export default router;
