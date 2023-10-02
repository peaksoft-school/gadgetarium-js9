import { styled, Button, Badge, keyframes } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Instagram } from '../../../assets/icons/messangers/instagram-icon.svg'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { ReactComponent as WhatsApp } from '../../../assets/icons/messangers/whatsapp-icon.svg'
import { ReactComponent as FaceBook } from '../../../assets/icons/messangers/facebook-icon.svg'
import { ReactComponent as ShoppingCart } from '../../../assets/icons/comparison-icon.svg'
import { ReactComponent as Heart } from '../../../assets/icons/favourites-icon.svg'
import { ReactComponent as Basket } from '../../../assets/icons/basket-icon.svg'
import { ReactComponent as Menu } from '../../../assets/icons/catalog-icon.svg'
import { ReactComponent as UserIcons } from '../../../assets/icons/avatar/default-avatar-icon.svg'
import { navBarForHeader } from '../../../utils/common/constants/header'
import { routes } from '../../../utils/common/constants/routesConstants'
import GeneralCategorySelectLayout from '../GeneralCategorySelectLayout'
import { ProductsModalWhenIsHovered } from '../../UI/ProductsModalWhenIsHovered'
import { logOut } from '../../../store/auth/authThunk'
import { AuthorizationModal } from '../AuthorizationModal'
import { getGlobalSearch } from '../../../store/globalSearch/global.search.thunk'
import { GlobalSearch } from '../globalSearch/GlobalSearch'
import { Modal } from '../../UI/Modal'
import { formatPhoneNumber } from '../../../utils/helpers/functions'

