import { EntityId } from '../../base/entity.base';

export interface Session {
  userId: EntityId;
  sessionToken: string;
}
