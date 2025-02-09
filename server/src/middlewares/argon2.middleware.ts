import type { RequestHandler } from "express";
import { argonHashing } from "../helpers/argon2.helper";

export const hashingPassword: RequestHandler = async (req, res, next) => {
  const { password } = req.body;

  const hashedPassword: string = await argonHashing(password);

  if (hashedPassword) {
    req.body.password = hashedPassword;
    next();
  }
};
