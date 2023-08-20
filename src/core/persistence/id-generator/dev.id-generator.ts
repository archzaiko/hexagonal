import { IdGenerator } from './id-generator';

export class DevIdGenerator implements IdGenerator {
  generate(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
