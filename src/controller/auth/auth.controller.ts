import { AuthenticationPort, Session } from '@core';

import { LoginResponseDto } from './dto/login-response.dto';
import { LogoutResponseDto } from './dto/logout-response.dto';
import { EmailPasswordCredentialsDTO } from './dto/email-password-credentials.dto';

export class AuthController {
  constructor(private readonly authenticationPort: AuthenticationPort) {}

  async loginByEmailAndPassword(): Promise<LoginResponseDto> {
    const { email, password }: EmailPasswordCredentialsDTO =
      new EmailPasswordCredentialsDTO({});
    const session: Session =
      await this.authenticationPort.loginWithLocalStrategy({ email, password });
    return new LoginResponseDto(session);
  }

  async logout(): Promise<LogoutResponseDto> {
    const session: Session = {} as Session;
    await this.authenticationPort.logout(session);
    return new LogoutResponseDto(session);
  }
}
