import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fontFamily.WorkSans}, sans-serif;
    color: ${({ theme }) => theme.colors.purpleGrey};
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export default GlobalStyles;
