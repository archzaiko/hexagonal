import { AuthPort, Session } from '@core';

import { LoginResponseDto } from './dto/login-response.dto';
import { LogoutResponseDto } from './dto/logout-response.dto';
import { BasicCredentialsDTO } from './dto/basic-credentials.dto';

export class AuthController {
  constructor(private readonly authenticationPort: AuthPort) {}

  async loginByEmailAndPassword(): Promise<LoginResponseDto> {
    const { email, password }: BasicCredentialsDTO = new BasicCredentialsDTO(
      {},
    );
    const session: Session =
      await this.authenticationPort.loginWithBasicStrategy({ email, password });
    return new LoginResponseDto(session);
  }

  async logout(): Promise<LogoutResponseDto> {
    const session: Session = {} as Session;
    await this.authenticationPort.logout(session);
    return new LogoutResponseDto(session);
  }
}
