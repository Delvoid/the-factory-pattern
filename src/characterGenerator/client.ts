import { CharacterFactory } from './characterFactroy';

const character = new CharacterFactory();

const wizard = character.createCharacter({
  type: 'Wizard',
  name: 'Gandalf',
  magicPower: 100,
  weapon: 'Staff',
});

wizard.displayAbilities();

const warrior = character.createCharacter({
  type: 'Warrior',
  name: 'Conan',
  strength: 100,
  weapon: 'Sword',
});

warrior.displayAbilities();

const ranger = character.createCharacter({
  type: 'Ranger',
  name: 'Legolas',
  agility: 100,
  weapon: 'Bow',
});

ranger.displayAbilities();
