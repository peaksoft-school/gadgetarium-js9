import { styled } from '@mui/material/styles'
import React, { useState } from 'react'
import { Button } from '@mui/material'
// import { Link } from 'react-router-dom'
import { ReactComponent } from '../../assets/icons/headerIcons/Letter.svg'
import { ReactComponent as ReactComponentIcons } from '../../assets/icons/headerIcons/Background.svg'
import { ReactComponent as Vector } from '../../assets/icons/headerIcons/Vector.svg'
import { ReactComponent as Facebook } from '../../assets/icons/headerIcons/Facebook.svg'
import { ReactComponent as Instagram } from '../../assets/icons/headerIcons/instagram.svg'
import { ReactComponent as Watsapp } from '../../assets/icons/headerIcons/watsapp.svg'
import { ReactComponent as ShopingCart } from '../../assets/icons/headerIcons/shopping-cart.svg'
import { ReactComponent as Heart } from '../../assets/icons/headerIcons/heart.svg'
import { ReactComponent as Basket } from '../../assets/icons/headerIcons/basket.svg'
import { ReactComponent as Menu } from '../../assets/icons/headerIcons/menu (1) 1.svg'
import { ReactComponent as UserIcons } from '../../assets/icons/headerIcons/profile-user (2) 2.svg'
import { HeaderFixed } from './HeaderFixed'

export const Header = () => {
   const [count1] = useState(0)
   const [count2] = useState(0)
   const [count3] = useState(1)

   const [fixed, setFixed] = useState(false)

   const changeHeader = () => {
      if (window.scrollY >= 90) {
         setFixed(true)
      } else {
         setFixed(false)
      }
   }

   window.addEventListener('scroll', changeHeader)

   return (
      <div>
         {fixed ? (
            <HeaderFixed />
         ) : (
            <Headers>
               <Caption>
                  <Title>
                     <BackgroundIcons />
                     <GIcons />
                     <h1>adgetarium</h1>
                  </Title>
                  <NavBar>
                     <p>Главная</p>
                     <p>О магазине</p>
                     <p>Доставка</p>
                     <p>FAG</p>
                     <p>Контакты</p>
                  </NavBar>
                  <UserNumber>
                     <p>+996 (400) 00-00-00</p>
                     <User />
                  </UserNumber>
               </Caption>
               <Line>
                  <ButtonContainer>
                     <Btn variant="contained">
                        <Menu />
                        <p>Каталог</p>
                     </Btn>
                     <Border>.</Border>
                     <form onSubmit="submit">
                        <Input
                           placeholder="Поиск по каталогу магазина  "
                           type="text"
                        />
                        <Search>
                           <Vector />
                        </Search>
                     </form>
                     <Massage>
                        <Facebook />
                        <Instagram />
                        <Watsapp />
                     </Massage>
                     <Icons>
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
                           <OrderCountClick2>{1}</OrderCountClick2>
                        )}
                        <IconsBasket />
                        {count3 === 0 ? (
                           <OrderCount3> {0}</OrderCount3>
                        ) : (
                           <OrderCountClick3>{1}</OrderCountClick3>
                        )}
                     </Icons>
                  </ButtonContainer>
               </Line>
            </Headers>
         )}
      </div>
   )
}
const Headers = styled('header')`
   width: 100%;
   background-color: #1a1a25;
   height: 173px;
`

const Caption = styled('div')`
   display: flex;
   justify-content: space-around;
`

const BackgroundIcons = styled(ReactComponentIcons)`
   margin-top: 17px;
`

const GIcons = styled(ReactComponent)`
   margin-top: 23px;
   margin-left: -28px;
`
const Title = styled('div')`
   display: flex;
   h1 {
      margin-top: 17px;
      margin-left: 5px;
      color: #fff;
   }
`
const NavBar = styled('div')`
   display: flex;
   margin-top: 17px;
   color: #ffffff;
   width: 503px;
   justify-content: space-between;
   cursor: pointer;
`
const UserNumber = styled('div')`
   display: flex;
   margin-top: 17px;
   margin-left: 40px;
   color: #fff;
`

const Input = styled('input')`
   width: 784px;
   height: 40px;
   border-radius: 10px;
   border: 1px solid #fff;
   padding: 8px, 18px, 8px, 18px;
   background-color: #1a1a25;
   color: #fff;
   ::-webkit-input-placeholder {
      color: #fff;
   }
`
const Search = styled('div')`
   margin-top: -30px;
   margin-left: 740px;
   cursor: pointer;
`
const ButtonContainer = styled('div')`
   display: flex;
   justify-content: space-around;
   margin-top: 30px;
   padding-left: 60px;
   padding-right: 60px;
`

const Line = styled('div')`
   width: 100%;
   margin-top: 20px;
   border-top: 1px solid #858fa4;
`
const Massage = styled('div')`
   display: flex;
   width: 120px;
   justify-content: space-between;
`
const Icons = styled('div')`
   display: flex;
   width: 120px;
   justify-content: space-between;
`

const Btn = styled(Button)`
   width: 136px;
   height: 49px;
   margin-top: -5px;
   background-color: #cb11ab;
   &:hover {
      background-color: #cb11ab;
   }
   p {
      font-size: 16px;
      margin-left: 10px;
   }
`
const IconsHeart = styled(Heart)`
   margin-top: -5px;
`
const IconsBasket = styled(Basket)`
   margin-top: 3px;
`
const User = styled(UserIcons)`
   margin-left: 50px;
`
const OrderCount = styled('span')`
   position: absolute;
   top: 98px;
   right: 165px;
   padding: 4px 6px;
   border-radius: 30px;
   background-color: #858fa4;
   color: #fff;
   font-size: 10px;
`
const OrderCount2 = styled('span')`
   position: absolute;
   top: 98px;
   right: 120px;
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
   top: 98px;
   right: 120px;
   padding: 4px 6px;
   border-radius: 30px;
   background-color: red;
   color: #fff;
   font-size: 10px;
`
const OrderCountClick3 = styled('span')`
   position: absolute;
   top: 98px;
   right: 70px;
   padding: 4px 6px;
   border-radius: 30px;
   background-color: red;
   color: #fff;
   font-size: 10px;
`

const Border = styled('div')`
   border-right: 1px solid #858fa4;
   height: 40px;
`
