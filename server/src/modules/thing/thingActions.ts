import type { RequestHandler } from "express";
import thingRepository from "./thingRepository";

export const readAll: RequestHandler = async (req, res, next) => {
  try {
    const thingsFromDb = await thingRepository.readAll();

    if (thingsFromDb.length === 0) {
      res.status(404).json({ message: "Données non récupérées" });
    }

    res.json(thingsFromDb);
  } catch (err) {
    next(err);
  }
};

export const destroy: RequestHandler = async (req, res, next) => {
  try {
    const thingId = Number(req.params.id);

    const affectedRows = await thingRepository.delete(thingId);

    if (affectedRows === 0) {
      res.status(404).json({ message: "aucune tâche trouvée" });
    }

    res.json({ message: "utilisateur supprimé" });
    return;
  } catch (err) {
    next(err);
  }
};

export const destroyUserThings: RequestHandler = async (req, res, next) => {
  try {
    const thingPseudo = req.params.pseudo;

    const affectedRows = await thingRepository.deleteByPseudo(thingPseudo);

    if (affectedRows === 0) {
      res.status(404).json({ message: "aucune tâche trouvée" });
    }

    res.json({ message: "utilisateur supprimé" });
    return;
  } catch (err) {
    next(err);
  }
};
