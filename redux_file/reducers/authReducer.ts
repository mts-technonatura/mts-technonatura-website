import {
  Auth_FAIL,
  Auth_LOADING,
  Auth_SUCCESS,
  AuthDispatchTypes,
} from '../actions/types/AuthActionTypes.d';
import { UserType } from '@/ts/index';

export interface AuthState {
  loading: boolean;
  user?: UserType;
  errors?: any;
  token?: string;
}

const defaultState: AuthState = {
  loading: false,
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
      };
    default:
      return state;
  }
};

export default authReducer;
