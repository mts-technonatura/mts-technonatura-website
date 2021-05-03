import { Dispatch } from 'redux';
import {
  Auth_FAIL,
  Auth_LOADING,
  Auth_SUCCESS,
  AuthDispatchTypes,
  authMethod,
  UserType,
} from '../types/AuthActionTypes.d';
import axios from 'axios';

export const AuthLogin = (Auth: string) => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  try {
    dispatch({
      type: Auth_LOADING,
      method: authMethod.AUTH_LOGIN,
    });

    // const res = await axios.get(`https://pokeapi.co/api/v2/Auth/${Auth}`);

    // dispatch({
    //   type: Auth_SUCCESS,
    //   payload: res.data,
    // });
  } catch (e) {
    dispatch({
      type: Auth_FAIL,
    });
  }
};

interface signupI {
  username: string;
  password: string;
  email: string;
  name: string;
}

export const AuthSignup = (inputs: signupI) => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  try {
    console.log(
      'signupAPIasdasd',
      process.env.NEXT_PUBLIC_SIGNUP_API,
      process.env.NODE_ENV,
      process.env.PUBLIC_URL,
    );
    dispatch({
      type: Auth_LOADING,
      method: authMethod.AUTH_SIGNUP,
    });

    const res = await axios.post<{
      errors?: any;
      token?: string;
      user?: UserType;
    }>(
      'http://localhost:3030/auth/signup' ||
        process.env.NEXT_PUBLIC_SIGNUP_API ||
        process.env.SIGNUP_API,
      { ...inputs },
      {
        withCredentials: true,
      },
    );

    console.log(res.data);
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
