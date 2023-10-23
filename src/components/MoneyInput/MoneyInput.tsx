import { ChangeEvent, useRef, useState } from 'react';
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

  const [displayValue, setDisplayValue] = useState(
    initialValue || formatAsCurrency(initialValue),
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const setDisplayValueInputCaretPosition = (
    inputRef: React.RefObject<HTMLInputElement>,
    originalDisplayValue: string,
    changedDisplayValue: string,
  ) => {
    const originalLen = originalDisplayValue.length;
    const updatedLen = changedDisplayValue.length;
    const caretCurrentStartPosition = inputRef.current?.selectionStart || 0;
    const caretNewPosition =
      updatedLen - originalLen + caretCurrentStartPosition;

    inputRef.current?.setSelectionRange(caretNewPosition, caretNewPosition);
  };

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setDisplayValue(value);

    // TODO: Remove magic number "2"
    onChange?.(formatCurrencyAsNumber(value).toFixed(2));
  };

  const handleInputOnKeyUp = () => {
    const formattedDisplayValue = formatAsCurrency(displayValue);

    setDisplayValue(formattedDisplayValue);

    setDisplayValueInputCaretPosition(
      inputRef,
      displayValue,
      formattedDisplayValue,
    );
  };

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
          onChange={handleInputOnChange}
          onKeyUp={handleInputOnKeyUp}
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
