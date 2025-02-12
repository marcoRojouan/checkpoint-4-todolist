import express from "express";
import { verifyingPassword } from "../middlewares/argon2.middleware";
import {
  checkToken,
  loginWithToken,
  verifyToken,
} from "../modules/auth/authActions";
import {
  readRoleFromToken,
  readUserPassword,
} from "../modules/user/userActions";

const router = express.Router();

router.post("/login", readUserPassword, verifyingPassword, loginWithToken);

router.use(verifyToken);

router.get("/admin", readRoleFromToken);
router.get("/authentified", checkToken);

export default router;
