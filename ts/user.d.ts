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

export interface ssr {
  user: UserInterface;
  message: JWTTokenResponse;
  token: string;
}

export interface SocialMedia {
  name: string;
  url: string;
}

export type DeletedUserResponseType = {
  message: string;
  status: statusMessage;
};
