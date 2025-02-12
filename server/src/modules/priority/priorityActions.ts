import type { RequestHandler } from "express";
import priorityRepository from "./priorityRepository";

export const create: RequestHandler = async (req, res, next) => {
  try {
    const label = req.body.label;

    const resultId = await priorityRepository.add(label);

    if (!resultId) {
      res.status(404).json({ message: "impossible de créer l'élément" });
    }

    res.json({ message: `La priorité ${label} a bien été créée` });
  } catch (err) {
    next(err);
  }
};
