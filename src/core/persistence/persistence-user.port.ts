import { User } from '../authentication/models/user.model';
import { EntityId } from '../base/entity.base';

export interface PersistenceUserPort {
  findById(id: EntityId): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}
