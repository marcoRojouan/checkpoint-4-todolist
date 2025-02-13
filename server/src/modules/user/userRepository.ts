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
    const [user] = await databaseClient.query<Rows>(
      `
      SELECT password
      FROM user
      WHERE pseudo = ?
      `,
      [pseudo],
    );

    if (user.length === 0) {
      return null; // Si aucun utilisateur n'est trouvé, retourne null
    }

    return user[0].password;
  }

  async readRoleByPseudo(pseudo: string) {
    const [roleId] = await databaseClient.query<Rows>(
      `
      SELECT role_id
      FROM user 
      WHERE pseudo = ?
      `,
      [pseudo],
    );

    return roleId[0].role_id;
  }

  async readIdByPseudo(pseudo: string) {
    const [user] = await databaseClient.query<Rows>(
      `
      SELECT id
      FROM user 
      WHERE pseudo = ?
      `,
      [pseudo],
    );

    return user[0].id;
  }

  async readAll() {
    const [users] = await databaseClient.query<Rows>(
      `
      SELECT user.id, user.pseudo, role.label
      FROM user
      JOIN role ON user.role_id = role.id
      ORDER BY pseudo
      `,
    );

    return users;
  }

  async delete(pseudo: string) {
    const [result] = await databaseClient.query<Result>(
      `
      DELETE FROM user
      WHERE pseudo = ?
      `,
      [pseudo],
    );

    return result.affectedRows;
  }
}

export default new UserRepository();
