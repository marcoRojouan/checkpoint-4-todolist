import type { RequestHandler } from "express";
import thingRepository from "./thingRepository";

export const create: RequestHandler = async (req, res, next) => {
  try {
    const newThing = {
      content: req.body.content,
      priority_id: Number.parseInt(req.body.priority_id),
      user_id: Number.parseInt(req.body.user_id),
    };

    const newThingId = await thingRepository.add(newThing);

    res.status(201).json({
      message: "La tâche a été créée avec succès.",
      id: newThingId,
    });
  } catch (err) {
    next(err);
  }
};

export const edit: RequestHandler = async (req, res, next) => {
  try {
    const thing = {
      id: Number.parseInt(req.params.id),
      done: 1,
    };

    const affectedRows = await thingRepository.update(thing);

    res.json(affectedRows);
  } catch (err) {
    next(err);
  }
};

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

export const readNotDoneThingsById: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.body.user_id;

    const notDoneThings = await thingRepository.readNotDone(userId);

    res.json(notDoneThings);
  } catch (err) {
    next(err);
  }
};

export const readDoneThingsById: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.body.user_id;

    const doneThings = await thingRepository.readNotDone(userId);

    res.json(doneThings);
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

    await thingRepository.deleteByPseudo(thingPseudo);

    next();
  } catch (err) {
    next(err);
  }
};
