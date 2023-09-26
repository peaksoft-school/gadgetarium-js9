import styled from '@emotion/styled'
import React from 'react'
import { ReactComponent as Track } from '../../../../assets/icons/truck.svg'
import { ReactComponent as Wallet } from '../../../../assets/icons/wallet.svg'
import { ReactComponent as ByCard } from '../../../../assets/icons/paymentByCard.svg'
import { ReactComponent as Card } from '../../../../assets/icons/hand-card-icon.svg'
import { ReactComponent as Paint } from '../../../../assets/icons/cashUponReceipt.svg'

export const Delivery = () => {
   return (
      <Container>
         <Deliver>Доставка</Deliver>
         <p>
            Город доставки <strong>Бишкек</strong>
         </p>
         <Block>
            <WalletTruckContainer>
               <TruckCurrencyContainer>
                  <BlockTrack2>
                     <Track />
                     <DelieveryStoreContainer>
                        <strong>Самовывоз из магазина</strong>
                        <p>Забрать в течение 14 дней</p>
                     </DelieveryStoreContainer>
                  </BlockTrack2>
                  <b>
                     0 <Сurrency>c</Сurrency>
                  </b>
               </TruckCurrencyContainer>
               <WalletBlock>
                  <Wallet />
                  <p>Предоплата не требуется</p>
               </WalletBlock>
            </WalletTruckContainer>
            <WalletTruckContainer>
               <TruckCurrencyContainer>
                  <BlockTrack2>
                     <Track />
                     <DelieveryStoreContainer>
                        <strong>Самовывоз из магазина</strong>
                        <p>Забрать в течение 14 дней</p>
                     </DelieveryStoreContainer>
                  </BlockTrack2>
                  <b>
                     0 <Сurrency>c</Сurrency>
                  </b>
               </TruckCurrencyContainer>
               <WalletBlock>
                  <Wallet />
                  <p>Предоплата не требуется</p>
               </WalletBlock>
            </WalletTruckContainer>
            <WalletTruckContainer>
               <TruckCurrencyContainer style={{ width: '415px' }}>
                  <BlockTrack2>
                     <Track />
                     <DelieveryStoreContainer>
                        <strong>Доставка</strong>
                        <p>Бесплатная доставка при покупках свыше — 10 000с.</p>
                     </DelieveryStoreContainer>
                  </BlockTrack2>
                  <b style={{ width: '85px', height: '27px' }}>
                     от 200 <Сurrency>c</Сurrency>
                  </b>
               </TruckCurrencyContainer>
               <WalletBlock>
                  <Wallet />
                  <p>Предоплата не требуется</p>
               </WalletBlock>
            </WalletTruckContainer>
         </Block>
         <PaymentMethod>Способы оплаты</PaymentMethod>
         <Block3>
            <ByCardBlock>
               <ByCard />
               <p>Оплата картой онлайн</p>
            </ByCardBlock>
            <PaintBlock>
               <Paint />
               <p>Наличными при получении</p>
            </PaintBlock>
            <CardBlock>
               <Card />
               <p>Картой при получении</p>
            </CardBlock>
         </Block3>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 6.06rem;
`
const WalletTruckContainer = styled('div')`
   display: flex;
   height: 106px;
   flex-direction: column;
   justify-content: space-between;
`
const TruckCurrencyContainer = styled('div')`
   display: flex;
   width: 362px;
   justify-content: space-between;
   color: #292929;
   font-family: Inter;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
   b {
      color: #1a1a25;
      text-align: right;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
   }
`
const Deliver = styled('h3')`
   font-family: Ubuntu;
   font-weight: 500;
   font-size: 1.875rem;
   margin-top: 6.06rem;
`
const DelieveryStoreContainer = styled('div')`
   width: 273px;
   p {
      margin: 0;
   }
`

const Block = styled('div')`
   display: flex;
   margin-top: 1.94rem;
   justify-content: space-between;
`

const BlockTrack2 = styled('div')`
   display: flex;
   align-items: flex-start;
   gap: 12px;
   svg {
      margin-top: 5px;
   }
`

const Сurrency = styled('span')`
   border-bottom: 2px solid black;
`
const WalletBlock = styled('div')`
   display: flex;
   align-items: center;
   gap: 16px;
   p {
      margin: 0;
   }
`
const Block3 = styled('div')`
   &:not(:first-child) {
      display: flex;
      width: 48.75rem;
      justify-content: space-between;
      align-items: center;
   }
`
const ByCardBlock = styled('div')`
   display: flex;
   align-items: center;
   p {
      width: 8rem;
   }
`
const PaintBlock = styled('div')`
   display: flex;
   align-items: center;
   p {
      width: 8rem;
   }
`
const CardBlock = styled('div')`
   display: flex;
   align-items: center;
   p {
      width: 5.4rem;
   }
`
const PaymentMethod = styled('h3')`
   margin-top: 5.06rem;
`
