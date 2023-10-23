import styled from 'styled-components';
import { Colors, FontWeights, FontFamily } from '~/theme/@types/theme';

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  body2: 'p',
  body3: 'span',
};

const TypographyStyled = styled.div<{
  $color: keyof Colors;
  $weight?: keyof FontWeights;
  $family?: keyof FontFamily;
}>`
  color: ${({ theme, $color }) => theme.colors[$color || 'midnightGrey']};
  font-family: ${({ theme, $family }) =>
    theme.fontFamily[$family || 'WorkSans']};

  &.h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
    font-weight: ${({ theme, $weight }) =>
      theme.fontWeights[$weight || 'regular']};
    line-height: 120%;
  }

  &.h2 {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    font-weight: ${({ theme, $weight }) =>
      theme.fontWeights[$weight || 'light']};
  }

  &.h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg}px;
    font-weight: ${({ theme, $weight }) =>
      theme.fontWeights[$weight || 'light']};
  }

  &.body1 {
    font-size: ${({ theme }) => theme.fontSizes.md}px;
    font-weight: ${({ theme, $weight }) =>
      theme.fontWeights[$weight || 'thin']};
  }

  &.body2 {
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    font-weight: ${({ theme, $weight }) =>
      theme.fontWeights[$weight || 'thin']};
  }

  &.body3 {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    font-weight: ${({ theme, $weight }) =>
      theme.fontWeights[$weight || 'thin']};
  }
`;

interface TypographyProps {
  color?: keyof Colors;
  weight?: keyof FontWeights;
  variant?: keyof typeof variantMapping;
  family?: keyof FontFamily;
  className?: string;
  children: React.ReactNode;
}

function Typography({
  variant = 'body1',
  color = 'midnightGrey',
  family = 'WorkSans',
  weight,
  className,
  children,
}: TypographyProps) {
  return (
    <TypographyStyled
      as={variantMapping[variant]}
      className={`${variant} ${className}`}
      $color={color}
      $weight={weight}
      $family={family}
    >
      {children}
    </TypographyStyled>
  );
}

export default Typography;
