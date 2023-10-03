# Theme Manager with Factory Pattern

## Concept

Create and manage different UI themes (DarkTheme, LightTheme, etc.) using a Theme Factory pattern.

## Usefulness

- **Dynamic Theme Application:** Enables dynamic switching between different themes, enhancing user experience by offering visual variety and accessibility options.
- **Ease of Extension:** Facilitates the easy addition of new themes without requiring changes to the theme application logic in the client code.

## Usage

### Theme Types

The system currently supports the following themes:

- **Dark Theme:** A high-contrast theme featuring a black background and white text.
- **Light Theme:** A minimalistic theme featuring a white background and black text.

### Applying Themes

Using the theme manager is straightforward. Simply invoke the `applyTheme` function with the desired theme type:

```typescript
import { ThemeType, createTheme } from "./theme";

const applyTheme = (type: ThemeType): void => {
  const theme = createTheme(type);
  theme.applyTheme();
};

// Applying different themes
applyTheme("dark");
applyTheme("light");
```

### Extending with New Themes

To introduce new themes:

1. Define the properties and behaviors in `theme.ts`.
2. Extend the `createTheme` function to recognize the new theme type.

```typescript
// Example of defining a new theme
const newTheme: Theme = {
  backgroundColor: "...",
  textColor: "...",
  borderColor: "...",
  applyTheme: () => {},
};
newTheme.applyTheme = applyThemeFunction(newTheme);
```

## Future Improvements

- **User Preferences:** Implement functionality to store and apply users’ theme preferences automatically upon subsequent visits.
- **Transition Effects:** Introduce smooth transitions when switching between themes for a polished and visually appealing user experience.

## Contributing

We welcome contributions! Feel free to submit issues or pull requests if you have suggestions, corrections, or improvements to the Theme Manager.

