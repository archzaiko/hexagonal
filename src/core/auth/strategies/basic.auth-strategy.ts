import { User } from 'src/core/auth/models/user';

import { AuthStrategy } from './auth-strategy';
import { AuthentificationFailedException } from '../exceptions/authentification-failed.exception';
import { BasicCredentials } from '@authentication/credentials/basic.credentials';
import { PersistenceUserPort } from '@persistence/user/persistence-user.port';

export class BasicAuthentificationStrategy implements AuthStrategy {
  constructor(protected readonly persistenceUserPort: PersistenceUserPort) {}

  async verify({ email, password }: BasicCredentials): Promise<User> {
    const user: User | undefined =
      await this.persistenceUserPort.findOneByEmail(email);

    if (!user || user.password !== password) {
      throw new AuthentificationFailedException('Incorrect email or password');
    }

    return user;
  }
}
