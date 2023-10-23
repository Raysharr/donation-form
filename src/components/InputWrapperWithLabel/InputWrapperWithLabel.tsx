import styled from 'styled-components';
import InputLabel from '../InputLabel';
import InputWrapper from '../InputWrapper';
import Stack from '../Stack';

const InputWrapperWithLabelStack = styled(Stack)`
  gap: 6px;
  flex: 1;
`;

interface InputWrapperInputFieldProps {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  isFocused?: boolean;
}

function InputWrapperWithLabel({
  label,
  children,
  className,
  isFocused = false,
}: InputWrapperInputFieldProps) {
  return (
    <InputWrapperWithLabelStack direction={'column'}>
      {label && <InputLabel>{label}</InputLabel>}

      <InputWrapper className={className} $isFocused={isFocused}>
        {children}
      </InputWrapper>
    </InputWrapperWithLabelStack>
  );
}

export default InputWrapperWithLabel;
