import { describe, expect, it } from 'vitest';
import { getMonthNameFromDate } from '.';

describe('getMonthNameFromDate', () => {
  it('should return the correct month name when a valid date is provided', () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date('2022-01-01');
    const result = getMonthNameFromDate(months, date);

    expect(result).toBe('January');
  });

  it('should work correctly for all months of the year', () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const dates = [
      new Date('2022-01-01'),
      new Date('2022-02-01'),
      new Date('2022-03-01'),
      new Date('2022-04-01'),
      new Date('2022-05-01'),
      new Date('2022-06-01'),
      new Date('2022-07-01'),
      new Date('2022-08-01'),
      new Date('2022-09-01'),
      new Date('2022-10-01'),
      new Date('2022-11-01'),
      new Date('2022-12-01'),
    ];
    const results = dates.map((date) => getMonthNameFromDate(months, date));

    expect(results).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  it('should return the correct month name for a leap year date', () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date('2020-02-29');
    const result = getMonthNameFromDate(months, date);

    expect(result).toBe('February');
  });
});
