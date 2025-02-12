import express from "express";
import { addRole } from "../modules/role/roleActions";

const router = express.Router();

router.post("/", addRole);

export default router;
