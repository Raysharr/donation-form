import styled from 'styled-components';
import { Spacings } from '~/theme/@types/theme';

type StackDirection = 'row' | 'column';

const StackContainer = styled.div<{
  spacing: keyof Spacings;
  direction: StackDirection;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ theme, spacing }) => theme.spacings[spacing]}px;
`;

interface StackProps {
  spacing?: keyof Spacings;
  direction?: StackDirection;
  children: React.ReactNode;
  className?: string;
}

function Stack({
  spacing = 'xs',
  direction = 'row',
  className,
  children,
}: StackProps) {
  return (
    <StackContainer
      spacing={spacing}
      direction={direction}
      className={className}
    >
      {children}
    </StackContainer>
  );
}

export default Stack;
