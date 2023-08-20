import { User } from '@core';

export interface SessionTokenGenerator {
  generate(user: User): Promise<string>;
}
