import styled from 'styled-components';

const InputLabel = styled.label`
  font-family: ${({ theme }) => theme.fontFamily.WorkSans};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.midnightGrey};
  line-height: 18px;
`;

export default InputLabel;
