import { EntityId, User } from 'src/components/core/public-api';

export interface UserRepository {
  findUserById(id: EntityId): Promise<User>;
}
