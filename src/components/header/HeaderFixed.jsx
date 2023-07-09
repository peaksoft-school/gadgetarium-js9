import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Button, Stack } from '@mui/material'
import { ReactComponent } from '../../assets/icons/headerIcons/Letter.svg'
import { ReactComponent as ReactComponentIcons } from '../../assets/icons/headerIcons/Background.svg'
import { ReactComponent as Menu } from '../../assets/icons/headerIcons/menu (1) 1.svg'
import { ReactComponent as Vector } from '../../assets/icons/headerIcons/Vector.svg'
import { ReactComponent as Heart } from '../../assets/icons/headerIcons/heart.svg'
import { ReactComponent as Basket } from '../../assets/icons/headerIcons/basket.svg'
import { ReactComponent as ShopingCart } from '../../assets/icons/headerIcons/shopping-cart.svg'

export const HeaderFixed = () => {
   const [count1] = useState(0)
   const [count2] = useState(11)
   const [count3] = useState(2)
   return (
      <Header>
         <Title>
            <Icons />
            <Letter />
            <h1>adgetarium</h1>
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
            <ShopingCart />
            {count1 === 0 ? (
               <OrderCount>{0}</OrderCount>
            ) : (
               <OrderCountClick1>{1}</OrderCountClick1>
            )}
            <IconsHeart />
            {count2 === 0 ? (
               <OrderCount2>{0}</OrderCount2>
            ) : (
               <OrderCountClick2>{11}</OrderCountClick2>
            )}
            <IconsBasket />
            {count3 === 0 ? (
               <OrderCount3> {0}</OrderCount3>
            ) : (
               <OrderCountClick3>{2}</OrderCountClick3>
            )}
         </IconsForm>
      </Header>
   )
}
const Header = styled('header')`
   width: 100%;
   height: 96px;
   background-color: #1a1a25;
   border: 1px solid #fff;
   position: fixed;
   display: flex;
   justify-content: space-around;
   padding-left: 30px;
   padding-right: 30px;
`
const Title = styled('div')`
   display: flex;
   margin-top: 25px;
   margin-left: -200px;
   h1 {
      margin-left: 10px;
      color: #fff;
      font-size: 28px;
   }
`
const Icons = styled(ReactComponentIcons)`
   margin-left: 195px;
`
const Letter = styled(ReactComponent)`
   margin-top: 5px;
   margin-left: -30px;
`
const Btn = styled(Button)`
   position: absolute;
   width: 136px;
   height: 49px;
   margin-top: 23px;
   margin-left: -10px;
   background-color: #cb11ab;
   &:hover {
      background-color: #cb11ab;
   }
   p {
      font-size: 16px;
      margin-left: 10px;
   }
`
const Input = styled('input')`
   width: 784px;
   height: 40px;
   border-radius: 10px;
   border: 1px solid #fff;
   padding: 8px, 18px, 8px, 18px;
   background-color: #1a1a25;
   color: #fff;
   margin-top: 27px;
   ::-webkit-input-placeholder {
      color: #fff;
   }
`
const Search = styled('div')`
   margin-top: -30px;
   margin-left: 740px;
   cursor: pointer;
`

const OrderCount = styled('span')`
   position: absolute;
   top: 22px;
   right: 135px;
   padding: 4px 6px;
   border-radius: 30px;
   background-color: #858fa4;
   color: #fff;
   font-size: 10px;
`
const OrderCount2 = styled('span')`
   position: absolute;
   top: 22px;
   right: 90px;
   padding: 4px 6px;
   border-radius: 30px;
   background-color: #858fa4;
   color: #fff;
   font-size: 10px;
`

const OrderCount3 = styled('span')`
   position: absolute;
   top: 98px;
   right: 70px;
   padding: 4px 6px;
   background: #8a2b06;
   border-radius: 30px;
   background-color: #858fa4;
   color: #fff;
   font-size: 10px;
`

const OrderCountClick1 = styled('span')`
   position: absolute;
   top: 98px;
   right: 165px;
   padding: 4px 6px;
   border-radius: 30px;
   background-color: red;
   color: #fff;
   font-size: 10px;
`
const OrderCountClick2 = styled('span')`
   position: absolute;
   top: 22px;
   right: 85px;
   padding: 4px 6px;
   border-radius: 30px;
   background-color: red;
   color: #fff;
   font-size: 10px;
`
const OrderCountClick3 = styled('span')`
   position: absolute;
   top: 22px;
   right: 40px;
   padding: 4px 6px;
   border-radius: 30px;
   background-color: red;
   color: #fff;
   font-size: 10px;
`
const IconsForm = styled('div')`
   display: flex;
   width: 120px;
   justify-content: space-between;
   margin-top: 32px;
   cursor: pointer;
`
const IconsHeart = styled(Heart)`
   margin-top: -5px;
`
const IconsBasket = styled(Basket)`
   margin-top: 3px;
`
const Border = styled('div')`
   margin-top: 28px;
   border-right: 1px solid #858fa4;
   height: 40px;
`
