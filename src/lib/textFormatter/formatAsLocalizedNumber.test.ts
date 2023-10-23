import { describe, expect, it } from 'vitest';
import { formatAsLocalizedNumber } from './formatAsLocalizedNumber';

describe('formatAsLocalizedNumber', () => {
  it('should return a formatted number string when given a valid integer string', () => {
    const value = '12345';
    const result = formatAsLocalizedNumber(value);

    expect(result).toBe('12,345');
  });

  it('should return a formatted number string when given a valid negative integer string', () => {
    const value = '-54321';
    const result = formatAsLocalizedNumber(value);

    expect(result).toBe('-54,321');
  });
});
