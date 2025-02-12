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

export const readAll: RequestHandler = async (req, res, next) => {
  try {
    const usersFromDb = await userRepository.readAll();

    if (usersFromDb.length === 0) {
      res.status(404).json({ message: "Données non récupérées" });
    }

    res.json(usersFromDb);
  } catch (err) {
    next(err);
  }
};

export const destroy: RequestHandler = async (req, res, next) => {
  try {
    const userPseudo = req.params.pseudo;

    const affectedRows = await userRepository.delete(userPseudo);

    if (affectedRows === 0) {
      res.status(404).json({ message: "aucun utilisateur trouvé" });
    }

    res.json({ message: "utilisateur supprimé" });
    return;
  } catch (err) {
    next(err);
  }
};
