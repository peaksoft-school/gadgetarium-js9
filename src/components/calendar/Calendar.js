import { useState } from 'react'
import { styled } from '@mui/material/styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import dayjs from 'dayjs'
import { calendarAssistent } from './CalendarAssistent'
import './style.css'

function cn(...classes) {
   return classes.filter(Boolean).join(' ')
}

function Calendar() {
   const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
   ]

   const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
   const currentDate = dayjs()
   const [today, setToday] = useState(currentDate)

   return (
      <Container>
         <Block1>
            <MuiRightIcon
               onClick={() => {
                  setToday(today.month(today.month() - 1))
               }}
            />
            <HeaderData>
               <h2>{months[today.month()]}</h2>
               <h2>{today.year()}</h2>
            </HeaderData>
            <MuiLeftIcon
               onClick={() => {
                  setToday(today.month(today.month() + 1))
               }}
            />
         </Block1>

         <Block2>
            <Days>
               {days.map((day) => {
                  return (
                     <div>
                        <h4>{day}</h4>
                     </div>
                  )
               })}
            </Days>
            <Date>
               {calendarAssistent(today.month(), today.year()).map(
                  ({ date, currentMonth, today }) => {
                     return (
                        <div>
                           <p
                              className={cn(
                                 currentMonth ? '' : 'text-gray-400',
                                 today ? 'bg-pink-600 text-white' : '',
                                 'h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white cursor-pointer'
                              )}
                           >
                              {date.date()}
                           </p>
                        </div>
                     )
                  }
               )}
            </Date>
         </Block2>
      </Container>
   )
}

export default Calendar

const Container = styled('div')`
   margin-top: 100px;
   margin-left: 550px;
   width: 22rem;
   height: 25rem;
   padding: 20px;
   background-color: '#F8F8FF';
   border-radius: 0.25rem;
   box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
`

const Block1 = styled('div')`
   display: flex;
   width: 310px;
   justify-content: space-between;
   padding: 10px;
`
const HeaderData = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 100px;
   h2 {
      color: rgba(41, 41, 41, 0.8);
      font-size: 1.2rem;
   }
`
const Block2 = styled('div')`
   margin-top: 0.88rem;
`
const Days = styled('div')`
   color: rgba(41, 41, 41, 0.8);
   width: 100%;
   display: grid;
   grid-template-columns: repeat(7, 1fr);
   div {
      margin-left: 12px;
   }
`

const Date = styled('div')`
   margin-top: 10px;
   width: 100%;
   display: grid;
   grid-template-columns: repeat(7, 1fr);
`

const MuiRightIcon = styled(ArrowBackIosIcon)`
   width: 1.05rem;
   height: 1.05rem;
   color: rgba(41, 41, 41, 0.8);
   margin-top: 6px;
   margin-left: 4px;
   cursor: pointer;
`
const MuiLeftIcon = styled(ArrowForwardIosIcon)`
   width: 1.05rem;
   height: 1.05rem;
   color: rgba(41, 41, 41, 0.8);
   margin-top: 6px;
   cursor: pointer;
`
