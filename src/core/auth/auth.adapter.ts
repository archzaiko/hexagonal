import { Session } from '@core';
import { AuthPort } from './auth.port';
import { AuthService } from './auth.service';
import { BasicCredentials } from '@authentication/credentials/basic.credentials';
import { BasicAuthentificationStrategy } from './strategies/basic.auth-strategy';

export class AuthAdapter implements AuthPort {
  constructor(
    private readonly authenticationService: AuthService,
    private readonly basicAuthentificationStrategy: BasicAuthentificationStrategy,
  ) {}

  async loginWithBasicStrategy(
    credentials: BasicCredentials,
  ): Promise<Session> {
    return this.authenticationService.login(
      credentials,
      this.basicAuthentificationStrategy,
    );
  }

  logout(session: Session): Promise<void> {
    return this.authenticationService.logout(session);
  }
}
