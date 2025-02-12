import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

class RoleRepository {
  async add(label: string) {
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO role (label)
            VALUES
            (?)
            `,
      [label],
    );
    return result.insertId;
  }
}

export default new RoleRepository();
