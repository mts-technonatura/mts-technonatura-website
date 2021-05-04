import { Dispatch } from 'redux';
import {
  Auth_FAIL,
  Auth_LOADING,
  Auth_SUCCESS,
  AuthDispatchTypes,
  AuthCheckJwtFail,
  AUTH_LOGOUT,
} from '../types/AuthActionTypes.d';
import { ssr } from '@/ts/index';
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
    token: token,
  });
};

export const AuthVerifyJWT = (token: string) => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  if (token) {
    dispatch({
      type: Auth_LOADING,
    });
    console.log('heyyy');

    try {
      const user = await axios.post<ssr>(
        process.env.NEXT_PUBLIC_CHECKJWT ||
          'http://localhost:3030/auth/checkJWT',
        {
          token: token,
        },
      );

      if (user.data.user) {
        dispatch({
          type: Auth_SUCCESS,
          user: user.data.user,
          token: token,
        });
        return;
      }
      dispatch({
        type: AuthCheckJwtFail,
      });
      return;
    } catch (err) {
      dispatch({
        type: AuthCheckJwtFail,
      });
      return;
    }
  }

  dispatch({
    type: AuthCheckJwtFail,
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
