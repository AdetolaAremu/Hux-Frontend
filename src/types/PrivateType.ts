export interface ITransferToUser {
  toUser: string;
  amount: number;
}

export interface LoggedInUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v?: string;
}

export interface IAllUsers {
  user: LoggedInUser[];
}

export interface IContactCreate {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  middleName: string;
  country: string;
  location: string;
  contactType: string;
}

export interface IUser {
  firstName: String;
  lastName: String;
  email: String;
}

export interface IStatItem {
  name: string;
  figure: number;
  icon: React.ComponentType;
}