export const Header = ({ favorite, basket, compare }) => {
   const dispatch = useDispatch()
   const { number, img, token, isAuthorization } = useSelector(
      (state) => state.auth
   )
   const [hoverCompare, setHoverCompare] = useState(false)
   const [hoverFavorite, setHoverFavorite] = useState(false)
   const navigate = useNavigate()
   const { allProducts } = useSelector((state) => state.compare)
   const { favoriteItems } = useSelector((state) => state.favorite)
   const toggleHoverCompare = () => {
      setHoverCompare(!hoverCompare)
   }
   const toggleHoverFavorite = () => {
      setHoverFavorite(!hoverFavorite)
   }
   const [fixed, setFixed] = useState(false)
   const [open, setOpen] = useState(false)
   const [catalogSelect, setCatalogSelect] = useState(false)
   const [inputValue, setInputValue] = useState('')
   const [openModal, setOpenModal] = useState(false)
   const [exitModal, setExitModal] = useState(false)
   const [debounceTimeout, setDebounceTimeout] = useState(null)
   const [isInputFocused, setInputFocused] = useState(false)
   const changeHeader = () => {
      if (window.scrollY > 64) {
         setFixed(true)
      } else {
         setFixed(false)
      }
   }
   window.addEventListener('scroll', changeHeader)

   const handleChange = (event) => {
      setInputValue(event.target.value)
      if (debounceTimeout) {
         clearTimeout(debounceTimeout)
      }
      const newDebounceTimeout = setTimeout(() => {
         dispatch(getGlobalSearch(event.target.value))
      }, 500)

      setDebounceTimeout(newDebounceTimeout)
   }
   useEffect(() => {
      dispatch(getGlobalSearch(inputValue))
   }, [])
   function onComeBack() {
      navigate('./')
   }
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }
   const navigateToFavorite = () => {
      if (isAuthorization) {
         scrollToTop()
         navigate('/favorite')
      } else {
         setOpenModal(true)
      }
   }
   function openSelect() {
      setOpen(true)
   }
   function closeSelect() {
      setOpen(false)
   }
   const toggleExitModalHandler = () => {
      closeSelect()
      setExitModal(!exitModal)
   }
   const navigateToCompare = () => {
      if (isAuthorization) {
         scrollToTop()
         navigate('/compare')
      } else {
         setOpenModal(true)
      }
   }
   const logOutHandler = () => {
      dispatch(logOut())
      setExitModal(false)
      setOpen(false)

      window.location.reload()
   }
   const handleInputFocus = () => {
      setInputFocused(true)
   }
   const toggleInputFocused = (value) => {
      setInputFocused(value)
   }

   const handleInputBlur = () => {
      if (inputValue.length > 0) {
         return setInputFocused(true)
      }
      return setInputFocused(false)
   }
   const toggleCatalogSelect = () => {
      setCatalogSelect(!catalogSelect)
   }
   const navigateToBasket = () => {
      if (isAuthorization) {
         scrollToTop()
         navigate('/basket')
      } else {
         setOpenModal(true)
      }
   }
   const toggleModalHandler = () => {
      setOpenModal(!openModal)
   }
   return (
      <>
         {openModal && (
            <AuthorizationModal
               openModal={openModal}
               toggleHandler={toggleModalHandler}
            />
         )}
         <Headers>
            <CaptionContainer>
               <Caption>
                  <Title onClick={onComeBack}>
                     <GadgeteriumContainer>
                        <GIcons>G</GIcons>
                     </GadgeteriumContainer>
                     <AdgetariumTitle>adgetarium</AdgetariumTitle>
                  </Title>
                  <NavBar>
                     {navBarForHeader.map((el) => (
                        <Link
                           key={el.title}
                           to={el.path}
                           className={({ isActive }) =>
                              isActive ? 'active' : ''
                           }
                        >
                           {el.title}
                        </Link>
                     ))}
                  </NavBar>
                  <UserNumber>
                     <p>{number ? formatPhoneNumber(number) : ''}</p>

                     <div onMouseLeave={closeSelect} onClick={openSelect}>
                        {token !== '' && (
                           <div>
                              {open && (
                                 <div style={{ position: 'relative' }}>
                                    <Select2>
                                       <NavLinkParagraph to="/personalArea/history">
                                          История заказов
                                       </NavLinkParagraph>
                                       <NavLinkParagraph to="/personalArea/favorites">
                                          Избранное
                                       </NavLinkParagraph>
                                       <NavLinkParagraph to="/personalArea/profile">
                                          Профиль
                                       </NavLinkParagraph>
                                       <p onClick={toggleExitModalHandler}>
                                          Выйти
                                       </p>
                                    </Select2>
                                 </div>
                              )}
                           </div>
                        )}
                        {open && token === '' && (
                           <div
                              style={{
                                 position: 'relative',
                              }}
                           >
                              <Select>
                                 <SelectParagraph
                                    onClick={() => navigate(routes.SIGN_IN)}
                                 >
                                    Войти
                                 </SelectParagraph>
                                 <SelectParagraph2
                                    onClick={() => navigate(routes.SIGN_UP)}
                                 >
                                    Регистрация
                                 </SelectParagraph2>
                              </Select>
                           </div>
                        )}
                        {!img ? (
                           <button>
                              <User />
                           </button>
                        ) : (
                           <AvatarImage src={img} />
                        )}
                        <StyledModal
                           open={exitModal}
                           onClose={toggleExitModalHandler}
                           padding="16px 20px"
                        >
                           <ExitTitleContainer>
                              <ExitTitle>Выйти</ExitTitle>
                              <p>Вы уверены, что хотите выйти?</p>
                           </ExitTitleContainer>
                           <SecondButtonContainer>
                              <StyledButton
                                 onClick={toggleExitModalHandler}
                                 padding="5px 24px"
                                 variant="outlined"
                                 backgroundhover="#CB11AB"
                                 backgroundactive="#E313BF"
                              >
                                 Отменить
                              </StyledButton>
                              <StyledButton
                                 variant="contained"
                                 padding="5.8px 24px"
                                 backgroundhover="#E313BF"
                                 backgroundactive="#C90EA9"
                                 onClick={logOutHandler}
                              >
                                 Выйти
                              </StyledButton>
                           </SecondButtonContainer>
                        </StyledModal>
                     </div>
                  </UserNumber>
               </Caption>
            </CaptionContainer>
            <Line fixed={fixed}>
               <ButtonContainer>
                  <ButtonInputContainer fixed={fixed}>
                     <TitleFixed onClick={onComeBack} fixed={fixed}>
                        <GadgeteriumContainer>
                           <GIcons>G</GIcons>
                        </GadgeteriumContainer>
                        <AdgetariumTitle>adgetarium</AdgetariumTitle>
                     </TitleFixed>
                     <div
                        onMouseEnter={toggleCatalogSelect}
                        onMouseLeave={toggleCatalogSelect}
                     >
                        <Btn variant="contained">
                           <Menu />
                           <p>Каталог</p>
                        </Btn>
                        {catalogSelect && (
                           <CatalogSelect fixed={fixed}>
                              <GeneralCategorySelectLayout
                                 toggleCatalogSelect={toggleCatalogSelect}
                              />
                           </CatalogSelect>
                        )}
                     </div>
                     <Border />
                     <PositionContainerForInput>
                        <SearchForm>
                           <Input
                              className={inputValue ? 'hasText' : ''}
                              value={inputValue}
                              onChange={handleChange}
                              placeholder="Поиск по каталогу магазина  "
                              type="text"
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                           />
                           <StyledVector input={inputValue} />
                        </SearchForm>
                        {isInputFocused && (
                           <GlobalSearch
                              toggleInputFocused={toggleInputFocused}
                           />
                        )}
                     </PositionContainerForInput>
                  </ButtonInputContainer>
                  <Massage fixed={fixed}>
                     <a
                        href="https://en-gb.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <StyledFaceBookIcon />
                     </a>
                     <a
                        href="https://www.instagram.com/peaksoft.house/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <StyledInstagramIcon />
                     </a>
                     <a
                        href="https://api.whatsapp.com/send/?phone=996500344433&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <StyledWhatsAppIcon />
                     </a>
                  </Massage>
                  <IconsForm>
                     <PositionContainer
                        onMouseEnter={toggleHoverCompare}
                        onMouseLeave={toggleHoverCompare}
                     >
                        {hoverCompare && (
                           <CompareContainer fixed={fixed} hover={hoverCompare}>
                              <ProductsModalWhenIsHovered
                                 path="/compare"
                                 array={allProducts}
                                 onClose={toggleHoverCompare}
                              />
                           </CompareContainer>
                        )}
                        <MuiBadge badgeContent={compare} showZero>
                           <IconsShoppingCart onClick={navigateToCompare} />
                        </MuiBadge>
                     </PositionContainer>
                     <PositionContainer
                        onMouseEnter={toggleHoverFavorite}
                        onMouseLeave={toggleHoverFavorite}
                     >
                        {hoverFavorite && (
                           <FavoriteContainer
                              fixed={fixed}
                              hover={hoverFavorite}
                           >
                              <ProductsModalWhenIsHovered
                                 path="/favorite"
                                 favorite
                                 array={favoriteItems}
                                 onClose={toggleHoverFavorite}
                              />
                           </FavoriteContainer>
                        )}
                        <MuiBadge badgeContent={favorite} showZero>
                           <IconsHeart onClick={navigateToFavorite} />
                        </MuiBadge>
                     </PositionContainer>
                     <MuiBadge badgeContent={basket} showZero>
                        <IconsBasket onClick={navigateToBasket} />
                     </MuiBadge>
                  </IconsForm>
               </ButtonContainer>
            </Line>
         </Headers>
      </>
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
const StyledModal = styled(Modal)`
   .MuiBox-root {
      width: 380px;
   }
`
const StyledButton = styled(Button)`
   padding: ${(props) => props.padding};
   font-size: 16px;
   text-transform: none;
   font-family: Inter;
   :hover {
      background: ${(props) => props.backgroundhover};
      color: white;
   }
   :active {
      color: white;
      background: ${(props) => props.backgroundactive};
   }
`
const AvatarImage = styled('img')`
   width: 24px;
   height: 24px;
   border-radius: 100%;
   cursor: pointer;
`
const PositionContainer = styled('div')`
   p {
      color: #292929;
   }
   position: relative;
`
const ExitTitleContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 8px;
   margin-bottom: 16px;
   p {
      margin: 0;
   }
`
const SecondButtonContainer = styled('div')`
   display: flex;
   gap: 12px;
   justify-content: flex-end;
`
const ExitTitle = styled('p')`
   color: #384255;
   font-family: Manrope;
   font-size: 16px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
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
      box-shadow: 0 0 10px rgba(133, 143, 164, 0.15);
   }
