import argon from "argon2";

export const argonHashing = async (password: string) => {
  return (await argon.hash(password)) as string;
};

export const argonVerifier = async (
  hashedPassword: string,
  password: string,
) => {
  return await argon.verify(hashedPassword, password);
};
