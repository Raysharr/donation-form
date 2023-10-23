export const formatAsLocalizedNumber = (value: string) => {
  const parsedValue = parseFloat(value);

  return new Intl.NumberFormat('en-US').format(parsedValue);
};
