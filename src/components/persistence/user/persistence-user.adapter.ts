import {
  EntityId,
  PersistenceUserPort,
  User,
} from 'src/components/core/public-api';
import { UserRepository } from './user.repository';

export class PersistenceUserAdapter implements PersistenceUserPort {
  constructor(private readonly userRepository: UserRepository) {}

  findUserById(id: EntityId): Promise<User> {
    return this.userRepository.findUserById(id);
  }
}
