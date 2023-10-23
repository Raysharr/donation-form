import { describe, expect, it } from 'vitest';
import getMonthDifference from './getMonthDifference';

describe('getMonthDifference', () => {
  it('should return the correct number of months between two dates', () => {
    const startDate = new Date(2021, 0, 1);
    const endDate = new Date(2021, 5, 1);
    const result = getMonthDifference(startDate, endDate);

    expect(result).toBe(5);
  });

  it('should return 0 if the start and end dates are in the same month and year', () => {
    const startDate = new Date(2021, 0, 1);
    const endDate = new Date(2021, 0, 15);
    const result = getMonthDifference(startDate, endDate);

    expect(result).toBe(0);
  });

  it('should work correctly for dates in different years', () => {
    const startDate = new Date(2020, 0, 1);
    const endDate = new Date(2021, 5, 1);
    const result = getMonthDifference(startDate, endDate);

    expect(result).toBe(17);
  });

  it('should return 1 if the start date is the last day of the month and the end date is the first day of the next month', () => {
    const startDate = new Date(2021, 0, 31);
    const endDate = new Date(2021, 1, 1);
    const result = getMonthDifference(startDate, endDate);

    expect(result).toBe(1);
  });

  it('should return 11 if the start date is the first day of the month and the end date is the last day of the same year', () => {
    const startDate = new Date(2021, 0, 1);
    const endDate = new Date(2021, 11, 31);
    const result = getMonthDifference(startDate, endDate);

    expect(result).toBe(11);
  });

  it('should return the correct number of months between two dates when the dates have the same month and year but different days', () => {
    const startDate = new Date(2021, 0, 1);
    const endDate = new Date(2021, 5, 1);
    const result = getMonthDifference(startDate, endDate);

    expect(result).toBe(5);
  });
});
