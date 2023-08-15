import { User } from 'src/core/authentication/models/user.model';

import { AuthentificationStrategy } from './authentification-strategy';
import { AuthentificationFailedException } from '../exceptions/authentification-failed.exception';
import { LocalCredentials } from 'src/core/authentication/models/credentials/local-credentials.model';

export class LocalStrategy extends AuthentificationStrategy {
  async verify({ email, password }: LocalCredentials): Promise<User> {
    const user: User | undefined = await this.persistenceUserPort.findByEmail(
      email,
    );

    if (!user || user.password !== password) {
      throw new AuthentificationFailedException('Incorrect email or password');
    }

    return user;
  }
}
