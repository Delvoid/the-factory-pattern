import { Weapons } from './weapons';

export interface CharacterOptions {
  name: string;
  weapon: Weapons;
}

interface Character {
  name: string;
  weapon: Weapons;
  displayAbilities: () => void;
}

export class BaseCharacter implements Character {
  constructor(public name: string, public weapon: Weapons) {}

  displayAbilities(): void {
    console.log(`${this.name} uses a ${this.weapon}`);
  }
}
