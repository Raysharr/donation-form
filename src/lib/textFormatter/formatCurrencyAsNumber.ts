export const formatCurrencyAsNumber = (value: string) => {
  const parsedValue = value.replace(/[^\d.]/g, '');

  return parsedValue;
};
