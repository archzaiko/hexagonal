import { User } from '../model/user.model';
import { EntityId } from '../model/entity.model';

export interface PersistenceUserPort {
  findUserById(id: EntityId): Promise<User>;
}
