export const stripOutNonDigits = (value: string) => {
  return value.replace(/\D/g, '');
};
