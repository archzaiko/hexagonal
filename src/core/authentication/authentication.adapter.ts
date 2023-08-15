import { Session } from '@core';
import { AuthenticationPort } from './authentication.port';
import { AuthenticationService } from './authentication.service';
import { LocalCredentials } from 'src/core/authentication/models/credentials/local-credentials.model';
import { LocalStrategy } from './strategies/local.strategy';
import { PersistenceUserPort } from '@persistence/persistence-user.port';

export class AuthenticationAdapter implements AuthenticationPort {
  constructor(
    private readonly authenticationService: AuthenticationService,
    protected readonly persistenceUserPort: PersistenceUserPort,
  ) {}

  loginWithLocalStrategy(credentials: LocalCredentials): Promise<Session> {
    return this.authenticationService.login(
      credentials,
      new LocalStrategy(this.persistenceUserPort),
    );
  }

  logout(session: Session): Promise<void> {
    return this.authenticationService.logout(session);
  }
}
