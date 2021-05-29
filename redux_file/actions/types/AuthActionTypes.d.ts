import { UserType } from '@/ts/';
import { JWTTokenResponse } from '@/ts/index';

export const Auth_LOADING = 'Auth_LOADING';
export const Auth_FAIL = 'Auth_FAIL';
export const Auth_SUCCESS = 'Auth_SUCCESS';
export const AuthCheckJwtFail = 'AuthCheckJwtFail';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_REMOVE_ERRORS = 'AUTH_REMOVE_ERRORS';
export const Auth_JWT_SUCCESS = 'Auth_JWT_SUCCESS';
export const Auth_LOGIN_SUCCESS = 'Auth_LOGIN_SUCCESS';
export const Auth_SIGNUP_SUCCESS = 'Auth_SIGNUP_SUCCESS';
export const Auth_SET_TOKEN = 'Auth_SET_TOKEN';
export const Auth_INIT = 'Auth_INIT';

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
  message?: string;
}

// when API server returns an error as we check the JWT token
export interface Auth_Check_JwtFail {
  type: typeof AuthCheckJwtFail;
  message?: JWTTokenResponse;
}

export interface AuthSuccess {
  type: typeof Auth_SUCCESS | typeof Auth_LOGIN_SUCCESS;
  token?: string;
  user?: UserType;
}
export interface AuthSetToken {
  type: typeof Auth_SET_TOKEN;
  token: string;
}

export interface AuthInit {
  type: typeof Auth_SET_TOKEN;
}

export type AuthDispatchTypes =
  | AuthLoading
  | AuthFail
  | AuthSuccess
  | Auth_Check_JwtFail
  | AUTH_LOGOUT
  | AUTH_REMOVE_ERRORS
  | Auth_SIGNUP_SUCCESS
  | Auth_LOGIN_SUCCESS
  | Auth_JWT_SUCCESS
  | AuthSetToken
  | AuthInit;
