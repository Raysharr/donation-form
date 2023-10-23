export type Colors = {
  primary: string;
  secondary: string;

  error: string;
  warning: string;
  info: string;
  success: string;

  white: string;
  black: string;

  background: string;

  salmon: string;

  midnightGrey: string;
  blueGrey50: string;
  blueGrey900: string;
  purpleGrey: string;

  midnightPurple: string;
};

export type FontWeights = {
  thin: number;
  light: number;
  regular: number;
  bold: number;
};

export type FontFamily = {
  WorkSans: string;
  Rubik: string;
  Inter: string;
};

export type Spacings = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type Breakpoints = {
  mobile: number;
};

export type ThemeType = {
  colors: Colors;
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  fontWeights: FontWeights;
  fontFamily: FontFamily;
  spacings: Spacings;
  breakpoints: Breakpoints;
};
