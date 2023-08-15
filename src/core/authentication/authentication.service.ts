import { Credentials, EntityId, Session } from '@core';
import { AuthentificationStrategy } from './strategies/authentification-strategy';
import { User } from 'src/core/authentication/models/user.model';
import { SessionTokenGenerator } from './models/session-token-generator';
import { UserSessionStorage } from './models/user-session-storage.model';

export class AuthenticationService {
  private readonly sessionTokenGenerator: SessionTokenGenerator =
    new SessionTokenGenerator();

  private readonly userSessionStorage: UserSessionStorage =
    new UserSessionStorage();

  async login(
    credentials: Credentials,
    strategy: AuthentificationStrategy,
  ): Promise<Session> {
    const user: User = await strategy.verify(credentials);
    return this.createUserSession(user);
  }

  async logout(session: Session): Promise<void> {
    await this.deleteUserSession(session.userId);
  }

  private async createUserSession(user: User): Promise<Session> {
    const sessionToken: string = await this.sessionTokenGenerator.generate(
      user,
    );
    const session: Session = { userId: user.id, sessionToken };
    this.userSessionStorage.set(user.id, session);
    return session;
  }

  private deleteUserSession(userId: EntityId): Promise<void> {
    this.userSessionStorage.delete(userId);
    return Promise.resolve();
  }
}
