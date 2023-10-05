import { CharacterOptions, BaseCharacter } from './character';
import { Weapons } from './weapons';

export interface WarriorOptions extends CharacterOptions {
  type: 'Warrior';
  strength: number;
}

export class Warrior extends BaseCharacter {
  constructor(name: string, weapon: Weapons, public strength: number) {
    super(name, weapon);
  }

  displayAbilities() {
    console.log(`${this.name} has ${this.strength} strength and uses a ${this.weapon}`);
  }
}
