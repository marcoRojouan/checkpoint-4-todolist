import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";
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
}

export default new PriorityRepository();
