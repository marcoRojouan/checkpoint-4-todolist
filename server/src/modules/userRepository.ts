import databaseClient from "../../database/client";

import type { Result } from "../../database/client";
import type { UserType } from "../lib/definitions";

class UserRepository {
  async create(user: UserType) {
    const roleId = 2;
    const [result] = await databaseClient.query<Result>(
      `
            INSERT INTO user
            (pseudo, password, role_id)
            VALUES (?,?,?)
            `,
      [user.pseudo, user.password, roleId],
    );

    return result.insertId;
  }
}

export default new UserRepository();
