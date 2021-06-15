import { Dispatch } from 'redux';
import axios from 'axios';
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
  Auth_SET_TOKEN,
} from '../types/AuthActionTypes.d';
import { UserInterface } from '@/ts/index';
import { auth_route } from '@/ts/api/routes.d';
import { ssr } from '@/ts/index';

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
  let audio;
  try {
    dispatch({
      type: Auth_LOADING,
    });

    // console.log('hey');
    const res = await axios.post<{
      errors?: any;
      token?: string;
      user?: UserInterface;
    }>(
      process.env.NEXT_PUBLIC_LOGIN_API || 'http://localhost:3030/auth/login',
      Auth,
    );

    if (res.data.errors) {
      dispatch({
        type: Auth_FAIL,
        errors: res.data.errors,
      });
    } else {
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962730/sounds/01%20Hero%20Sounds/hero_simple-celebration-03_ai1ky3.wav',
      );
      audio.play();

      dispatch<AuthSuccess>({
        type: Auth_LOGIN_SUCCESS,
        token: res.data.token,
        user: res.data.user,
      });
    }
  } catch (e) {
    // if login fail
    audio = new Audio(
      'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962739/sounds/02%20Alerts%20and%20Notifications/alert_high-intensity_kag2c3.wav',
    );
    audio.play();
    dispatch({
      type: Auth_FAIL,
      message: 'server error',
    });
  }
};

export const SetToken = (token: string) => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  dispatch({
    type: Auth_SET_TOKEN,
    token: token,
  });
};

export const SavedUserToRedux = (Auth: UserInterface, token: string) => (
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
  let audio;
  try {
    dispatch({
      type: Auth_LOADING,
    });

    const res = await axios.post<{
      errors?: any;
      token?: string;
      user?: UserInterface;
    }>(
      auth_route.SIGNUP_API,
      { ...inputs },
      {
        withCredentials: true,
      },
    );

    if (res.data.errors) {
      dispatch({
        type: Auth_FAIL,
        errors: res.data.errors,
      });
    } else {
      audio = new Audio(
        'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962730/sounds/01%20Hero%20Sounds/hero_simple-celebration-03_ai1ky3.wav',
      );
      audio.play();
      dispatch({
        type: Auth_SIGNUP_SUCCESS,
        token: res.data.token,
        user: res.data.user,
      });
    }
  } catch (e) {
    audio = new Audio(
      'https://res.cloudinary.com/dsg8ufk2s/video/upload/v1620962739/sounds/02%20Alerts%20and%20Notifications/alert_high-intensity_kag2c3.wav',
    );
    audio.play();
    dispatch({
      type: Auth_FAIL,
    });
  }
};
