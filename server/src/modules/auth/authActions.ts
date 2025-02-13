import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { tokenGenerator } from "../../helpers/jwt.helper";

export const loginWithToken: RequestHandler = async (req, res, next) => {
  try {
    const { pseudo } = req.body;
    const payload = { pseudo };
    const token = await tokenGenerator(payload);

    res
      .status(200)
      .cookie("auth_token", token, {
        secure: false,
        httpOnly: true,
        maxAge: 3600000000000000,
      })
      .json({
        message: "utilisateur connecté",
      });
  } catch (err) {
    next(err);
  }
};

export const verifyToken: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      res.status(403).json({ authentified: false });
      return;
    }

    const verifiedToken = jwt.verify(
      req.cookies.auth_token,
      process.env.APP_SECRET as string,
    );
    if (verifiedToken) {
      next();
    } else {
      res.json({ authentified: false });
      return;
    }
  } catch (err) {
    next(err);
  }
};

export const checkToken: RequestHandler = (req, res) => {
  res.status(200).json({ authentified: true });
  return;
};
