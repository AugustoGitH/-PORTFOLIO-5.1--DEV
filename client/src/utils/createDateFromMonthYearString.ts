const createDateFromMonthYearString = (dataString: string): Date => {
  const [monthStr, yearStr] = dataString.split('/')
  const month = parseInt(String(Number(monthStr)), 10)
  const year = parseInt(yearStr, 10)

  return new Date(year, month, 1)
}

export default createDateFromMonthYearString
