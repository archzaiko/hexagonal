import { User } from '@/core';
import { UserRecord } from './user.record';

export class UserMapper {
  toDomain(_record: UserRecord): User {
    return {} as User;
  }
}
