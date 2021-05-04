export type UserType = {
  follows: Array<string>;
  name: string;
  username: string;
  email: string;
  accountCreated: string;
  isAccountVerified: boolean;
  roles: String<string>;
  socialMedias: Array<SocialMedia>;
};

export type JWTTokenResponse =
  | 'invalid password, password might has changed'
  | 'success'
  | 'invalid token'
  | 'no token'
  | 'server error';

export interface ssr {
  user: UserType;
  message: JWTTokenResponse;
}
