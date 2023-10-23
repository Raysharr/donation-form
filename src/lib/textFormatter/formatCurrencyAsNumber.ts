export const formatCurrencyAsNumber = (value: string) => {
  const parsedValue = Number(value.replace(/[^\d.]/g, ''));

  return parsedValue;
};
