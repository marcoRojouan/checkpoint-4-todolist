export type UserType = {
  pseudo: string;
  password: string;
  confirmPassword: string;
  label: string;
};

export type AuthType = {
  isAdmin: boolean;
};

export type PriorityType = {
  label: string;
};

export type ThingType = {
  id: number;
  content: string;
  done: number;
  pseudo: string;
  label: string;
};
