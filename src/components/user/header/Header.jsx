import { styled } from '@mui/material/styles'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import { ReactComponent as Letter } from '../../../assets/icons/headerIcons/Letter.svg'
import { ReactComponent as ReactComponentIcons } from '../../../assets/icons/headerIcons/Background.svg'
import { ReactComponent as Vector } from '../../../assets/icons/headerIcons/Vector.svg'
import { ReactComponent as Instagram } from '../../../assets/icons/headerIcons/Facebook.svg'
import { ReactComponent as WhatsApp } from '../../../assets/icons/headerIcons/instagram.svg'
import { ReactComponent as FaceBook } from '../../../assets/icons/headerIcons/watsapp.svg'
import { ReactComponent as ShopingCart } from '../../../assets/icons/headerIcons/shopping-cart.svg'
import { ReactComponent as Heart } from '../../../assets/icons/headerIcons/heart.svg'
import { ReactComponent as Basket } from '../../../assets/icons/headerIcons/basket.svg'
import { ReactComponent as Menu } from '../../../assets/icons/headerIcons/menu (1) 1.svg'
import { ReactComponent as UserIcons } from '../../../assets/icons/headerIcons/profile-user (2) 2.svg'
import { HeaderFixed } from './HeaderFixed'

export const Header = () => {
   const [count1] = useState(1)
   const [count2] = useState(0)
   const [count3] = useState(2)

   const [fixed, setFixed] = useState(false)

   const changeHeader = () => {
      if (window.scrollY >= 10) {
         setFixed(true)
      } else {
         setFixed(false)
      }
   }

   window.addEventListener('scroll', changeHeader)

   return (
      <div>
         {fixed ? (
            <Box>
               <HeaderFixed />
            </Box>
         ) : (
            <Headers>
               <Caption>
                  <Title>
                     <BackgroundIcons />
                     <GIcons />
                     <a href="./">adgetarium</a>
                  </Title>
                  <NavBar>
                     <a href="./главная">Главная</a>
                     <a href="./Омагазине">О магазине</a>
                     <a href="./доставка">Доставка</a>
                     <a href="./fag">FAG</a>
                     <a href="./контакты">Контакты</a>
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
                        <StyledFaceBookIcon />
                        <StyledInstagramIcon />
                        <StyledWhatsAppIcon />
                     </Massage>
                     <IconsForm>
                        <div>
                           <OrderCount1
                              className={count1 === 0 ? 'gray' : 'red'}
                           >
                              {count1}
                           </OrderCount1>
                           <IconsShopingCart />
                        </div>
                        <div>
                           <OrderCount2
                              className={count2 === 0 ? 'gray2' : 'red2'}
                           >
                              {count2}
                           </OrderCount2>
                           <IconsHeart />
                        </div>
                        <div>
                           <OrderCount3
                              className={count3 === 0 ? 'gray3' : 'red3'}
                           >
                              {count3}
                           </OrderCount3>
                           <IconsBasket />
                        </div>
                     </IconsForm>
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
   height: 21vh;
`

const Caption = styled('div')`
   display: flex;
   justify-content: space-around;
`

const BackgroundIcons = styled(ReactComponentIcons)`
   margin-top: 1rem;
`

const GIcons = styled(Letter)`
   margin-top: 1.4375rem;
   margin-left: -1.75rem;
`

const Box = styled('div')`
   margin: 0;
   padding: 0;
   width: 100%;
   box-sizing: border-box;
`

const Title = styled('div')`
   display: flex;
   a {
      margin-top: 1rem;
      margin-left: 0.5rem;
      color: #fff;
      font-size: 1.75rem;
      text-decoration: none;
   }
`
const NavBar = styled('div')`
   display: flex;
   color: #ffffff;
   width: 31.4375vw;
   justify-content: space-between;
   margin-left: 6rem;
   a {
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      margin-top: 1.625rem;
      &:hover {
         color: gray;
      }
   }
`
const UserNumber = styled('div')`
   display: flex;
   margin-left: 2.5rem;
   color: #fff;
   p {
      margin-top: 1.75rem;
   }
`

const Input = styled('input')`
   width: 49rem;
   height: 2.5rem;
   padding-left: 1.125rem;
   border-radius: 0.625rem;
   border: 1px solid #fff;
   padding: 0.5rem, 1.125rem, 0.5rem, 1.125rem;
   background-color: #1a1a25;
   color: #fff;
   ::-webkit-input-placeholder {
      color: #fff;
   }
`
const Search = styled('div')`
   margin-top: -1.875rem;
   margin-left: 46.25rem;
   cursor: pointer;
`
const ButtonContainer = styled('div')`
   display: flex;
   justify-content: space-around;
   margin-top: 1.875rem;
   padding-left: 3.75rem;
   padding-right: 3.75rem;
   p {
      color: #fff;
   }
`

const Line = styled('div')`
   width: 100%;
   margin-top: 1.25rem;
   border-top: 1px solid #858fa4;
`
const Massage = styled('div')`
   display: flex;
   width: 7.5rem;
   justify-content: space-between;
   margin-top: 0.3rem;
   margin-left: 2rem;
`
const Btn = styled(Button)`
   width: 8.5rem;
   height: 3.0625rem;
   margin-top: -0.3125rem;
   background-color: #cb11ab;
   &:hover {
      background-color: #cb11ab;
   }
   p {
      font-size: 1rem;
      margin-left: 0.625rem;
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
const User = styled(UserIcons)`
   margin-top: 1.5625rem;
   margin-left: 3.125rem;
   cursor: pointer;
`
const Border = styled('div')`
   border-right: 1px solid #858fa4;
   height: 4.5vh;
`
const StyledFaceBookIcon = styled(FaceBook)`
   cursor: pointer;
   path {
      &:hover {
         fill: #cb11ab;
      }
   }
`
const StyledInstagramIcon = styled(Instagram)`
   cursor: pointer;
   path {
      &:hover {
         fill: #cb11ab;
      }
   }
`

const StyledWhatsAppIcon = styled(WhatsApp)`
   cursor: pointer;
   path {
      &:hover {
         fill: #cb11ab;
      }
   }
`
const OrderCount1 = styled('span')`
   position: absolute;
   top: 6.2rem;
   right: 152px;
   border-radius: 1.875rem;
   color: #fff;
   font-size: 0.625rem;
`

const OrderCount2 = styled('span')`
   position: absolute;
   top: 6.2rem;
   right: 108px;
   border-radius: 1.875rem;
   color: #fff;
   font-size: 0.625rem;
`

const OrderCount3 = styled('span')`
   position: absolute;
   top: 6.2rem;
   right: 58px;
   border-radius: 1.875rem;
   color: #fff;
   font-size: 0.625rem;
`
const IconsForm = styled('div')`
   display: flex;
   width: 9.325rem;
   justify-content: space-between;
   padding-left: 2rem;
   margin-top: 0.3rem;

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
