import { User } from 'src/core/auth/models/user';
import { Credentials } from 'src/core/auth/credentials/credentials';

export interface AuthStrategy {
  verify(credentials: Credentials): Promise<User>;
}
