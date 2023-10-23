import styled from 'styled-components';

const InputWrapper = styled.div<{ $isFocused: boolean }>`
  border-radius: 4px;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.blueGrey50};
  border-color: ${({ theme, $isFocused }) =>
    $isFocused ? theme.colors.midnightPurple : theme.colors.blueGrey50};
`;

export default InputWrapper;
