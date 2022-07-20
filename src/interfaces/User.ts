export interface IUser {
  id: number;
  name: string;
  role: string;
  email: string;
}

export interface IUserWithToken  {
  user: IUser,
  token: string;

}