import { ErrorResponse } from "react-router-dom";
// import isEmpty from "../../../utils/isEmpty";
import {
  AUTH_LOADING_ENDS,
  AUTH_LOADING_STARTS,
  SET_CURRENT_USER,
  GET_AUTH_ERROR,
  GET_SUCCESS_RESPONSE,
  CHECK_IF_USER_IS_LOGGED_IN,
} from "./types";

export interface AuthState {
  loginError: object | string;
  authLoading: boolean;
  user: {};
  errors?: ErrorResponse | null;
  isAuthenticated: boolean;
  successResponse: string;
}

const init: AuthState = {
  isAuthenticated: false,
  user: {},
  authLoading: false,
  errors: null,
  loginError: {},
  successResponse: "",
};

const authReducer = (state = init, action: any) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_LOADING_STARTS:
      return {
        ...state,
        authLoading: true,
      };
    case AUTH_LOADING_ENDS:
      return {
        ...state,
        authLoading: false,
      };
    case GET_AUTH_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_SUCCESS_RESPONSE:
      return {
        ...state,
        successResponse: action.payload,
      };
    case CHECK_IF_USER_IS_LOGGED_IN:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
