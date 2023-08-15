import { Credentials } from './credentials';

export interface LocalCredentials extends Credentials {
  email: string;
  password: string;
}
