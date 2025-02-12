import express from "express";

const router = express.Router();

import authRoutes from "./routes/auth.routes";

router.use("/auth", authRoutes);

import userRoutes from "./routes/user.routes";

router.use("/user", userRoutes);

import thingRoutes from "./routes/thing.routes";

router.use("/thing", thingRoutes);

import priorityRoutes from "./routes/priority.routes";

router.use("/priority", priorityRoutes);

import roleRoutes from "./routes/role.routes";

router.use("/role", roleRoutes);

export default router;