`

const CompareContainer = styled('div')`
   animation: ${(props) => (props.hover ? slideIn : slideOut)} 0.3s ease-in-out;
   position: absolute;
   right: -37px;
   top: 36px;
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

   button {
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
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
   input {
      :focus {
         transition: background-color 0.4s ease;
         background-color: #fff;
         ::placeholder {
            color: gray;
         }
         ~ svg path {
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
   cursor: pointer;
`
const AdgetariumTitle = styled('div')`
   font-size: 28.49px;
   color: #ffffff;
   font-family: 'Orbitron';
`
const TitleFixed = styled('div')`
   display: ${(props) => (props.fixed ? 'flex' : 'none')};
   align-items: center;
   cursor: pointer;
`
const CatalogSelect = styled('div')`
   position: absolute;
   z-index: 9999;
   left: ${(props) => (props.fixed ? '389px' : '')};
   top: ${(props) => (props.fixed ? '73px' : '148px')};
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
      box-shadow: 0 0 10px rgba(133, 143, 164, 0.15);
   }
`

const UserNumber = styled('div')`
   display: flex;
   align-items: center;
   color: #fff;

   p {
      margin-right: 1.875rem;
   }

   button {
      padding: 0px;
      margin: 0px;
      border: 0;
      background: none;
   }
`

const Input = styled('input')`
   width: 39.7vw;
   height: 2.5rem;
   border-radius: 0.625rem;
   border: 1px solid #fff;
   padding: 0.5rem 2.7rem 0.5rem 1.125rem;
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
const Select = styled('div')`
   display: flex;
   position: absolute;
   flex-direction: column;
   width: 8.875rem;
   height: 5.875rem;
   padding: 17px 20px 20px 20px;
   border-radius: 0.25rem;
   background: #fff;
   box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
   z-index: 99999;
   top: 1rem;
   right: 1rem;
   animation: fadeInOut 0.4s ease-in-out;

   @keyframes fadeInOut {
      0% {
         opacity: 0;
         transform: translateY(-10px);
      }
      100% {
         opacity: 1;
         transform: translateY(0);
      }
   }
`
const SelectParagraph = styled('p')`
   margin: 0;
   padding: 0;
   border-radius: 0.25rem;
   color: #292929;
   cursor: pointer;
   &:hover {
      color: #cb11ab;
      background: none;
   }
`
const SelectParagraph2 = styled('p')`
   margin: 0;
   padding: 0;
   margin-top: 1rem;
   color: #292929;
   cursor: pointer;
   &:hover {
      color: #cb11ab;
      background: none;
   }
`
const Select2 = styled('div')`
   position: absolute;
   left: -10rem;
   top: 1.3rem;
   width: 10.8125rem;
   border-radius: 0.25rem;
   background: #fff;
   box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
   z-index: 99;
   animation: fadeInOut 0.4s ease-in-out;
   display: flex;
   flex-direction: column;
   gap: 14px;
   padding: 20px 20px 20px 20px;
   p {
      color: #292929;
      cursor: pointer;
      margin: 0;
      width: 100%;
      :hover {
         color: #cb11ab !important;
      }
   }

   @keyframes fadeInOut {
      0% {
         opacity: 0;
         transform: translateY(-10px);
      }
      100% {
         opacity: 1;
         transform: translateY(0);
      }
   }
`
const PositionContainerForInput = styled('div')`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 8px;
`
const NavLinkParagraph = styled(NavLink)`
   text-decoration: none;
   color: #292929;
   cursor: pointer;
   &:hover {
      color: #cb11ab;
   }
`
