import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class ThingRepository {
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
