import {
  AUTH_LOADING_ENDS,
  AUTH_LOADING_STARTS,
  SET_CURRENT_USER,
  GET_AUTH_ERROR,
  GET_SUCCESS_RESPONSE,
} from "./types";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { ErrorResponse } from "../../../types/response/ErrorResponse";
import { RootState } from "../../../store/RootReducer";
import { ThunkAction } from "redux-thunk";
import { IRegister, ILogin } from "../../../types/AuthType";
import {
  ILoginResponse,
  IRegistrationResponse,
} from "../../../types/response/AuthResponse";
import { getLoggedInUser } from "../../private/actions/actions";

export const setCurrentUser = (decoded: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

const service_url = import.meta.env.VITE_BASE_URL;

const saveTokenToLocalStorage = (token: string) => {
  return new Promise((resolve) => {
    localStorage.setItem("jwtToken", token);
    resolve(true);
  });
};

export const loginUser = (
  userData: ILogin
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      userData;
      dispatch({ type: AUTH_LOADING_STARTS });
      const response = await axios.post<ILoginResponse>(
        `${service_url}/auth/login`,
        userData
      );
      const { token } = response.data;
      await saveTokenToLocalStorage(token);
      const decoded = jwtDecode(token);
      dispatch(getLoggedInUser());
      dispatch(setCurrentUser(decoded));
      dispatch({ type: AUTH_LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: AUTH_LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_AUTH_ERROR, payload: error.response });
        } else {
          dispatch({
            type: GET_AUTH_ERROR,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};

export const registerUser = (
  userData: IRegister
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      userData;
      dispatch({ type: AUTH_LOADING_STARTS });

      const response = await axios.post<IRegistrationResponse>(
        `${service_url}/auth/register`,
        userData
      );

      response.data.data &&
        dispatch({
          type: GET_SUCCESS_RESPONSE,
          payload: response.data.message,
        });
      dispatch({ type: AUTH_LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: AUTH_LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_AUTH_ERROR, payload: error.response });
        } else {
          if (error.response?.data?.message?.includes("duplicate")) {
            dispatch({
              type: GET_AUTH_ERROR,
              payload: "Email exists, please enter a valid email",
            });
          } else {
            dispatch({
              type: GET_AUTH_ERROR,
              payload: "Sorry, something went wrong!",
            });
          }
        }
      }
    }
  };
};

export const logoutUser = () => () => {
  localStorage.clear();
  window.location.href = "/auth/user";
};
