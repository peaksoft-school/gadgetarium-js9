import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/cross/small-cross-icon.svg'
import { ReactComponent as Triangle } from '../../../assets/icons/triangle.svg'

import {
   getFavoriteItems,
   postFavoriteItem,
} from '../../../store/favorite/favorite.thunk'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { Button } from '../../UI/Button'

export const FavoriteHover = () => {
   const { favoriteItems } = useSelector((state) => state.favorite)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { snackbarHandler } = useSnackbar()

   const deleteFavoriteHandler = async (id) => {
      dispatch(postFavoriteItem(id))
         .then(() => {
            dispatch(getFavoriteItems())
            snackbarHandler({
               message: 'Товар удален из избранных',
            })
         })
         .catch((error) => {
            console.error('Error dispatching postFavoriteItem:', error)
            snackbarHandler({ message: error.message, type: 'error' })
         })
   }
   const navigateToFavorite = () => {
      navigate('/favorite')
   }
   return (
      <Container>
         <StyledTriangle />
         <AllProductContainer>
            {favoriteItems?.map((el, index) => {
               console.log(el)
               if (index <= 1) {
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
               }
               return null
            })}
         </AllProductContainer>

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
      </Container>
   )
}
const Container = styled('div')`
   width: 26.042vw;
   height: min-content;
   background-color: white;
   border-radius: 5px;
   box-shadow: 0px 10px 30px 0px rgba(133, 143, 164, 0.1);
   padding: 2.037vh 1.042vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 20;
`
const Image = styled('img')`
   width: 60px;
   height: 68px;
`
const StyledTriangle = styled(Triangle)`
   position: absolute;
   bottom: 237px;
   left: 327px;
`
const AllProductContainer = styled('div')`
   margin-bottom: 1.4815vh;
   width: 100%;
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
