import { useEffect, useRef, useState } from 'react';
import { formatAsCurrency, formatCurrencyAsNumber } from '~/lib/textFormatter';
import Stack from '~/components/Stack';
import MoneyInputStartIconContainer from './components/MoneyInputStartIconContainer';
import MoneyInputInputField from './components/MoneyInputInputField';
import InputWrapperWithLabel from '../InputWrapperWithLabel/InputWrapperWithLabel';

interface MoneyInputProps {
  placeholder?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  startIcon?: React.ReactNode;
}

function MoneyInput({
  label,
  placeholder = '0.00',
  onChange,
  initialValue = '',
  startIcon,
}: MoneyInputProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const [displayValue, setDisplayValue] = useState(initialValue);

  const [caretPosition, setCaretPosition] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const parseOnChangeEventValue = (value: string) => {
    const firstChar = value[0];

    if (firstChar === '.') {
      return '';
    }

    return value;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;

    const startPosition = input.selectionStart ?? 0;

    const valueAsNumber = formatCurrencyAsNumber(input.value);

    const formattedValue = formatAsCurrency(valueAsNumber);

    setDisplayValue(formattedValue);

    setCaretPosition(
      startPosition + (formattedValue.length - input.value.length),
    );

    onChange?.(parseOnChangeEventValue(valueAsNumber));
  };

  useEffect(() => {
    inputRef.current?.setSelectionRange(caretPosition, caretPosition);
  }, [caretPosition]);

  return (
    <InputWrapperWithLabel isFocused={isInputFocused} label={label}>
      <Stack direction={'row'} spacing={'sm'}>
        {startIcon && (
          <MoneyInputStartIconContainer>
            {startIcon}
          </MoneyInputStartIconContainer>
        )}

        <MoneyInputInputField
          type="text"
          ref={inputRef}
          value={displayValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          $decreasedPaddingLeft={Boolean(startIcon)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
      </Stack>
    </InputWrapperWithLabel>
  );
}

export default MoneyInput;
