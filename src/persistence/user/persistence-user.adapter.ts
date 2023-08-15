import { EntityId, PersistenceUserPort, User } from '@/core';
import { UserRepository } from './user.repository';
import { UserRecord } from './user.record';
import { UserMapper } from './user.mapper';

export class PersistenceUserAdapter implements PersistenceUserPort {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userMapper: UserMapper,
  ) {}

  async findUserById(id: EntityId): Promise<User> {
    const userRecord: UserRecord = await this.userRepository.findUserById(id);
    return this.userMapper.toDomain(userRecord);
  }
}
