import styled from 'styled-components';
import Stack from '../Stack';
import Typography from '../Typography/Typography';
import InputWrapperWithLabel from '../InputWrapperWithLabel/InputWrapperWithLabel';
import IconButton from '../IconButton';
import useDateInput from './hooks/useDateInput';
import { useEffect } from 'react';

const DateInputRowStack = styled(Stack)`
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const DateInputInputWrapper = styled(InputWrapperWithLabel)`
  display: flex;
  padding: ${({ theme }) => theme.spacings.md}px;
`;

const DateInputDateStack = styled(Stack)`
  align-items: center;
`;

const DateInputMonth = styled(Typography)`
  width: 144px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface DateInputProps {
  label?: string;
  onChange?: (date: Date) => void;
}

function DateInput({ label, onChange }: DateInputProps) {
  const { currentDate, getMonth, getYear, handleNextMonth, handlePrevMonth } =
    useDateInput();

  useEffect(() => {
    if (!onChange) return;

    onChange(currentDate);
  }, [currentDate, onChange]);

  return (
    <DateInputInputWrapper label={label}>
      <DateInputRowStack direction={'row'} spacing={'lg'}>
        <IconButton onClick={handlePrevMonth} name={'chevronLeft'} />

        <DateInputDateStack direction={'column'} spacing={'xs'}>
          <DateInputMonth variant={'body1'} weight={'light'} family={'Rubik'}>
            {getMonth()}
          </DateInputMonth>

          <Typography variant={'body3'}>{getYear()}</Typography>
        </DateInputDateStack>

        <IconButton onClick={handleNextMonth} name={'chevronRight'} />
      </DateInputRowStack>
    </DateInputInputWrapper>
  );
}

export default DateInput;
