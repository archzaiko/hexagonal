import { User } from '@core';
import { SessionTokenGenerator } from './session-token-generator';

export class DevSessionTokenGenerator implements SessionTokenGenerator {
  generate(_user: User): Promise<string> {
    return Promise.resolve('some-token');
  }
}
