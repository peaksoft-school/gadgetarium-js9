import React from 'react'
import { CircularProgress, styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as DeleteIcon } from '../../assets/icons/cross/small-cross-icon.svg'
import { ReactComponent as Triangle } from '../../assets/icons/triangle.svg'
import { postCompareProduct } from '../../store/compare/compare.thunk'
import { postFavoriteItem } from '../../store/favorite/favorite.thunk'
import { Button } from './Button'

export const ProductsModalWhenIsHovered = ({
   path,
   favorite,
   array,
   onClose,
}) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const location = useLocation()
   const { isLoadingFavorite } = useSelector((state) => state.favorite)
   const { isLoadingComparison } = useSelector((state) => state.compare)
   const deleteFavoriteHandler = (id) => {
      if (favorite) {
         dispatch(postFavoriteItem({ id, favoriteState: true, pageSize: 5 }))
      } else {
         dispatch(
            postCompareProduct({
               id,
               addOrDelete: false,
               pageSize: 5,
            })
         )
      }
   }
   const navigateToFavorite = () => {
      onClose()
      navigate(path)
   }
   if (location.pathname === path) {
      return null
   }

   return (
      <PositionContainer length={array?.length}>
         <StyledTriangle />
         <Container length={array?.length}>
            <AllProductContainer length={array?.length}>
               {array?.map((el) => {
                  return (
                     <Product
                        onClick={() =>
                           navigate(favorite ? '/favorite' : '/compare')
                        }
                        key={el.subProductId}
                     >
                        <ProductContainer>
                           <Image src={el.image} alt="Photo" />
                           <Title>{el.name}</Title>
                           <Price>{el.price.toLocaleString()} с</Price>
                        </ProductContainer>
                        <StyledDeleteIcon
                           onClick={(e) => {
                              e.stopPropagation()
                              deleteFavoriteHandler(el.subProductId)
                           }}
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
                  backgroundhover="#E313BF"
                  backgroundactive="#C90EA9"
                  onClick={navigateToFavorite}
               >
                  {isLoadingFavorite ? (
                     <CircularProgress size={15} sx={{ color: 'white' }} />
                  ) : (
                     'Перейти в избранное'
                  )}
               </Button>
            ) : (
               <Button
                  variant="contained"
                  fontSize="0.833vw"
                  padding="0.625vw 1.563vw"
                  backgroundhover="#E313BF"
                  backgroundactive="#C90EA9"
                  onClick={navigateToFavorite}
               >
                  {isLoadingComparison ? (
                     <CircularProgress size={15} sx={{ color: 'white' }} />
                  ) : (
                     'Сравнить'
                  )}
               </Button>
            )}
         </Container>
      </PositionContainer>
   )
}
const Container = styled('div')`
   width: 26.042vw;
   height: min-content;
   background-color: white;
   border-radius: 5px;
   box-shadow: 0px 10px 30px 0px rgba(133, 143, 164, 0.1);
   padding: 2.037vh 0 2.037vh 1.042vw;
   padding-right: ${(props) => (props.length < 3 ? '1.042vw' : '0')};
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 20;
`
const Image = styled('img')`
   width: 60px;
   height: 68px;
`
const PositionContainer = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   position: relative;
   bottom: 5px;
   display: ${(props) => (props.length === 0 ? 'none' : 'display')};
`
const StyledTriangle = styled(Triangle)`
   position: absolute;
   top: -26px;
   margin-right: 25px;
`
const AllProductContainer = styled('div')`
   margin-bottom: 1.4815vh;
   width: 100%;
   height: ${(props) => (props.length > 1 ? '177.6px' : 'auto')};
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
   position: relative;
   z-index: 19;
   justify-content: space-between;
   cursor: pointer;
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
   z-index: 22;
`
