import { keyframes, styled } from '@mui/material'
import { useState } from 'react'

const array = [
   {
      id: 1,
      name: 'Новинки',
   },
   {
      id: 2,
      name: 'По акции',
   },
   {
      id: 3,
      name: 'Рекомендуемые',
   },
   {
      id: 4,
      name: 'По увеличению цены',
   },
   {
      id: 5,
      name: 'По уменьшению цены',
   },
]

const saleArray = [
   {
      id: 1,
      name: 'Все акции',
   },
   {
      id: 2,
      name: 'До 50%',
   },
   {
      id: 3,
      name: 'Свыше 50%',
   },
]

export const Sort = ({ openSort, sort, getSortType, onClose }) => {
   const [saleArrayOpen, setSaleArrayOpen] = useState(false)

   const toggleArrayOpen = (value, isSortInArray) => {
      setSaleArrayOpen(!saleArrayOpen)
      if (!isSortInArray) {
         getSortType(value)
      }
   }

   const getSortTypeValue = (value) => {
      getSortType(value)
      setSaleArrayOpen(false)
      onClose()
   }

   return (
      <PositionContainer
         open={saleArrayOpen}
         className={openSort ? 'open' : 'close'}
      >
         {saleArrayOpen && (
            <SaleContainer className={saleArrayOpen ? 'open' : 'close'}>
               {saleArray.map((el) => {
                  const isCurrentType = sort === el.name
                  return (
                     <Option
                        onClick={() => getSortTypeValue(el.name)}
                        highlighted={isCurrentType && 'true'}
                        key={el.id}
                     >
                        {el.name}
                     </Option>
                  )
               })}
            </SaleContainer>
         )}
         <Container>
            {array.map((el) => {
               const isSortInArray = saleArray.some((el) => el.name === sort)
               const isCurrentType = sort === el.name
               if (el.name === 'По акции') {
                  return (
                     <Option
                        clicked={saleArrayOpen && 'true'}
                        highlighted={isSortInArray && 'true'}
                        onClick={() => toggleArrayOpen(el.name, isSortInArray)}
                        key={el.id}
                     >
                        {el.name}
                     </Option>
                  )
               }
               return (
                  <Option
                     onClick={() => getSortTypeValue(el.name)}
                     highlighted={isCurrentType && 'true'}
                     key={el.id}
                  >
                     {el.name}
                  </Option>
               )
            })}
         </Container>
      </PositionContainer>
   )
}
const openAnimation = keyframes`
    0% {
       opacity: 0;
       transform: translateY(-8px) scale(0.95);
    }

    50% {
       opacity: 1;
       transform: translateY(4px) scale(1.05);
    }

    100% {
       opacity: 1;
       transform: translateY(0) scale(1);
    }
 `

const closeAnimation = keyframes`
    0% {
       opacity: 1;
       transform: translateY(0) scale(1);
    }

    50% {
       opacity: 1;
       transform: translateY(4px) scale(1.05);
    }

    100% {
       opacity: 0;
       transform: translateY(-8px) scale(0.95);
    }
 `

const Container = styled('div')`
   width: 192px;
   padding: 20px;
   background: white;
   filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.15));
   display: flex;
   flex-direction: column;
   gap: 16px;
   border-radius: 4px;
`
const PositionContainer = styled('div')`
   position: absolute;
   top: 18px;
   /* left: -120px; */
   left: ${(props) => props.open && '-121px'};
   display: flex;
   align-items: center;
   &.open {
      animation: ${openAnimation} 0.4s ease-in forwards;
   }

   &.close {
      animation: ${closeAnimation} 0.4s ease-in forwards;
   }
`
const SaleContainer = styled('div')`
   padding: 20px;
   margin-top: 5px;

   width: 121px;
   background: white;
   filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.15));
   display: flex;
   flex-direction: column;
   gap: 16px;
   border-radius: 4px;
   &.open {
      animation: ${openAnimation} 0.4s ease-in forwards;
   }
   &.close {
      animation: ${closeAnimation} 0.4s ease-in forwards;
   }
`
const Option = styled('p')`
   color: ${(props) =>
      props.clicked === 'true' || props.highlighted === 'true'
         ? '#cb11ab'
         : '#292929'};
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   margin: 0;
   cursor: pointer;
   :hover {
      color: #cb11ab;
   }
`
