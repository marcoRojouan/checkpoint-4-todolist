import type { RequestHandler } from "express";
import roleRepository from "./roleRepository";

export const addRole: RequestHandler = async (req, res, next) => {
  try {
    const label = req.body.label;

    const resultId = await roleRepository.add(label);

    if (!resultId) {
      res.status(404).json({ message: "impossible de créer l'élément" });
    }

    res.json({ message: `Le rôle ${label} a bien été créée` });
  } catch (err) {
    next(err);
  }
};
