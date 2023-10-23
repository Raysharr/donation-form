import { describe, expect, it } from 'vitest';
import { getNextMonthFromDate } from '.';

describe('getNextMonthFromDate', () => {
  it('should return a Date object with the month incremented by 1', () => {
    const date = new Date(2022, 0, 15);
    const result = getNextMonthFromDate(date);

    expect(result.getMonth()).toBe(1);
  });

  it('should work correctly for dates at the end of the month', () => {
    const date = new Date(2022, 1, 28);
    const result = getNextMonthFromDate(date);

    expect(result.getMonth()).toBe(2);
  });

  it('should work correctly for dates at the end of the year', () => {
    const date = new Date(2022, 11, 31);
    const result = getNextMonthFromDate(date);

    expect(result.getMonth()).toBe(0);
    expect(result.getFullYear()).toBe(2023);
  });

  it('should return a Date object with the month incremented by 1 when given February 28th on a non-leap year', () => {
    const date = new Date(2021, 1, 28);
    const result = getNextMonthFromDate(date);

    expect(result.getMonth()).toBe(2);
  });

  it('should return a Date object with the month incremented by 1 when given February 29th on a leap year', () => {
    const date = new Date(2020, 1, 29);
    const result = getNextMonthFromDate(date);

    expect(result.getMonth()).toBe(2);
  });
});
