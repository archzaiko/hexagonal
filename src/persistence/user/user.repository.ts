import { EntityId } from '@core';
import { UserRecord } from './user.record';

export interface UserRepository {
  findOneById(id: EntityId): Promise<UserRecord>;
  findOneByEmail(email: string): Promise<UserRecord>;
}
