import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { PriorityType } from "../../lib/definitions";

class PriorityRepository {
  async add(label: PriorityType) {
    const [result] = await databaseClient.query<Result>(
      `
        INSERT INTO priority (label)
        VALUES (?)
        `,
      [label],
    );

    return result.insertId;
  }

  async readAll() {
    const [priorities] = await databaseClient.query<Rows>(
      `
      SELECT * 
      FROM priority 
      `,
    );

    return priorities;
  }
}

export default new PriorityRepository();
