import { ThemeType, createTheme } from './theme';

const applyTheme = (type: ThemeType): void => {
  const theme = createTheme(type);
  theme.applyTheme();
};

// Applying different themes
applyTheme('dark');
applyTheme('light');
