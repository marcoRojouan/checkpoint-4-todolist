import express from "express";

const router = express.Router();

import userRoutes from "./routes/user.routes";

router.use("/user", userRoutes);
export default router;
