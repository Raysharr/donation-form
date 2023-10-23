import { describe, expect, it } from 'vitest';
import { formatAsCurrency } from '.';

describe('formatAsCurrency', () => {
  it('should format a string of numbers as a currency with two decimal places', () => {
    const result = formatAsCurrency('123456.78');

    expect(result).toBe('123,456.78');
  });

  it('should format a string of numbers as a currency without decimal places', () => {
    const result = formatAsCurrency('123456');

    expect(result).toBe('123,456');
  });

  it('should format a string of numbers with decimal places greater than two', () => {
    const result = formatAsCurrency('123456.789');

    expect(result).toBe('123,456.78');
  });

  it('should format a string of numbers with a decimal point as the first character', () => {
    const result = formatAsCurrency('.123456');

    expect(result).toBe('0.12');
  });
});
