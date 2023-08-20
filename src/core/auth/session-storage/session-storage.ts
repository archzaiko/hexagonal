import { Session } from 'src/core/auth/models/session';
import { EntityId } from '../../base/entity.base';

export interface SessionStorage {
  get(userId: EntityId): Session | undefined;
  set(userId: EntityId, session: Session): void;
  delete(userId: EntityId): void;
}
