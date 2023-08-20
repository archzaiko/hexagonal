import { Credentials, EntityId, Session } from '@core';
import { AuthStrategy } from './strategies/auth-strategy';
import { User } from 'src/core/auth/models/user';
import { SessionTokenGenerator } from './session-token-generator';
import { SessionStorage } from './session-storage';

export class AuthService {
  constructor(
    private readonly sessionTokenGenerator: SessionTokenGenerator,
    private readonly userSessionStorage: SessionStorage,
  ) {}

  async login(
    credentials: Credentials,
    strategy: AuthStrategy,
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
