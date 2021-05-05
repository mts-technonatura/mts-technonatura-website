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
