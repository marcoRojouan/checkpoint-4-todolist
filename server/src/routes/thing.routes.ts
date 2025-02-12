import express from "express";
import { destroy, readAll } from "../modules/thing/thingActions";

const router = express.Router();

router.get("/", readAll);

router.delete("/:id", destroy);

export default router;
