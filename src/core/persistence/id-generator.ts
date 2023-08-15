export class IdGenerator {
  generate(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
