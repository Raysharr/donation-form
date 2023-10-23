import styled from 'styled-components';
import { Severity } from './@types/Severity';

const AlertBox = styled.div<{ $severity: Severity }>`
  background-color: ${({ theme, $severity }) => theme.colors[$severity]};
  padding: ${({ theme }) => theme.spacings.xl}px
    ${({ theme }) => theme.spacings.lg}px;
  border-radius: 5px; // TODO: move to theme
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.Inter};
  line-height: 17px;
`;

interface AlertProps {
  severity: Severity;
  children: React.ReactNode;
}

function Alert({ severity, children }: AlertProps) {
  return <AlertBox $severity={severity}>{children}</AlertBox>;
}

export default Alert;
