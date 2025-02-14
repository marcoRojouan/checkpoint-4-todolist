export type UserType = {
  pseudo: string;
  password: string;
  confirmPassword: string;
  label: string;
};

export type AuthAdminType = {
  isAdmin: boolean;
};

export type AuthUserType = {
  authentified: boolean;
};

export type PriorityType = {
  id: number;
  label: string;
};

export type ThingType = {
  id: number;
  content: string;
  done: number;
  pseudo: string;
  label: string;
};

export type NewThingType = {
  content: string;
  priority_id: number;
};
