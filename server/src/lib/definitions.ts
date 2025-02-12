export type PriorityType = {
  label: string;
};

export type UserType = {
  pseudo: string;
  password: string;
};

export type TokenType = {
  pseudo: string;
  iat: number;
  exp: number;
};
