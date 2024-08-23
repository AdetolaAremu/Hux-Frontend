import { ThunkAction } from "redux-thunk";
import {
  ContactResponse,
  IDeleteContactResponse,
  IGetLoggedInUserResponse,
  IGetOneContactResponse,
} from "../../../types/response/PrivateResponse";
import { RootState } from "../../../store/RootReducer";
import {
  GET_DATA,
  GET_ERRORS,
  GET_LOGGED_IN_USER,
  LOADING_ENDS,
  LOADING_STARTS,
} from "./types";
import { ErrorResponse } from "../../../types/response/ErrorResponse";
import axiosInstance from "../../../utils/AxiosInterceptor";
import { GET_ONE_DATA } from "../../auth/actions/types";
import { IContactCreate } from "../../../types/PrivateType";

const service_url = import.meta.env.VITE_BASE_URL;

export const getContacts = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      const response = await axiosInstance.get<ContactResponse>(
        `${service_url}/contacts`
      );

      dispatch({
        type: GET_DATA,
        payload: response.data?.data?.contacts || [],
      });

      dispatch({ type: LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_ERRORS, payload: error.response });
        } else {
          dispatch({
            type: GET_ERRORS,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};

export const getContact = (
  id: string
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      const response = await axiosInstance.get<IGetOneContactResponse>(
        `${service_url}/contacts/${id}`
      );

      dispatch({ type: GET_ONE_DATA, payload: response.data?.data?.contact });

      dispatch({ type: LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_ERRORS, payload: error.response });
        } else {
          dispatch({
            type: GET_ERRORS,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};

export const deleteContact = (
  id: string
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      console.log("laddfadfadfas");
      await axiosInstance.delete<IDeleteContactResponse>(
        `${service_url}/contacts/${id}`
      );

      dispatch({ type: LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_ERRORS, payload: error.response });
        } else {
          dispatch({
            type: GET_ERRORS,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};

export const createContact = (
  data: IContactCreate
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      const response = await axiosInstance.post<ContactResponse>(
        `${service_url}/contacts`,
        data
      );

      dispatch({ type: GET_DATA, payload: response.data });

      dispatch({ type: LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_ERRORS, payload: error.response });
        } else {
          if (error.response?.data?.message?.includes("duplicate")) {
            dispatch({
              type: GET_ERRORS,
              payload:
                "Duplicate phone number or email, please enter a valid details",
            });
          } else {
            dispatch({
              type: GET_ERRORS,
              payload: "Sorry, something went wrong!",
            });
          }
        }
      }
    }
  };
};

export const editContact = (
  data: IContactCreate,
  id: string
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      const response = await axiosInstance.patch<ContactResponse>(
        `${service_url}/contacts/${id}`,
        data
      );

      dispatch({ type: GET_DATA, payload: response.data });

      dispatch({ type: LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_ERRORS, payload: error.response });
        } else {
          if (error.response?.data?.message?.includes("duplicate")) {
            dispatch({
              type: GET_ERRORS,
              payload:
                "Duplicate phone number or email, please enter a valid details",
            });
          } else {
            dispatch({
              type: GET_ERRORS,
              payload: "Sorry, something went wrong!",
            });
          }
        }
      }
    }
  };
};

export const getLoggedInUser = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      const response = await axiosInstance.get<IGetLoggedInUserResponse>(
        `${service_url}/users/logged-in-user`
      );

      const { data } = response.data;
      localStorage.setItem("user", JSON.stringify(data.user));

      dispatch({
        type: GET_LOGGED_IN_USER,
        payload: response.data.data.user,
      });

      dispatch({ type: LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_ERRORS, payload: error.response });
        } else {
          dispatch({
            type: GET_ERRORS,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};

export const callLogoutUser = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      await axiosInstance.post<IGetLoggedInUserResponse>(
        `${service_url}/auth/logout`
      );

      localStorage.clear();

      dispatch({ type: LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_ERRORS, payload: error.response });
        } else {
          dispatch({
            type: GET_ERRORS,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};
