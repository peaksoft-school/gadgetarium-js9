import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Button, Stack } from '@mui/material'
import { ReactComponent } from '../../../assets/icons/headerIcons/Letter.svg'
import { ReactComponent as ReactComponentIcons } from '../../../assets/icons/headerIcons/Background.svg'
import { ReactComponent as Menu } from '../../../assets/icons/headerIcons/menu (1) 1.svg'
import { ReactComponent as Vector } from '../../../assets/icons/headerIcons/Vector.svg'
import { ReactComponent as Heart } from '../../../assets/icons/headerIcons/heart.svg'
import { ReactComponent as Basket } from '../../../assets/icons/headerIcons/basket.svg'
import { ReactComponent as ShopingCart } from '../../../assets/icons/headerIcons/shopping-cart.svg'

export const HeaderFixed = () => {
   const [count1] = useState(1)
   const [count2] = useState(0)
   const [count3] = useState(2)

   return (
      <Header>
         <Title>
            <Icons />
            <Letter />
            <a href="./">adgetarium</a>
         </Title>
         <Stack spacing={2} width={136} direction="row">
            <Btn variant="contained">
               <Menu />
               <p>Каталог</p>
            </Btn>
         </Stack>
         <Border>.</Border>
         <form onSubmit="submit">
            <Input placeholder="Поиск по каталогу магазина  " type="text" />
            <Search>
               <Vector />
            </Search>
         </form>
         <IconsForm>
            <div>
               <OrderCount1 className={count1 === 0 ? 'gray' : 'red'}>
                  {count1}
               </OrderCount1>
               <IconsShopingCart />
            </div>
            <div>
               <OrderCount2 className={count2 === 0 ? 'gray2' : 'red2'}>
                  {count2}
               </OrderCount2>
               <IconsHeart />
            </div>
            <div>
               <OrderCount3 className={count3 === 0 ? 'gray3' : 'red3'}>
                  {count3}
               </OrderCount3>
               <IconsBasket />
            </div>
         </IconsForm>
      </Header>
   )
}

const Header = styled('header')`
   width: 100%;
   height: 12vh;
   background-color: #1a1a25;
   position: fixed;
   display: flex;
   justify-content: space-around;
   padding-left: 1.875rem;
   padding-right: 3.125rem;
   top: 0;

   z-index: 999;
`

const Title = styled('div')`
   display: flex;
   margin-top: 1.5625rem;
   margin-left: -12.5rem;
   a {
      margin-left: 0.625rem;
      color: #fff;
      font-size: 1.75rem;
      text-decoration: none;
   }
`
const Icons = styled(ReactComponentIcons)`
   margin-left: 12.1875rem;
`
const Letter = styled(ReactComponent)`
   margin-top: 0.3125rem;
   margin-left: -1.875rem;
`
const Btn = styled(Button)`
   position: absolute;
   width: 8.5rem;
   height: 3.0625rem;
   margin-top: 1.4375rem;
   background-color: #cb11ab;
   &:hover {
      background-color: #cb11ab;
   }
   p {
      font-size: 1rem;
      margin-left: 0.625rem;
      color: #fff;
   }
`
const Input = styled('input')`
   width: 49rem;
   height: 2.5rem;
   border-radius: 0.625rem;
   border: 1px solid #fff;
   padding: 0.5rem, 1.125rem, 0.5rem, 1.125rem;
   background-color: #1a1a25;
   color: #fff;
   margin-top: 1.6875rem;
   padding-left: 1.125rem;
   ::-webkit-input-placeholder {
      color: #fff;
   }
`
const Search = styled('div')`
   margin-top: -1.875rem;
   margin-left: 46.25rem;
   cursor: pointer;
`
const OrderCount1 = styled('span')`
   position: absolute;
   top: 22px;
   right: 152px;
   border-radius: 1.875rem;
   color: #fff;
   font-size: 0.625rem;
`

const OrderCount2 = styled('span')`
   position: absolute;
   top: 22px;
   right: 105px;
   border-radius: 1.875rem;
   color: #fff;
   font-size: 0.625rem;
`

const OrderCount3 = styled('span')`
   position: absolute;
   top: 22px;
   right: 53px;
   border-radius: 1.875rem;
   color: #fff;
   font-size: 0.625rem;
`
const IconsForm = styled('div')`
   display: flex;
   width: 7.5rem;

   justify-content: space-between;
   margin-top: 2rem;

   .gray {
      padding: 4px 6px 4px 6px;
      background-color: #858fa4;
   }

   .red {
      padding: 4px 6px 4px 6px;
      background-color: #ff0000;
   }
   .gray2 {
      padding: 4px 6px 4px 6px;
      background-color: #858fa4;
   }

   .red2 {
      padding: 4px 6px 4px 6px;
      background-color: #ff0000;
   }
   .gray3 {
      padding: 4px 6px 4px 6px;
      background-color: #858fa4;
   }

   .red3 {
      padding: 4px 6px 4px 6px;
      background-color: #ff0000;
   }
`
const IconsHeart = styled(Heart)`
   margin-top: -0.3125rem;
   cursor: pointer;
`
const IconsBasket = styled(Basket)`
   margin-top: 0.1875rem;
   cursor: pointer;
`
const IconsShopingCart = styled(ShopingCart)`
   cursor: pointer;
`

const Border = styled('div')`
   margin-top: 1.75rem;
   border-right: 1px solid #858fa4;
   height: 4.5vh;
`
