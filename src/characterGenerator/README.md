###  Game Character Generator

## Concept

Develop a versatile character creation system that generates various game characters (e.g., Wizard, Warrior, Ranger, etc.) using a Character Factory, enhancing gameplay with diverse and dynamic characters.

## Usefulness

- **Diverse Character Creation:** Facilitates the development of various characters, each with unique abilities and attributes, enriching the gaming environment.
- **Simplified Character Management:** Streamlines the creation and management of different character types through a unified interface.
- **Enhanced Gameplay:** Provides players with a myriad of characters to choose from, each offering different gameplay experiences.

## Usage

### Creating Characters

Creating a character involves specifying its type along with corresponding properties, all simplified through the use of a character factory:

```typescript
import { createCharacter } from "./characterFactory";

const wizard = createCharacter({
  type: "Wizard",
  name: "Gandalf",
  magicPower: 100,
  weapon: "Staff",
});

wizard.displayAbilities();

const warrior = createCharacter({
  type: "Warrior",
  name: "Conan",
  strength: 100,
  weapon: "Sword",
});

warrior.displayAbilities();

const ranger = createCharacter({
  type: "Ranger",
  name: "Legolas",
  agility: 100,
  weapon: "Bow",
});

ranger.displayAbilities();
```

### Extending with New Character Types

Introducing new character types into the system involves defining their properties and behaviors in their respective files (e.g., `wizard.ts`, `warrior.ts`, etc.) and extending the `createCharacter` function to support the new type.

## Code Structure

- **`character.ts`**
  - Contains the base `Character` interface and the `BaseCharacter` class, which serves as the foundation for all character types.
- **`weapons.ts`**
  - Enumerates the different weapons available for characters.
- **`wizard.ts`, `warrior.ts`, `ranger.ts`**
  - Define the respective character types along with their unique abilities and attributes.
- **`characterFactory.ts`**
  - Contains the `createCharacter` function, which serves as the main factory method for generating characters based on specified options.
- **`client.ts`**
  - Demonstrates how to utilize the character creation system to generate various types of characters.

## Future Improvements

- **Dynamic Ability Assignment:** Consider a mechanism for dynamically assigning abilities to characters to allow more customization.
- **Character Upgrades:** Implement a system that allows characters to upgrade their abilities or weapons as they progress through the game.


## Contributing

Contributions for enhancements, new character types, or bug fixes are welcomed! Feel free to submit issues or pull requests for improvements and new features.

