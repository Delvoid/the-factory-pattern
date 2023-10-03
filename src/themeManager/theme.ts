interface Theme {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  applyTheme: () => void;
}

const darkTheme: Theme = {
  backgroundColor: 'black',
  textColor: 'white',
  borderColor: '1px solid white',
  applyTheme: () => {
    console.log(
      `Applied dark theme with colors ${darkTheme.backgroundColor}, ${darkTheme.textColor}, ${darkTheme.borderColor}`
    );
    document.body.style.backgroundColor = darkTheme.backgroundColor;
    document.body.style.color = darkTheme.textColor;
    document.body.style.border = darkTheme.borderColor;
  },
};

const lightTheme: Theme = {
  backgroundColor: 'white',
  textColor: 'black',
  borderColor: '1px solid black',
  applyTheme: () => {
    console.log(
      `Applied light theme with colors ${lightTheme.backgroundColor}, ${lightTheme.textColor}, ${lightTheme.borderColor}`
    );
    document.body.style.backgroundColor = lightTheme.backgroundColor;
    document.body.style.color = lightTheme.textColor;
    document.body.style.border = lightTheme.borderColor;
  },
};

export type ThemeType = 'dark' | 'light';

export const createTheme = (type: ThemeType): Theme => {
  switch (type) {
    case 'dark':
      return darkTheme;
    case 'light':
      return lightTheme;
    default:
      throw new Error(`Unknown theme type: ${type}`);
  }
};
