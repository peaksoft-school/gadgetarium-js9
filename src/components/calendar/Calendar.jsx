

export const Calendar = (
   month = dayjs().monthjs(),
   year = dayjs().yearjs()
) => {
   const firstDateOfMonth = dayjs().year(year).month(month).startOf('month')
   const lastDateOfMonth = dayjs().year(year).month(month).endOf('month')
   return [firstDateOfMonth, lastDateOfMonth]
}
