import { UserType } from '@/ts/';
import { JWTTokenResponse } from '@/ts/index';

export const Auth_LOADING = 'Auth_LOADING';
export const Auth_FAIL = 'Auth_FAIL';
export const Auth_SUCCESS = 'Auth_SUCCESS';
export const AuthCheckJwtFail = 'AuthCheckJwtFail';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_REMOVE_ERRORS = 'AUTH_REMOVE_ERRORS';

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

export interface Auth_Check_JwtFail {
  type: typeof AuthCheckJwtFail;
  message?: JWTTokenResponse;
}

export interface AuthSuccess {
  type: typeof Auth_SUCCESS;
  token?: string;
  user?: UserType;
}

export interface authMethod {
  AuthSuccess: AuthSuccess;
  AuthCheckJwtFail: AuthCheckJwtFail;
  AuthFail: AuthFail;
  AuthLoading: AuthLoading;
}

export type AuthDispatchTypes =
  | AuthLoading
  | AuthFail
  | AuthSuccess
  | Auth_Check_JwtFail
  | AUTH_LOGOUT
  | AUTH_REMOVE_ERRORS;
