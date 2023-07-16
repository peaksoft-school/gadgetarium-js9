import dayjs from 'dayjs'

export const calendarAssistent = (
   month = dayjs().month(),
   year = dayjs().year()
) => {
   const firstDateOfMonth = dayjs().year(year).month(month).date(1)
   const startDayOfWeek = firstDateOfMonth.day()

   const arrayOfDate = []

   const correction = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1

   for (let i = 0; i < correction; i += 1) {
      const date = firstDateOfMonth.subtract(correction - i, 'day')
      arrayOfDate.push({ currentMonth: false, date })
   }

   const lastDateOfMonth = firstDateOfMonth.endOf('month')
   for (let i = 1; i <= lastDateOfMonth.date(); i += 1) {
      const date = firstDateOfMonth.date(i)
      arrayOfDate.push({
         date,
         currentMonth: true,
         today:
            date.toDate().toDateString() === dayjs().toDate().toDateString(),
      })
   }

   const remaining = 42 - arrayOfDate.length
   for (let i = 1; i <= remaining; i += 1) {
      const date = lastDateOfMonth.add(i, 'day')
      arrayOfDate.push({ date, currentMonth: false })
   }
   return arrayOfDate
}
