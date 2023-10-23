const getMonthNameFromDate = (months: string[], date: Date) => {
  return months[date.getMonth()];
};

export default getMonthNameFromDate;
