import { Session } from 'src/components/core/model/session.model';
import { Credentials } from 'src/components/core/model/credentials.model';

export interface AuthenticationPort {
  login(credentials: Credentials): Promise<Session>;
  logout(session: Session): Promise<void>;
}
