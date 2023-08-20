import { BaseEntity } from '../../base/entity.base';

export interface User extends BaseEntity {
  password: string;
}
