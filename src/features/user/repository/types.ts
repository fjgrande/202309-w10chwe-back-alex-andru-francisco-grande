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
  getUser: (username: string, password: string) => Promise<UserStructure>;
}
