export enum UserRole {
  Client,
  Organisation,
  Admin
}
export interface User {
  id: number;
  name: string;
  username: string;
  role: UserRole;
}
