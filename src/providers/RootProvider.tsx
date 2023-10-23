import { theme } from '../theme/theme';
import ThemeProvider from './ThemeProvider';

interface RootProviderProps {
  children: React.ReactNode;
}

function RootProvider({ children }: RootProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default RootProvider;
