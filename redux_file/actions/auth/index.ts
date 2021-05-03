import { Dispatch } from 'redux';
import {
  Auth_FAIL,
  Auth_LOADING,
  Auth_SUCCESS,
  AuthDispatchTypes,
  authMethod,
} from '../types/AuthActionTypes.d';
import { UserType } from '@/ts/index';
import axios from 'axios';

interface signIn {
  username: string;
  password: string;
}

interface signupI extends signIn {
  email: string;
  name: string;
}

export const AuthLogin = (Auth: signIn) => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  try {
    dispatch({
      type: Auth_LOADING,
    });

    const res = await axios.post<{
      errors?: any;
      token?: string;
      user?: UserType;
    }>(
      process.env.LOGIN_API ||
        process.env.NEXT_PUBLIC_LOGIN_API ||
        'http://localhost:3030/auth/login',
      Auth,
    );

    // console.log(res.data);
    if (res.data.errors) {
      dispatch({
        type: Auth_FAIL,
        errors: res.data.errors,
      });
    } else {
      dispatch({
        type: Auth_SUCCESS,
        token: res.data.token,
        user: res.data.user,
      });
    }
  } catch (e) {
    dispatch({
      type: Auth_FAIL,
    });
  }
};

export const SavedUserToRedux = (Auth: UserType, token: string) => (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  dispatch({
    type: Auth_LOADING,
  });

  dispatch({
    type: Auth_SUCCESS,
    user: Auth,
  });
};

export const AuthSignup = (inputs: signupI) => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  try {
    // console.log(
    //   'signupAPIasdasd',
    //   process.env.SIGNUP_API,
    //   process.env.NEXT_PUBLIC_SIGNUP_API,
    //   process.env.NODE_ENV,
    //   process.env.PUBLIC_URL,
    // );
    dispatch({
      type: Auth_LOADING,
      method: authMethod.AUTH_SIGNUP,
    });

    const res = await axios.post<{
      errors?: any;
      token?: string;
      user?: UserType;
    }>(
      process.env.SIGNUP_API ||
        process.env.NEXT_PUBLIC_SIGNUP_API ||
        'http://localhost:3030/auth/signup',
      { ...inputs },
      {
        withCredentials: true,
      },
    );

    // console.log(res.data);
    if (res.data.errors) {
      dispatch({
        type: Auth_FAIL,
        errors: res.data.errors,
      });
    } else {
      dispatch({
        type: Auth_SUCCESS,
        token: res.data.token,
        user: res.data.user,
      });
    }
  } catch (e) {
    dispatch({
      type: Auth_FAIL,
    });
  }
};
