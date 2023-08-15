import { Credentials, Session } from '@/core';

export interface AuthenticationService {
  verifyCredentials(credentials: Credentials): Promise<Session>;
}
