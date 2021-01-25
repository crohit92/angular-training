import { Document, model, Schema } from "mongoose";
import { IUser, UserRole } from "@stream/domain";
export interface IUserSchema extends Document<string>, IUser { }


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  role: {
    type: Number,
    enum: [UserRole.Admin, UserRole.Client, UserRole.Organisation],
    required: true
  }
});


export const User = model<IUserSchema>("User", UserSchema);
/*
 {
  status:IP_200,
  data: {},
  error: {
    message:"",
  }
 }

*/
