import { Ranger, RangerOptions } from './ranger';
import { Warrior, WarriorOptions } from './warrior';
import { Wizard, WizardOptions } from './wizard';

type CharacterType = WizardOptions | WarriorOptions | RangerOptions;

export class CharacterFactory {
  createCharacter(options: CharacterType) {
    switch (options.type) {
      case 'Wizard':
        return new Wizard(options.name, options.weapon, options.magicPower);
      case 'Warrior':
        return new Warrior(options.name, options.weapon, options.strength);
      case 'Ranger':
        return new Ranger(options.name, options.weapon, options.agility);
    }
  }
}
