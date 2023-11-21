import { type Types } from "mongoose";

export interface UserStructure {
  _id: string;
  name: string;
  username: string;
  password: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UsersMongooseRepositoryStructure {
  getUsers: (username: string, password: string) => Promise<UserStructure>;
}
