import { styled } from '@mui/material'
import { ReactComponent as Truck } from '../../../assets/icons/truck.svg'
import { ReactComponent as Wallet } from '../../../assets/icons/wallet.svg'

const infoDelivery = [
   {
      id: '1',
      title: 'Самовывоз co склада',
      text: 'Забрать в течение 14 дней',
   },
   {
      id: '2',
      title: 'Самовывоз из магазина',
      text: 'Забрать в течение 14 дней',
   },
   {
      id: '3',
      title: 'Доставка',
      text: 'По городу 200coм, по регионам Бесплатная доставка при покупках свыше — 10 000с.',
   },
]

export const DeliveryMethods = () => {
   return (
      <Container>
         <p>
            <span className="text">Город доставки</span>{' '}
            <span className="title">Бишкек</span>
         </p>
         <InfoDeliveryContainer>
            {infoDelivery.map((item) => (
               <Box key={item.id}>
                  <BoxDelivery>
                     <div>
                        <StyledTruck />
                     </div>
                     <BoxDeliveryText>
                        <p className="title">{item.title}</p>
                        <p className="text">{item.text}</p>
                     </BoxDeliveryText>
                  </BoxDelivery>
                  <BoxPayment>
                     <div>
                        <Wallet />
                     </div>
                     <p className="text">Предоплата не требуется</p>
                  </BoxPayment>
               </Box>
            ))}
         </InfoDeliveryContainer>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.88rem;
`

const InfoDeliveryContainer = styled('div')`
   display: flex;
   gap: 6.88rem;
`

const Box = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.75rem;
`
const BoxDelivery = styled('div')`
   display: flex;
   gap: 0.75rem;
`

const BoxDeliveryText = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.3125rem;

   .title {
      width: 15.5625rem;
   }

   .text {
      width: 19.4375rem;
   }

   p {
      margin: 0;
      padding: 0;
   }
`

const BoxPayment = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   div {
      width: 1.625rem;
   }
`
const StyledTruck = styled(Truck)`
   margin-top: 0.25rem;
`
