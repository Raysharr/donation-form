import { describe, it, expect } from 'vitest';
import getFullYearFromDate from './getFullYearFromDate';

describe('getFullYearFromDate', () => {
  it('should return the full year when a valid date object is provided', () => {
    const date = new Date('2022-01-01');
    const result = getFullYearFromDate(date);

    expect(result).toBe(2022);
  });

  it('should return the full year for a date in the past', () => {
    const date = new Date('2000-01-01');
    const result = getFullYearFromDate(date);

    expect(result).toBe(2000);
  });

  it('should return the full year for a date in the present', () => {
    const date = new Date();
    const result = getFullYearFromDate(date);

    expect(result).toBe(new Date().getFullYear());
  });

  it('should return the full year for a date in the future', () => {
    const date = new Date('2030-01-01');
    const result = getFullYearFromDate(date);

    expect(result).toBe(2030);
  });

  it('should return the full year for a leap year date', () => {
    const date = new Date('2020-02-29');
    const result = getFullYearFromDate(date);

    expect(result).toBe(2020);
  });

  it('should return NaN if the input date is invalid', () => {
    const date = new Date('invalid-date');
    const result = getFullYearFromDate(date);

    expect(result).toBeNaN();
  });

  it('should return the correct year for dates on the edge of the Date object range', () => {
    const date = new Date('0000-01-01');
    const result = getFullYearFromDate(date);

    expect(result).toBe(0);
  });
});
