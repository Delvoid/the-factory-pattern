import { CharacterOptions, BaseCharacter } from './character';
import { Weapons } from './weapons';

export interface RangerOptions extends CharacterOptions {
  type: 'Ranger';
  agility: number;
}

export class Ranger extends BaseCharacter {
  constructor(name: string, weapon: Weapons, public agility: number) {
    super(name, weapon);
  }

  displayAbilities() {
    console.log(`${this.name} has ${this.agility} agility and uses a ${this.weapon}`);
  }
}
