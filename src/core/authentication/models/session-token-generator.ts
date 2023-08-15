import { User } from '@core';

export class SessionTokenGenerator {
  generate(_user: User): Promise<string> {
    return Promise.resolve('some-token');
  }
}
