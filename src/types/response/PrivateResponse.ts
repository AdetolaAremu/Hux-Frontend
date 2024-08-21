import { LoggedInUser } from "../PrivateType";

export interface IContact {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  middleName: string;
  country: string;
  location: string;
  contactType: string;
}

export interface ContactResponse {
  status: boolean;
  message: string;
  data?: { contacts: IContact[] };
}

export interface IGetOneContactResponse {
  status: boolean;
  message: string;
  data: { contact: IContact };
}

export interface IDeleteContactResponse {
  status: boolean;
  message: string;
}

export interface IGetLoggedInUserResponse {
  status: boolean;
  message: string;
  data: { user: LoggedInUser };
}
