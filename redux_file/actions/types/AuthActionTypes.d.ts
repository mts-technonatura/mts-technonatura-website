import { UserType } from '@/ts/';
export const Auth_LOADING = 'Auth_LOADING';
export const Auth_FAIL = 'Auth_FAIL';
export const Auth_SUCCESS = 'Auth_SUCCESS';
export const AuthCheckJwtFail = 'AuthCheckJwtFail';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export enum authMethod {
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_SIGNUP = 'AUTH_SIGNUP',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}

export type SocialMedia = {
  name: string;
  url: string;
};

export interface AuthLoading {
  type: typeof Auth_LOADING;
}

export interface AuthFail {
  type: typeof Auth_FAIL;
  errors?: any;
}

export interface AuthCheckJwtFail {
  type: typeof AuthCheckJwtFail;
}

export interface AuthSuccess {
  type: typeof Auth_SUCCESS;
  token?: string;
  user?: UserType;
}

export type AuthDispatchTypes =
  | AuthLoading
  | AuthFail
  | AuthSuccess
  | AuthCheckJwtFail
  | AUTH_LOGOUT;
