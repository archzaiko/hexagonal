import { User } from 'src/components/core/model/user.model';
import { EntityId } from 'src/components/core/model/entity.model';

export interface PersistenceUserPort {
  findUserById(id: EntityId): Promise<User>;
}
