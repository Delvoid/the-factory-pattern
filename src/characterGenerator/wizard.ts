import { BaseCharacter, CharacterOptions } from './character';
import { Weapons } from './weapons';

export interface WizardOptions extends CharacterOptions {
  type: 'Wizard';
  magicPower: number;
}

export class Wizard extends BaseCharacter {
  constructor(name: string, weapon: Weapons, public magicPower: number) {
    super(name, weapon);
  }

  displayAbilities(): void {
    console.log(`${this.name} has ${this.magicPower} magic power and uses a ${this.weapon}`);
  }
}
