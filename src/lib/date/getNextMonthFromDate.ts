const getNextMonthFromDate = (date: Date) => {
  const copyOfDate = date;

  copyOfDate.setMonth(date.getMonth() + 1); // 1 month ahead

  return copyOfDate;
};

export default getNextMonthFromDate;
