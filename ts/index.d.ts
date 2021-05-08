export type UserType = {
  follows: Array<string>;
  name: string;
  username: string;
  email: string;
  accountCreated: string;
  isAccountVerified: boolean;
  roles: Array<string>;
  socialMedias: Array<SocialMedia>;
};

export type JWTTokenResponse =
  | 'invalid password, password might has changed'
  | 'success'
  | 'invalid token'
  | 'no token'
  | 'server error'
  | 'jwtSuccess'
  | 'login successfully'
  | 'account created'
  | 'notSignedIn';

export interface ssr {
  user: UserType;
  message: JWTTokenResponse;
  token: string;
}

interface SocialMedia {
  name: string;
  url: string;
}

export interface UserInterface {
  points: number;
  email: string;
  name: string;
  username: string;
  isAccountVerified: boolean;
  password: string;
  accountCreated: Date;
  follows?: Array<string>;
  birthDate: Date;
  roles: Array<string>;
  socialMedias?: Array<SocialMedia>;
  avatar: string;
  banner: string;
  _id: string;
}

export type statusMessage = 'success' | 'warning' | 'error' | 'info';
export type DeletedUserResponseType = {
  message: string;
  status: statusMessage;
};
