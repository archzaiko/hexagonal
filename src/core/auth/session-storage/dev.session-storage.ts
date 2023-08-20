import { EntityId } from 'src/core/base/entity.base';
import { Session } from 'src/core/auth/models/session';
import { SessionStorage } from './session-storage';

export class DevSessionStorage implements SessionStorage {
  private readonly storage: Record<EntityId, Session> = {};

  get(id: EntityId): Session | undefined {
    return this.storage[id];
  }

  set(id: EntityId, session: Session): void {
    this.storage[id] = session;
  }

  delete(id: EntityId): void {
    delete this.storage[id];
  }
}
