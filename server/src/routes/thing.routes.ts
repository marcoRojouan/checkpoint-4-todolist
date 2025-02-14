import express from "express";
import {
  create,
  destroy,
  edit,
  readAll,
  readDoneThingsById,
  readNotDoneThingsById,
} from "../modules/thing/thingActions";
import { readIdFromToken } from "../modules/user/userActions";

const router = express.Router();

router.get("/", readAll);
router.get("/notdone", readIdFromToken, readNotDoneThingsById);
router.get("/done", readIdFromToken, readDoneThingsById);

router.post("/", readIdFromToken, create);

router.put("/:id", edit);

router.delete("/:id", destroy);

export default router;
