import {
  Auth_FAIL,
  Auth_LOADING,
  Auth_SUCCESS,
  AuthCheckJwtFail,
  AuthDispatchTypes,
  AUTH_LOGOUT,
} from '../actions/types/AuthActionTypes.d';
import { UserType } from '@/ts/index';

export interface AuthState {
  loading: boolean;
  user?: UserType;
  errors?: any;
  token?: string;
  fetched?: boolean;
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
      return {
        loading: false,
        errors: action.errors,
        fetched: true,
      };
    case Auth_LOADING:
      return {
        loading: true,
      };
    case Auth_SUCCESS:
      return {
        loading: false,
        token: action.token,
        user: action.user,
        fetched: true,
      };
    case AuthCheckJwtFail:
      return {
        fetched: true,
        loading: false,
      };
    case AUTH_LOGOUT:
      return {
        fetched: true,
        loading: false,
        user: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
