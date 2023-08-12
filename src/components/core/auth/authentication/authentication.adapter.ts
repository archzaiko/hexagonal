import { Credentials, PersistenceUserPort, Session, User } from '@/core';
import { AuthenticationPort } from './authentication.port';
import { AuthenticationService } from './authentication.service';

export class AuthenticationAdapter implements AuthenticationPort {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly persistenceUserPort: PersistenceUserPort,
  ) {}

  async login(credentials: Credentials): Promise<Session> {
    const _user: User = await this.persistenceUserPort.findUserById(1);
    await this.authenticationService.verifyCredentials(credentials);
    return {} as Session;
  }

  logout(_session: Session): Promise<void> {
    return Promise.resolve();
  }
}
