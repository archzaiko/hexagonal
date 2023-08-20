import { EntityId, PersistenceUserPort, User } from '@core';
import { UserRepository } from './user.repository';
import { UserRecord } from './user.record';
import { UserMapper } from './user.mapper';

export class PersistenceUserAdapter implements PersistenceUserPort {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userMapper: UserMapper,
  ) {}

  async findOneById(id: EntityId): Promise<User> {
    const record: UserRecord = await this.userRepository.findOneById(id);
    return this.userMapper.toDomain(record);
  }

  async findOneByEmail(email: string): Promise<User> {
    const record: UserRecord = await this.userRepository.findOneByEmail(email);
    return this.userMapper.toDomain(record);
  }
}
