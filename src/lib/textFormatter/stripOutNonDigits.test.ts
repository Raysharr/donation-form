import { describe, expect, it } from 'vitest';
import { stripOutNonDigits } from '.';

describe('stripOutNonDigits', () => {
  it('should return an empty string when given an empty string', () => {
    const result = stripOutNonDigits('');

    expect(result).toEqual('');
  });

  it('should return the same string when given a string with only digits', () => {
    const result = stripOutNonDigits('123456');

    expect(result).toEqual('123456');
  });

  it('should remove all non-digit characters from a string containing digits and non-digits', () => {
    const result = stripOutNonDigits('a1b2c3d4');

    expect(result).toEqual('1234');
  });

  it('should return an empty string when given a string with only non-digits', () => {
    const result = stripOutNonDigits('abc');

    expect(result).toEqual('');
  });

  it('should return an empty string when given a string with only whitespace characters', () => {
    const result = stripOutNonDigits('   ');

    expect(result).toEqual('');
  });

  it('should return an empty string when given a string with only special characters', () => {
    const result = stripOutNonDigits('!@#$%^&*()');

    expect(result).toEqual('');
  });
});
