import { Dispatch } from 'redux';
import {
  Auth_FAIL,
  Auth_LOADING,
  Auth_SUCCESS,
  AuthDispatchTypes,
  AuthCheckJwtFail,
  AUTH_LOGOUT,
  Auth_JWT_SUCCESS,
  AuthSuccess,
  Auth_Check_JwtFail,
  AUTH_REMOVE_ERRORS,
  Auth_SIGNUP_SUCCESS,
  Auth_LOGIN_SUCCESS,
} from '../types/AuthActionTypes.d';
import { UserType } from '@/ts/index';
import axios from 'axios';
import { ssr, JWTTokenResponse } from '@/ts/index';

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

    // console.log('hey');
    const res = await axios.post<{
      errors?: any;
      token?: string;
      user?: UserType;
    }>(
      process.env.NEXT_PUBLIC_LOGIN_API || 'http://localhost:3030/auth/login',
      Auth,
    );

    // console.log(res.data);
    if (res.data.errors) {
      dispatch({
        type: Auth_FAIL,
        errors: res.data.errors,
      });
    } else {
      dispatch<AuthSuccess>({
        type: Auth_LOGIN_SUCCESS,
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
    token: token,
  });
};

export const AuthVerifyJWT = (token: string) => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  // console.log('token', token);

  if (token) {
    dispatch({
      type: Auth_LOADING,
    });

    try {
      // console.log('user.data', token);

      const user = await axios.post<ssr>(
        process.env.NEXT_PUBLIC_CHECKJWT ||
          'http://localhost:3030/auth/checkJWT',
        {
          token: token,
        },
      );

      // console.log('user.data', user.data);
      if (user.data.user) {
        dispatch({
          type: Auth_JWT_SUCCESS,
          user: user.data.user,
          token: token,
        });
        return;
      }
      dispatch<Auth_Check_JwtFail>({
        type: AuthCheckJwtFail,
        message: 'invalid token',
      });
      return;
    } catch (err) {
      dispatch<Auth_Check_JwtFail>({
        type: AuthCheckJwtFail,
        message: 'server error',
      });
      return;
    }
  }

  dispatch<Auth_Check_JwtFail>({
    type: AuthCheckJwtFail,
    message: 'no token',
  });
  return;
};

export const AuthLogout = () => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
};

export const AuthRemoveErrors = () => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  dispatch({
    type: AUTH_REMOVE_ERRORS,
  });
};

export const AuthSignup = (inputs: signupI) => async (
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
        type: Auth_SIGNUP_SUCCESS,
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
