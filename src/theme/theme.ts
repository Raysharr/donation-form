import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',

    white: '#fff',
    black: '#000',

    background: '#F4F8FA',

    error: '#FF6B6B',
    warning: '#FFC069',
    info: '#F4F8FA',
    success: '#52C41A',

    salmon: '#FFDBCB',

    midnightGrey: '#4D6475',
    blueGrey50: '#E9EEF2',
    blueGrey900: '#1E2A32',
    purpleGrey: '#595D7B',
    midnightPurple: '#423C66',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  fontWeights: {
    thin: 400,
    light: 500,
    regular: 600,
    bold: 700,
  },
  fontFamily: {
    WorkSans: 'Work Sans',
    Rubik: 'Rubik',
    Inter: 'Inter',
  },
  spacings: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  breakpoints: {
    mobile: 600,
  },
};

export { theme };
