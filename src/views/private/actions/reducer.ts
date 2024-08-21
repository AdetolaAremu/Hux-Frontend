import { IAllUsers, LoggedInUser } from "../../../types/PrivateType";
import { ErrorResponse } from "../../../types/response/ErrorResponse";
import { IContact } from "../../../types/response/PrivateResponse";
import {
  GET_DATA,
  GET_ERRORS,
  GET_LOGGED_IN_USER,
  LOADING_ENDS,
  LOADING_STARTS,
} from "./types";

export interface PrivateState {
  modalError: ErrorResponse | null;
  loading: boolean;
  getData: IContact[];
  errors?: ErrorResponse | null;
  loggedInUser: LoggedInUser | null;
  allUsers: IAllUsers | null;
  getModalData: null;
  modalLoading: boolean;
  getOneContact: IContact | null;
}

const init: PrivateState = {
  getData: [],
  loading: false,
  errors: null,
  modalError: null,
  loggedInUser: null,
  allUsers: null,
  getModalData: null,
  modalLoading: false,
  getOneContact: null,
};

const privateReducer = (state = init, action: any) => {
  switch (action.type) {
    case LOADING_STARTS:
      return {
        ...state,
        loading: true,
      };
    case LOADING_ENDS:
      return {
        ...state,
        loading: false,
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        getData: action.payload,
      };
    case GET_LOGGED_IN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };

    default:
      return state;
  }
};

export default privateReducer;
