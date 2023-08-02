import { styled, Button, Badge } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { ReactComponent as Instagram } from '../../../assets/icons/messangers/instagram-icon.svg'
import { ReactComponent as WhatsApp } from '../../../assets/icons/messangers/whatsapp-icon.svg'
import { ReactComponent as FaceBook } from '../../../assets/icons/messangers/facebook-icon.svg'
import { ReactComponent as ShopingCart } from '../../../assets/icons/comparison-icon.svg'
import { ReactComponent as Heart } from '../../../assets/icons/favourites-icon.svg'
import { ReactComponent as Basket } from '../../../assets/icons/basket-icon.svg'
import { ReactComponent as Menu } from '../../../assets/icons/catalog-icon.svg'
import { ReactComponent as UserIcons } from '../../../assets/icons/avatar/default-avatar-icon.svg'
import { HeaderFixed } from './HeaderFixed'
import { navBarForHeader } from '../../../utils/common/constants/header'

export const Header = ({ favorite, comparison, basket }) => {
   const [fixed, setFixed] = useState(false)
   const changeHeader = () => {
      if (window.scrollY >= 10) {
         setFixed(true)
      } else {
         setFixed(false)
      }
   }
   window.addEventListener('scroll', changeHeader)
   const [inputValue, setInputValue] = useState('')
   const handleChange = (event) => {
      setInputValue(event.target.value)
   }

   return (
      <div>
         {fixed ? (
            <Box>
               <HeaderFixed
                  value={inputValue}
                  onChange={handleChange}
                  basket={basket}
                  comparison={comparison}
                  favorite={favorite}
               />
            </Box>
         ) : (
            <Headers>
               <CaptionContainer>
                  <Caption>
                     <Title>
                        <GadgeteriumContainer>
                           <GIcons>G</GIcons>
                        </GadgeteriumContainer>
                        <a href="./">adgetarium</a>
                     </Title>
                     <NavBar>
                        {navBarForHeader.map((el) => (
                           <a key={el.title} href={el.path}>
                              {el.title}
                           </a>
                        ))}
                     </NavBar>
                     <UserNumber>
                        <p>+996 (400) 00-00-00</p>
                        <User />
                     </UserNumber>
                  </Caption>
               </CaptionContainer>
               <Line>
                  <ButtonContainer>
                     <ButtonInputContainer>
                        <Btn variant="contained">
                           <Menu />
                           <p>Каталог</p>
                        </Btn>
                        <Border />
                        <SearchForm onSubmit="submit">
                           <Input
                              className={inputValue ? 'hasText' : ''}
                              value={inputValue}
                              onChange={handleChange}
                              placeholder="Поиск по каталогу магазина  "
                              type="text"
                           />
                           <StyledVector />
                        </SearchForm>
                     </ButtonInputContainer>
                     <Massage>
                        <StyledFaceBookIcon />
                        <StyledInstagramIcon />
                        <StyledWhatsAppIcon />
                     </Massage>
                     <IconsForm>
                        <MuiBadg badgeContent={comparison} showZero>
                           <IconsShopingCart />
                        </MuiBadg>
                        <MuiBadg badgeContent={favorite} showZero>
                           <IconsHeart />
                        </MuiBadg>
                        <MuiBadg badgeContent={basket} showZero>
                           <IconsBasket />
                        </MuiBadg>
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
   height: 173px;
   display: flex;
   flex-direction: column;
   align-items: center;
`
const CaptionContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   border-bottom: 1px solid #2b2f36;
`
const Caption = styled('div')`
   width: 85.35vw;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 75.5px;
`
const GadgeteriumContainer = styled('div')`
   width: 35px;
   height: 35px;
   display: flex;
   background-color: #cb11ab;
   margin-right: 2.5px;
   align-items: center;
   justify-content: center;
`
const ButtonInputContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 53.18vw;
`
const SearchForm = styled('form')`
   display: flex;
   position: relative;
   align-items: center;
   &.hasText {
      input {
         background-color: white;
      }
   }
   :hover {
      input {
         transition: background-color 0.4s ease;
         background-color: #fff;
         ::placeholder {
            color: gray;
         }
      }
      svg {
         path {
            fill: gray;
         }
      }
   }
`
const GIcons = styled('p')`
   color: #fff;
   font-family: Outfit;
   font-size: 32.053px;
   font-style: normal;
   font-weight: 600;
`
const Box = styled('div')`
   margin: 0;
   padding: 0;
   width: 100%;
   box-sizing: border-box;
`
const Title = styled('div')`
   display: flex;
   align-items: center;

   a {
      font-family: Orbitron;
      color: #fff;
      font-size: 1.75rem;
      text-decoration: none;
   }
`
const NavBar = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   color: #ffffff;
   width: 31.4375vw;
   a {
      padding: 10px 14px 12px 14px;
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      &:hover {
         border-radius: 4px;
         background: rgba(133, 143, 164, 0.15);
      }
   }
`
const UserNumber = styled('div')`
   display: flex;
   align-items: center;
   color: #fff;
`
const Input = styled('input')`
   width: 39.7vw;
   height: 2.5rem;
   border-radius: 0.625rem;
   border: 1px solid #fff;
   padding: 0.5rem 1.125rem 0.5rem 1.125rem;
   background-color: #1a1a25;
   color: black;
   outline: none;
   ::placeholder {
      color: #fff;
   }
   &.hasText {
      background-color: white;
      color: black;
      svg {
         path {
            fill: gray;
         }
      }
   }
`
const StyledVector = styled(SearchIcon)`
   position: absolute;
   right: 20px;
   fill: red;
   cursor: pointer;
`
const ButtonContainer = styled('div')`
   width: 85.35vw;
   display: flex;
   justify-content: space-between;
   p {
      color: #fff;
   }
`
const Line = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 96.5px;
`
const Massage = styled('div')`
   display: flex;
   width: 7.5rem;
   justify-content: space-between;
   align-items: center;
`
const Btn = styled(Button)`
   text-transform: none;
   font-family: Inter;
   font-weight: 600;
   font-size: 16px;
   width: 8.5rem;
   height: 3.0625rem;
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
   cursor: pointer;
   &:hover {
      path {
         stroke: #ff00d4;
      }
   }
`
const IconsBasket = styled(Basket)`
   cursor: pointer;
   &:hover {
      path {
         fill: #cb11ab;
      }
   }
`
const IconsShopingCart = styled(ShopingCart)`
   cursor: pointer;
   &:hover {
      path {
         fill: #cb11ab;
      }
   }
`
const User = styled(UserIcons)`
   width: 1.5rem;
   height: 1.5rem;
   margin-left: 1.875rem;
   cursor: pointer;
`
const Border = styled('div')`
   border-right: 1px solid #2b2f36;
   height: 2.5rem;
`
const StyledFaceBookIcon = styled(FaceBook)`
   cursor: pointer;
   &:hover {
      path {
         fill: #ff00d4;
      }
   }
`
const StyledInstagramIcon = styled(Instagram)`
   cursor: pointer;
   &:hover {
      path {
         fill: #ff00d4;
      }
   }
`
const StyledWhatsAppIcon = styled(WhatsApp)`
   cursor: pointer;
   :hover {
      path {
         fill: #ff00d4;
      }
   }
`
const MuiBadg = styled(Badge)`
   .MuiBadge-badge {
      background-color: ${(props) =>
         props.badgeContent === 0 ? 'gray' : 'red'};
      color: #fff;
   }
`
const IconsForm = styled('div')`
   display: flex;
   align-items: center;
   width: 9rem;
   justify-content: space-between;
   margin-right: 10px;
`
