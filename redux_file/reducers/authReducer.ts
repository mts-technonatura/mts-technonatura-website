import {
  Auth_FAIL,
  Auth_LOADING,
  Auth_SUCCESS,
  AuthDispatchTypes,
} from '../actions/types/AuthActionTypes.d';
import { UserType } from '@/ts/index';

interface DefaultStateI {
  loading: boolean;
  user?: UserType;
  errors?: any;
  token?: string;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const authReducer = (
  state: DefaultStateI = defaultState,
  action: AuthDispatchTypes,
): DefaultStateI => {
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
