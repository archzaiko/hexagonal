import { Credentials } from './credentials';

export interface BasicCredentials extends Credentials {
  email: string;
  password: string;
}
