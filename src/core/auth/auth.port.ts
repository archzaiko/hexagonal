import { Session } from 'src/core/auth/models/session';
import { BasicCredentials } from '@authentication/credentials/basic.credentials';

export interface AuthPort {
  loginWithBasicStrategy(credentials: BasicCredentials): Promise<Session>;
  logout(session: Session): Promise<void>;
}
