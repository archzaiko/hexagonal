export class EmailPasswordCredentialsDTO {
  email: string;
  password: string;

  constructor(payload: Record<string, unknown>) {
    this.email = payload.email as string;
    this.password = payload.password as string;
  }
}
