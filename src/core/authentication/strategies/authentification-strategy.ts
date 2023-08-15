import { User } from '@authentication/models/user.model';
import { Credentials } from '@authentication/models/credentials/credentials';
import { PersistenceUserPort } from '@core';

export abstract class AuthentificationStrategy {
  constructor(protected readonly persistenceUserPort: PersistenceUserPort) {}
  abstract verify(credentials: Credentials): Promise<User>;
}
