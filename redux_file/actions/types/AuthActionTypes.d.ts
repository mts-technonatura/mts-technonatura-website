export const Auth_LOADING = 'Auth_LOADING';
export const Auth_FAIL = 'Auth_FAIL';
export const Auth_SUCCESS = 'Auth_SUCCESS';

export enum authMethod {
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_SIGNUP = 'AUTH_SIGNUP',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}

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

export type SocialMedia = {
  name: string;
  url: string;
};

export interface AuthLoading {
  type: typeof Auth_LOADING;
  method: authMethod;
}

export interface AuthFail {
  type: typeof Auth_FAIL;
  errors?: any;
}

export interface AuthSuccess {
  type: typeof Auth_SUCCESS;
  token?: string;
  user?: UserType;
}

export type AuthDispatchTypes = AuthLoading | AuthFail | AuthSuccess;
