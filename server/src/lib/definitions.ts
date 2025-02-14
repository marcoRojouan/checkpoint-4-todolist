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

export type ThingType = {
  content: string;
  priority_id: number;
  user_id: number;
};

export type ThingEditType = {
  id: number;
  done: number;
};
