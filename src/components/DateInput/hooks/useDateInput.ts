import { useState } from 'react';
import months from '~/constants/months';
import {
  getFullYearFromDate,
  getMonthNameFromDate,
  getNextMonthFromDate,
} from '~/lib/date';

function useDateInput() {
  const getNextMonthFromToday = () => {
    const currentDate = new Date();

    return getNextMonthFromDate(currentDate);
  };

  const initialMonth = getNextMonthFromToday();

  const [currentDate, setCurrentDate] = useState(initialMonth);

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);

    newDate.setMonth(currentDate.getMonth() + 1);

    setCurrentDate(newDate);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);

    newDate.setMonth(currentDate.getMonth() - 1);

    if (
      newDate.getFullYear() > initialMonth.getFullYear() ||
      (newDate.getFullYear() === initialMonth.getFullYear() &&
        newDate.getMonth() >= initialMonth.getMonth())
    ) {
      setCurrentDate(newDate);
    }
  };

  const getMonth = () => {
    return getMonthNameFromDate(months, currentDate);
  };

  const getYear = () => {
    return getFullYearFromDate(currentDate);
  };

  return {
    currentDate,
    handleNextMonth,
    handlePrevMonth,
    getMonth,
    getYear,
  };
}

export default useDateInput;
