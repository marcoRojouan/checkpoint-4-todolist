import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { TokenType, UserType } from "../../lib/definitions";
import userRepository from "./userRepository";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const userData: UserType = req.body;

    await userRepository.create(userData);

    res.json({ message: "Utilisateur créé avec succés" });
  } catch (err) {
    next(err);
  }
};

export const readUserPassword: RequestHandler = async (req, res, next) => {
  try {
    const { pseudo } = req.body;

    const passwordFromDB = await userRepository.readPassword(pseudo);

    if (!passwordFromDB) {
      res.status(404).json({ message: "c'est mort" });
      return;
    }

    req.body.passwordFromDB = passwordFromDB;

    next();
  } catch (err) {
    next(err);
  }
};

export const readRoleFromToken: RequestHandler = async (req, res, next) => {
  try {
    const tokenFromCookies = (await jwt.decode(
      req.cookies.auth_token,
    )) as TokenType;

    const pseudo: string = tokenFromCookies?.pseudo;

    const roleId = await userRepository.readRoleByPseudo(pseudo);

    if (roleId !== 1) {
      res.json({ isAdmin: false, message: "tu n'es pas un admin" });
    }

    res.json({ isAdmin: true, message: "bienvenu admin" });
  } catch (err) {
    next(err);
  }
};
