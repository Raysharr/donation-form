import { formatAsLocalizedNumber, stripOutNonDigits } from '.';

export const formatAsCurrency = (value: string) => {
  if (value === '') return '';

  if (value.includes('.')) {
    const decimal_pos = value.indexOf('.');

    let left_side = stripOutNonDigits(value.substring(0, decimal_pos));

    if (decimal_pos === 0) {
      left_side = '0';
    } else {
      left_side = formatAsLocalizedNumber(left_side);
    }

    const right_side = stripOutNonDigits(
      value.substring(decimal_pos),
    ).substring(0, 2);

    return left_side + '.' + right_side;
  }

  return formatAsLocalizedNumber(stripOutNonDigits(value));
};
