import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { ThingEditType, ThingType } from "../../lib/definitions";

class ThingRepository {
  async add(thing: Omit<ThingType, "id">) {
    const isDone = 0;
    const [result] = await databaseClient.query<Result>(
      `
      INSERT INTO thing
      (content, done, priority_id, user_id)
      VALUES
      (?,?,?,?)
      `,
      [thing.content, isDone, thing.priority_id, thing.user_id],
    );

    return result.insertId;
  }

  async readAll() {
    const [things] = await databaseClient.query<Rows>(
      `
          SELECT thing.id, thing.content, thing.done, user.pseudo, priority.label
          FROM thing
          JOIN user ON thing.user_id=user.id 
          JOIN priority ON thing.priority_id=priority.id
          ORDER BY pseudo
          `,
    );

    return things;
  }

  async readNotDone(userId: number) {
    const [things] = await databaseClient.query(
      `
      SELECT thing.id, thing.content, thing.done, priority.label
      FROM thing
      JOIN priority ON thing.priority_id=priority.id
      WHERE thing.user_id = ? 
      AND thing.done = 0
      ORDER BY priority.id ASC
      `,
      [userId],
    );

    return things;
  }

  async readDone(userId: number) {
    const [things] = await databaseClient.query(
      `
      SELECT thing.id, thing.content, thing.done, priority.label
      FROM thing
      JOIN priority ON thing.priority_id=priority.id
      WHERE thing.user_id = ? 
      AND thing.done = 1
      `,
      [userId],
    );

    return things;
  }

  async update(thing: ThingEditType) {
    const [result] = await databaseClient.query<Result>(
      `
      UPDATE thing 
      SET done = ? 
      WHERE id = ?
      `,
      [thing.done, thing.id],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `
      DELETE FROM thing
      WHERE id = ?
      `,
      [id],
    );

    return result.affectedRows;
  }

  async deleteByPseudo(pseudo: string) {
    const [result] = await databaseClient.query<Result>(
      `
      DELETE thing FROM thing
      JOIN user ON thing.user_id = user.id
      WHERE user.pseudo = ?
      `,
      [pseudo],
    );

    return result.affectedRows;
  }
}

export default new ThingRepository();
