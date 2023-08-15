import { IdGenerator } from '@persistence/id-generator';

export type EntityId = number;

export class BaseEntity {
  static get nextId(): EntityId {
    const generator = new IdGenerator();
    return generator.generate();
  }

  id: EntityId;

  constructor() {
    this.id = BaseEntity.nextId;
  }
}
