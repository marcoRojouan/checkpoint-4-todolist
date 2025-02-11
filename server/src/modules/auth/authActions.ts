import type { RequestHandler } from "express";
import { tokenGenerator } from "../../helpers/jwt.helper";

export const loginWithToken: RequestHandler = async (req, res, next) => {
  try {
    const { username } = req.body;
    const payload = { username };
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
