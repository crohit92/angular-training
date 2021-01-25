export enum UserRole {
  Client,
  Organisation,
  Admin
}
export interface IUser {
  // id: string;
  // id: number;
  name: string;
  username: string;
  password?: string;
  role: UserRole;
}
