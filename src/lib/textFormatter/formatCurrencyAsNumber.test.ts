import { describe, expect, it } from 'vitest';
import { formatCurrencyAsNumber } from '.';

describe('formatCurrencyAsNumber', () => {
  it('should return a number when given a string with symbol', () => {
    const result = formatCurrencyAsNumber('$123.45');
    expect(result).toBe('123.45');
  });

  it('should return a number when given a string with comma as thousand separator', () => {
    const result = formatCurrencyAsNumber('1,234.56');
    expect(result).toBe('1234.56');
  });
});
