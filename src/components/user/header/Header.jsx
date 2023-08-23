import { styled, Button, Badge, keyframes } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { ReactComponent as Instagram } from '../../../assets/icons/messangers/instagram-icon.svg'
import { ReactComponent as WhatsApp } from '../../../assets/icons/messangers/whatsapp-icon.svg'
import { ReactComponent as FaceBook } from '../../../assets/icons/messangers/facebook-icon.svg'
import { ReactComponent as ShoppingCart } from '../../../assets/icons/comparison-icon.svg'
import { ReactComponent as Heart } from '../../../assets/icons/favourites-icon.svg'
import { ReactComponent as Basket } from '../../../assets/icons/basket-icon.svg'
import { ReactComponent as Menu } from '../../../assets/icons/catalog-icon.svg'
import { ReactComponent as UserIcons } from '../../../assets/icons/avatar/default-avatar-icon.svg'
import { navBarForHeader } from '../../../utils/common/constants/header'
import { FavoriteHover } from '../favorite/FavoriteHover'

export const Header = ({ favorite, comparison, basket }) => {
   const [fixed, setFixed] = useState(false)
   const { favoriteItems } = useSelector((state) => state.favorite)
   const navigate = useNavigate()
   const [hoverFavorite, setHoverFavorite] = useState(false)
   const toggleHoverFavorite = () => {
      setHoverFavorite(!hoverFavorite)
   }
   const changeHeader = () => {
      if (window.scrollY > 64) {
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
   const navigateToFavorite = () => {
      navigate('/favorite')
   }
   return (
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
                     <Link
                        key={el.title}
                        to={el.path}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        {el.title}
                     </Link>
                  ))}
               </NavBar>
               <UserNumber>
                  <p>+996 (400) 00-00-00</p>
                  <User />
               </UserNumber>
            </Caption>
         </CaptionContainer>
         <Line fixed={fixed}>
            <ButtonContainer>
               <ButtonInputContainer fixed={fixed}>
                  <TitleFixed fixed={fixed}>
                     <GadgeteriumContainer>
                        <GIcons>G</GIcons>
                     </GadgeteriumContainer>
                     <a href="./">adgetarium</a>
                  </TitleFixed>
                  <Btn variant="contained">
                     <Menu />
                     <p>Каталог</p>
                  </Btn>
                  <Border />
                  <SearchForm>
                     <Input
                        className={inputValue ? 'hasText' : ''}
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Поиск по каталогу магазина  "
                        type="text"
                     />
                     <StyledVector input={inputValue} />
                  </SearchForm>
               </ButtonInputContainer>
               <Massage fixed={fixed}>
                  <StyledFaceBookIcon />
                  <StyledInstagramIcon />
                  <StyledWhatsAppIcon />
               </Massage>
               <IconsForm>
                  <MuiBadge badgeContent={comparison} showZero>
                     <IconsShoppingCart />
                  </MuiBadge>
                  <PositionContainer
                     onMouseEnter={toggleHoverFavorite}
                     onMouseLeave={toggleHoverFavorite}
                  >
                     {hoverFavorite && (
                        <FavoriteContainer fixed={fixed} hover={hoverFavorite}>
                           <FavoriteHover
                              path="/favorite"
                              favorite
                              array={favoriteItems}
                           />
                        </FavoriteContainer>
                     )}
                     <MuiBadge badgeContent={favorite} showZero>
                        <IconsHeart onClick={navigateToFavorite} />
                     </MuiBadge>
                  </PositionContainer>

                  <MuiBadge badgeContent={basket} showZero>
                     <IconsBasket />
                  </MuiBadge>
               </IconsForm>
            </ButtonContainer>
         </Line>
      </Headers>
   )
}
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`
const PositionContainer = styled('div')`
   p {
      color: #292929;
   }
   position: relative;
`
const Headers = styled('header')`
   width: 100%;
   background-color: #1a1a25;
   height: 173px;
   display: flex;
   flex-direction: column;
   align-items: center;

   z-index: 6;
`
const FavoriteContainer = styled('div')`
   animation: ${(props) => (props.hover ? slideIn : slideOut)} 0.3s ease-in-out;
   position: absolute;
   right: -37px;
   top: 36px;
`
const Link = styled(NavLink)`
   padding: 10px 14px 12px 14px;
   cursor: pointer;
   text-decoration: none;
   color: #fff;

   &:hover {
      border-radius: 4px;
      background: rgba(133, 143, 164, 0.15);
   }
`

const CaptionContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   border-bottom: 1px solid #2b2f36;
`

const Caption = styled('div')`
   width: 79.688vw;
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
   width: ${(props) => (props.fixed ? '68.3vw' : '53.18vw')};
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

const TitleFixed = styled('div')`
   display: ${(props) => (props.fixed ? 'flex' : 'none')};
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

   .active {
      border-radius: 4px;
      background: rgba(133, 143, 164, 0.15);
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
   }
`

const StyledVector = styled(SearchIcon)`
   position: absolute;
   right: 20px;
   path {
      fill: ${(props) => props.input !== '' && '#cb11ab !important'};
   }
   cursor: pointer;
`

const ButtonContainer = styled('div')`
   width: 79.688vw;
   display: flex;
   justify-content: space-between;
   p {
      color: #fff;
   }
`

const Line = styled('div')`
   background-color: #1a1a25;
   position: ${(props) => (props.fixed ? 'fixed' : 'static')};
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 96.5px;
   z-index: 9;
`

const Massage = styled('div')`
   display: ${(props) => (props.fixed ? 'none' : 'flex')};
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
         fill: #ff00d4;
      }
   }
`

const IconsShoppingCart = styled(ShoppingCart)`
   cursor: pointer;

   &:hover {
      path {
         fill: #ff00d4;
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

const MuiBadge = styled(Badge)`
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
`
