import { styled } from '@mui/material'
import { ReactComponent as PaymentByCard } from '../../../../assets/icons/paymentByCard.svg'
import { ReactComponent as CashUponReceipt } from '../../../../assets/icons/cashUponReceipt.svg'
import { ReactComponent as CardUponReceipt } from '../../../../assets/icons/cardUponReceipt.svg'

export const PaymentMethods = () => {
   return (
      <Container>
         <p className="title">Способы оплаты</p>

         <Box>
            <InfoBox>
               <PaymentByCard />
               <p className="text">Оплата картой онлайн</p>
            </InfoBox>
            <InfoBox>
               <CashUponReceipt />
               <p className="text">Наличными при получении</p>
            </InfoBox>
            <InfoBox>
               <CardUponReceipt />
               <p className="text">Картой при получении</p>
            </InfoBox>
         </Box>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 4.87rem;

   display: flex;
   flex-direction: column;
   gap: 1.88rem;

   p {
      margin: 0;
      padding: 0;
   }
   margin-bottom: 7.5rem;
`

const Box = styled('div')`
   display: flex;
   gap: 3.37rem;
`

const InfoBox = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.75rem;

   .text {
      width: 9.625rem;
   }
`
