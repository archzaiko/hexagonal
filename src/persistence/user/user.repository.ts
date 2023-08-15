import { EntityId } from '@/core';
import { UserRecord } from './user.record';

export interface UserRepository {
  findUserById(id: EntityId): Promise<UserRecord>;
}
