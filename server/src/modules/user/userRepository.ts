import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { UserType } from "../../lib/definitions";

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

  async readPassword(pseudo: string) {
    const [password] = await databaseClient.query<Rows>(
      `
      SELECT password
      FROM user
      WHERE pseudo = ?
      `,
      [pseudo],
    );

    return password[0].password;
  }
}

export default new UserRepository();
