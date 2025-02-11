import type { RequestHandler } from "express";
import type { UserType } from "../../lib/definitions";
import userRepository from "./userRepository";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const userData: UserType = req.body;

    const resultId = await userRepository.create(userData);

    console.info(userData);
    res.json(resultId);
  } catch (err) {
    next(err);
  }
};

export const readUserPassword: RequestHandler = async (req, res, next) => {
  try {
    const { pseudo } = req.body;

    const password = await userRepository.readPassword(pseudo);

    if (password) {
      req.body.passwordFromDB = password;
      next();
    }
  } catch (err) {
    next(err);
  }
};
