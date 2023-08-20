import { User } from '@core';
import { UserRecord } from './user.record';

export class UserMapper {
  toDomain(record: UserRecord): User {
    return record as User;
  }

  toPersistence(user: User): UserRecord {
    return user as UserRecord;
  }
}
