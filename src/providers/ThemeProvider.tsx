import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeType } from '../theme/@types/theme';
import GlobalStyles from '../theme/GlobalStyles';

interface ThemeProviderProps {
  theme: ThemeType;
  children: React.ReactNode;
}

function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}

export default ThemeProvider;
