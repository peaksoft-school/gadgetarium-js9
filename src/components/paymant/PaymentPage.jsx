// import React from 'react'
// import { styled } from '@mui/material'
// import { InformationOrder } from './InformationOrder'

// const productInfo = [
//    {
//       title: 'Наименование:',
//       modelName: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
//    },
//    {
//       title: 'Кол-во товара:',
//       modelName: '1шт',
//    },
//    {
//       title: 'Общая сумма заказа:',
//       modelName: '60 000 с',
//    },
//    {
//       title: 'Скидка:',
//       modelName: '15%',
//    },
//    {
//       title: 'Сумма скидки:',
//       modelName: '9 000 с',
//    },
// ]

// export const PaymentPage = () => {
//    return (
//       <Container>
//          <h2>Оплата заказа 000000-455247</h2>
//          <Info>
//             <Kakashka>
//                <Block>
//                   <div>
//                      {productInfo.map((el, index) => (
//                         <p style={{ marginTop: index === 0 ? '0' : 'auto' }}>
//                            <b>{el.title}</b>
//                         </p>
//                      ))}
//                   </div>
//                   <div>
//                      {productInfo.map((el, index) => (
//                         <p style={{ marginTop: index === 0 ? '0' : 'auto' }}>
//                            {el.modelName}
//                         </p>
//                      ))}
//                   </div>
//                </Block>
//                <Total>
//                   <p>
//                      <b>Итого:</b> 51 000сом
//                   </p>
//                </Total>
//             </Kakashka>
//             <InformationOrder />
//          </Info>
//       </Container>
//    )
// }
// const Container = styled('div')`
//    padding: 0 6.25rem 0;
//    display: flex;
//    flex-direction: column;
//    margin-top: 6.88rem;
//    h2 {
//       padding-bottom: 1.25rem;
//       border-bottom: 1px solid black;
//    }
// `
// const Info = styled('div')`
//    display: flex;
//    justify-content: space-between;
//    margin-top: 2.5rem;
// `
// const Block = styled('div')`
//    display: flex;
//    justify-content: flex-start;
//    gap: 2.88rem;
//    border-bottom: 1px solid black;
//    width: 40rem;
//    div {
//       height: 200px;
//    }
// `
// const Kakashka = styled('div')`
//    display: flex;
//    flex-direction: column;
//    align-items: flex-end;
// `
// const Total = styled('div')`
//    p {
//       margin-top: 0.625rem;
//    }
// `

import React from 'react'
import { styled } from '@mui/material'
import { InformationOrder } from './InformationOrder'

const productInfo = [
   {
      title: 'Наименование:',
      modelName: 'Samsung Galaxy S21 128gb синий 9(MLP3RU)',
   },
   {
      title: 'Кол-во товара:',
      modelName: '1шт',
   },
   {
      title: 'Общая сумма заказа:',
      modelName: '60 000 с',
   },
   {
      title: 'Скидка:',
      modelName: '15%',
   },
   {
      title: 'Сумма скидки:',
      modelName: '9 000 с',
   },
]

export const PaymentPage = () => {
   return (
      <Container>
         <h2>Оплата заказа 000000-455247</h2>
         <Info>
            <Kakashka>
               <Block>
                  <div>
                     {productInfo.map((el, index) => (
                        <p style={{ marginTop: index === 0 ? '0' : 'auto' }}>
                           <b>{el.title}</b>
                        </p>
                     ))}
                  </div>
                  <div>
                     {productInfo.map((el, index) => (
                        <p style={{ marginTop: index === 0 ? '0' : 'auto' }}>
                           {el.modelName}
                        </p>
                     ))}
                  </div>
               </Block>
               <Total>
                  <p>
                     <b>Итого:</b> 51 000сом
                  </p>
               </Total>
            </Kakashka>
            <InformationOrder />
         </Info>
      </Container>
   )
}
const Container = styled('div')`
   padding: 0 6.25rem 0;
   display: flex;
   flex-direction: column;
   margin-top: 6.88rem;
   h2 {
      padding-bottom: 1.25rem;
      border-bottom: 1px solid black;
   }
`
const Info = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 2.5rem;
`
const Block = styled('div')`
   display: flex;
   justify-content: flex-start;
   gap: 2.88rem;
   border-bottom: 1px solid black;
   width: 40rem;
   div {
      height: 200px;
   }
`
const Kakashka = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
`
const Total = styled('div')`
   p {
      margin-top: 0.625rem;
   }
`
