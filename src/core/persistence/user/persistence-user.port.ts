import { User } from '../../auth/models/user';
import { EntityId } from '../../base/entity.base';

export interface PersistenceUserPort {
  findOneById(id: EntityId): Promise<User | undefined>;
  findOneByEmail(email: string): Promise<User | undefined>;
}
