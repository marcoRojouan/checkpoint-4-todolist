import express from "express";
import { hashingPassword } from "../middlewares/argon2.middleware";
import { destroyUserThings } from "../modules/thing/thingActions";
import { createUser, destroy, readAll } from "../modules/user/userActions";

const router = express.Router();

router.post("/", hashingPassword, createUser);

router.get("/", readAll);

router.delete("/:pseudo", destroyUserThings, destroy);

export default router;
