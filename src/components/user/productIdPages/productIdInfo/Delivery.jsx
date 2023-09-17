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
            <div>
               <BlockTrack>
                  <Track />
                  <strong>Самовывоз со склада </strong>
               </BlockTrack>
               <p>Забрать в течение 14 дней</p>
            </div>
            <b>
               0<Сurrency>c</Сurrency>
            </b>
            <div>
               <BlockTrack2>
                  <Track />
                  <strong>Самовывоз из магазина</strong>
               </BlockTrack2>
               <p>Забрать в течение 14 дней</p>
            </div>
            <b>
               0 <Сurrency>c</Сurrency>
            </b>
            <div>
               <BlockTrack3>
                  <Track />
                  <strong>Доставка</strong>
               </BlockTrack3>
               <DeliveryText>
                  Бесплатная доставка при покупках свыше — 10 000с.
               </DeliveryText>
            </div>
            <b>
               от 200 <Сurrency>c</Сurrency>
            </b>
         </Block>
         <Block2>
            <WalletBlock>
               <Wallet />
               <p>Предоплата не требуется</p>
            </WalletBlock>
            <WalletBlock>
               <Wallet />
               <p>Предоплата не требуется</p>
            </WalletBlock>
            <WalletBlock>
               <Wallet />
               <p>Предоплата не требуется</p>
            </WalletBlock>
         </Block2>
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

const Deliver = styled('h3')`
   font-family: Ubuntu;
   font-size: 1.875rem;
   margin-top: 6.06rem;
`

const Block = styled('div')`
   display: flex;
   margin-top: 1.94rem;
   justify-content: space-between;
`
const DeliveryText = styled('p')`
   width: 13rem;
`
const BlockTrack = styled('div')`
   display: flex;
   width: 13rem;
   justify-content: space-between;
   align-items: center;
`
const BlockTrack2 = styled('div')`
   display: flex;
   width: 14rem;
   justify-content: space-between;
   align-items: center;
`
const BlockTrack3 = styled('div')`
   display: flex;
   width: 7rem;
   justify-content: space-between;
   align-items: center;
`
const Сurrency = styled('span')`
   border-bottom: 2px solid black;
`
const Block2 = styled('div')`
   &:not(:first-child) {
      display: flex;
      width: 64rem;
      justify-content: space-between;
      align-items: center;
   }
`
const WalletBlock = styled('div')`
   display: flex;
   width: 14rem;
   justify-content: space-between;
   align-items: center;
`
const Block3 = styled('div')`
   &:not(:first-child) {
      display: flex;
      width: 56.5rem;
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
