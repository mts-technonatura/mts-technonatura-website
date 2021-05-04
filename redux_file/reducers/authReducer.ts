import {
  Auth_FAIL,
  Auth_LOADING,
  Auth_SUCCESS,
  AUTH_REMOVE_ERRORS,
  AuthDispatchTypes,
  AUTH_LOGOUT,
  AuthCheckJwtFail,
} from '../actions/types/AuthActionTypes.d';
import { UserType } from '@/ts/index';
import { JWTTokenResponse } from '@/ts/index';

export interface AuthState {
  loading: boolean;
  user?: UserType;
  errors?: any;
  token?: string;
  fetched?: boolean;
  message?: JWTTokenResponse;
}

const defaultState: AuthState = {
  loading: true,
};

const authReducer = (
  state: AuthState = defaultState,
  action: AuthDispatchTypes,
): AuthState => {
  switch (action.type) {
    case Auth_FAIL:
      return Object.assign({}, state, {
        loading: false,
        errors: action.errors,
        fetched: true,
      });
    case Auth_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case Auth_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        token: action.token,
        user: action.user,
        fetched: true,
        message: 'success',
      });
    case AuthCheckJwtFail:
      return Object.assign({}, state, {
        fetched: true,
        loading: false,
        message: action.message,
      });
    case AUTH_LOGOUT:
      return Object.assign({}, state, {
        fetched: true,
        loading: false,
        user: undefined,
      });
    case AUTH_REMOVE_ERRORS:
      return Object.assign({}, state, {
        errors: undefined,
        loading: false,
        fetched: true,
      });
    default:
      return state;
  }
};

export default authReducer;
