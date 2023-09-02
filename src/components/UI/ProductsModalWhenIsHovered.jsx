import React from 'react'
import { styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ReactComponent as DeleteIcon } from '../../assets/icons/cross/small-cross-icon.svg'
import { ReactComponent as Triangle } from '../../assets/icons/triangle.svg'

// import { postFavoriteItem } from '../../store/favorite/favorite.thunk'
import { Button } from './Button'
import { postCompareProduct } from '../../store/compare/compare.thunk'

export const ProductsModalWhenIsHovered = React.memo(
   ({ path, favorite, array }) => {
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const location = useLocation()

      const deleteFavoriteHandler = async (id) => {
         if (favorite) {
            // dispatch(postFavoriteItem({ id }))
         } else {
            dispatch(postCompareProduct({ id, addOrDelete: false }))
         }
      }
      const navigateToFavorite = () => {
         navigate(path)
      }
      if (location.pathname === path) {
         return null
      }

      return (
         <Container length={array?.length}>
            <StyledTriangle length={array?.length} />
            <AllProductContainer>
               {array?.map((el) => {
                  return (
                     <Product key={el.subProductId}>
                        <ProductContainer>
                           <Image src={el.image} alt="Photo" />
                           <Title>{el.name}</Title>
                           <Price>{el.price.toLocaleString()} с</Price>
                        </ProductContainer>
                        <StyledDeleteIcon
                           onClick={() =>
                              deleteFavoriteHandler(el.subProductId)
                           }
                        />
                     </Product>
                  )
               })}
            </AllProductContainer>
            {favorite ? (
               <Button
                  variant="contained"
                  fontSize="0.833vw"
                  padding="0.625vw 1.563vw"
                  backgroundHover="#E313BF"
                  backgroundActive="#C90EA9"
                  marginTop="16px"
                  onClick={navigateToFavorite}
               >
                  Перейти в избранное
               </Button>
            ) : (
               <Button
                  variant="contained"
                  fontSize="0.833vw"
                  padding="0.625vw 1.563vw"
                  backgroundHover="#E313BF"
                  backgroundActive="#C90EA9"
                  marginTop="16px"
                  onClick={navigateToFavorite}
               >
                  Сравнить
               </Button>
            )}
         </Container>
      )
   }
)
ProductsModalWhenIsHovered.displayName = 'ProductsModalWhenIsHovered'
const Container = styled('div')`
   width: 26.042vw;
   height: min-content;
   background-color: white;
   border-radius: 5px;
   box-shadow: 0px 10px 30px 0px rgba(133, 143, 164, 0.1);
   padding: 2.037vh 0 2.037vh 1.042vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 20;
   display: ${(props) => (props.length === 0 ? 'none' : 'display')};
`
const Image = styled('img')`
   width: 60px;
   height: 68px;
`
const StyledTriangle = styled(Triangle)`
   position: absolute;
   bottom: ${(props) => {
      switch (props.length) {
         case 0:
            return '59px'
         case 1:
            return '148px'
         default:
            return '237px'
      }
   }};
   left: 327px;
`
const AllProductContainer = styled('div')`
   margin-bottom: 1.4815vh;
   width: 100%;
   height: 177.6px;
   overflow-y: auto;
   ::-webkit-scrollbar {
      scroll-margin-left: 1px;
   }
`
const Price = styled('p')`
   font-family: Inter;
   font-size: 0.729vw;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   color: #384255;
   margin: 0;
`
const Product = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin-top: 10px;
   padding-bottom: 10px;
   border-radius: 1px;
   border-bottom: 1px solid #e8e8e8;
`
const ProductContainer = styled('div')`
   display: flex;
   gap: 0.625vw;
`
const Title = styled('p')`
   margin: 0;
   width: 13.281vw;
   color: #292929;
   font-family: Inter;
   font-size: 0.833vw;
   font-style: normal;
   font-weight: 400;
   text-transform: capitalize;
   line-height: 150%;
`
const StyledDeleteIcon = styled(DeleteIcon)`
   cursor: pointer;
   width: 0.521vw;
   height: 0.521vw;
   margin-top: 4px;
`
