interface ICalculateDifferenceBetweenDates {
  years: number
  months: number
}

const calculateDifferenceBetweenDates = (
  date1: Date,
  date2: Date
): ICalculateDifferenceBetweenDates => {
  const diffInMili = date2.getTime() - date1.getTime()
  const diffInYears = diffInMili / (1000 * 60 * 60 * 24 * 365)
  const years = Math.floor(diffInYears)
  const months = Math.floor((diffInYears - years) * 12)

  return {
    years,
    months,
  }
}

export default calculateDifferenceBetweenDates
