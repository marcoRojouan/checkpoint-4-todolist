import express from "express";
import { verifyingPassword } from "../middlewares/argon2.middleware";
import { loginWithToken } from "../modules/auth/authActions";
import { readUserPassword } from "../modules/user/userActions";

const router = express.Router();

router.post("/login", readUserPassword, verifyingPassword, loginWithToken);

export default router;
