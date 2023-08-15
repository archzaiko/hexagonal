import { Session } from 'src/core/authentication/models/session.model';
import { LocalCredentials } from 'src/core/authentication/models/credentials/local-credentials.model';

export interface AuthenticationPort {
  loginWithLocalStrategy(credentials: LocalCredentials): Promise<Session>;
  logout(session: Session): Promise<void>;
}
