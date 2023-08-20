import { DevIdGenerator, IdGenerator } from '@persistence/id-generator';

export type EntityId = number;

export class BaseEntity {
  static nextId(idGenerator: IdGenerator): EntityId {
    return idGenerator.generate();
  }

  id: EntityId;

  constructor() {
    this.id = BaseEntity.nextId(new DevIdGenerator());
  }
}
