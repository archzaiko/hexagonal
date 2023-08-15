import { Session } from '../../model/session.model';
import { Credentials } from '../../model/credentials.model';

export interface AuthenticationPort {
  login(credentials: Credentials): Promise<Session>;
  logout(session: Session): Promise<void>;
}
