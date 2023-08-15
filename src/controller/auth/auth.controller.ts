import { AuthenticationPort, Credentials, Session } from '@/core';

import { LoginResponseDto } from './dto/login-response.dto';
import { LogoutResponseDto } from './dto/logout-response.dto';

export class AuthController {
  constructor(private readonly authenticationPort: AuthenticationPort) {}

  async login(): Promise<LoginResponseDto> {
    const credentials: Credentials = {};
    const session: Session = await this.authenticationPort.login(credentials);
    return new LoginResponseDto(session);
  }

  async logout(): Promise<LogoutResponseDto> {
    const session: Session = {} as Session;
    await this.authenticationPort.logout(session);
    return new LogoutResponseDto(session);
  }
}
