export interface User {
  username: string;
  email: string;
  password: number;
  join_date: Date;
  is_active: boolean;
}

export interface SignupUserIn {
  email: string;
  username: string;
  password: string;
}

export interface LoginUserIn {
  email: string;
  password: string;
}

export interface EmailIn {
  email: string;
}

export interface UsernameIn {
  username: string;
}

export interface DuplicateOut {
  duplicate: boolean;
}
