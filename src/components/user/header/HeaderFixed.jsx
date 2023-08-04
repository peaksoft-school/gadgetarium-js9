import { styled, Badge, Button, Stack } from '@mui/material'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { ReactComponent as ShoppingCart } from '../../../assets/icons/comparison-icon.svg'
import { ReactComponent as Heart } from '../../../assets/icons/favourites-icon.svg'
import { ReactComponent as Basket } from '../../../assets/icons/basket-icon.svg'
import { ReactComponent as Menu } from '../../../assets/icons/catalog-icon.svg'

export const HeaderFixed = ({
   value,
   onChange,
   favorite,
   comparison,
   basket,
}) => {
   return (
      <Header>
         <HeaderContainer>
            <HeaderInputContainer>
               <Title>
                  <GadgeteriumContainer>
                     <GIcons>G</GIcons>
                  </GadgeteriumContainer>
                  <a href="./">adgetarium</a>
               </Title>
               <Stack spacing={2} width={136} direction="row">
                  <Btn variant="contained">
                     <Menu />
                     <p>Каталог</p>
                  </Btn>
               </Stack>
               <Border />
               <FormInput>
                  <Input
                     className={value ? 'hasText' : ''}
                     value={value}
                     onChange={onChange}
                     placeholder="Поиск по каталогу магазина  "
                     type="text"
                  />
                  <StyledVector />
               </FormInput>
            </HeaderInputContainer>
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
         </HeaderContainer>
      </Header>
   )
}
const Header = styled('header')`
   width: 100%;
   height: 95px;
   background-color: #1a1a25;
   position: fixed;
   display: flex;
   justify-content: space-around;
   align-items: center;
   z-index: 999;
   top: 0;
`
const HeaderContainer = styled('div')`
   width: 85.35vw;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
const HeaderInputContainer = styled('div')`
   display: flex;
   align-items: center;
   width: 55.23vw;
   gap: 1.875rem;
`
const FormInput = styled('form')`
   display: flex;
   position: relative;
   align-items: center;
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
const Title = styled('div')`
   display: flex;
   a {
      color: #fff;
      font-family: Orbitron;
      font-size: 1.75rem;
      text-decoration: none;
   }
`
const GadgeteriumContainer = styled('div')`
   width: 35px;
   height: 35px;
   background-color: #cb11ab;
   margin-right: 2.5px;
   display: flex;
   align-items: center;
   justify-content: center;
`
const GIcons = styled('p')`
   color: #fff;
   font-family: Outfit;
   font-size: 32.053px;
   font-style: normal;
   font-weight: 700;
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
const Input = styled('input')`
   width: 39.7vw;
   height: 2.5rem;
   border-radius: 0.625rem;
   border: 1px solid #fff;
   padding: 0.5rem 1.125rem 0.5rem 1.125rem;
   background-color: #1a1a25;
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
   cursor: pointer;
`
const IconsForm = styled('div')`
   display: flex;
   align-items: center;
   width: 9rem;
   justify-content: space-between;
   margin-right: 10px;
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
const IconsShopingCart = styled(ShoppingCart)`
   cursor: pointer;
   &:hover {
      path {
         fill: #ff00d4;
      }
   }
`
const Border = styled('div')`
   border-right: 1px solid #2b2f36;
   height: 2.5rem;
`
const MuiBadg = styled(Badge)`
   .MuiBadge-badge {
      background-color: ${(props) =>
         props.badgeContent === 0 ? 'gray' : 'red'};
      color: #fff;
   }
`
