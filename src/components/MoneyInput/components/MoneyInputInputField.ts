import styled from 'styled-components';

const MoneyInputInputField = styled.input<{ $decreasedPaddingLeft: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.Rubik};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.purpleGrey};
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.spacings.lg}px;
  padding-left: ${({ theme, $decreasedPaddingLeft }) =>
    $decreasedPaddingLeft ? 0 : theme.spacings.lg}px;
  width: 100%;

  &::placeholder {
    color: #00000033;
  }
`;

export default MoneyInputInputField;
