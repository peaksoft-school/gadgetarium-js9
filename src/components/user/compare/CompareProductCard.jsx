import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../UI/Button'
import DeleteButton from '../../UI/icon.button/DeleteButton'
import { ReactComponent as BasketIcon } from '../../../assets/icons/basket-icon.svg'
import { postBasketById } from '../../../store/basket/basket.thunk'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { infoPageActions } from '../../../store/informationPhone/infoPageSlice'
import { getCompare } from '../../../store/compare/compare.thunk'

export const CompareProductCard = ({
   prodName,
   price,
   image,
   id,
   deleteHandler,
   productId,
   color,
   inBasket,
   productName,
   ...props
}) => {
   const dispatch = useDispatch()
   const { snackbarHandler } = useSnackbar()
   const navigate = useNavigate()
   const cardHandler = () => {
      navigate(`/product/${productId}/details`)
      dispatch(infoPageActions.changeSubProductColor(color))
   }
   const postBasketHandler = () => {
      dispatch(postBasketById({ id, snackbarHandler }))
         .unwrap()
         .then(() => {
            dispatch(getCompare(productName))
         })
   }
   return (
      <Container {...props}>
         <DeleteContainer>
            <DeleteButton onClick={() => deleteHandler(id)} />
         </DeleteContainer>
         <Image onClick={cardHandler} src={image} alt="" />
         <Title>{prodName}</Title>
         <Price>
            {price.toLocaleString()} <span>с</span>
         </Price>
         {inBasket ? (
            <StyledButton
               padding="1.1111vh 1.875vw"
               variant="contained"
               texttransform="uppercase"
               fontSize="0.729vw"
               onClick={() => navigate('/basket')}
            >
               <StyledBasketIcon /> В корзинe
            </StyledButton>
         ) : (
            <Button
               padding="1.1111vh 1.875vw"
               variant="contained"
               texttransform="uppercase"
               fontSize="0.729vw"
               onClick={postBasketHandler}
            >
               <StyledBasketIcon /> В корзину
            </Button>
         )}
      </Container>
   )
}
const Container = styled('div')`
   width: 11.406vw;
   background: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid #e8e8e8;
   border-radius: 4px;
   cursor: pointer;
   :hover {
      box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.1),
         0px -8px 25px 0px rgba(13, 13, 13, 0.1);
   }
   padding-bottom: 1.8519vh;
`
const DeleteContainer = styled('div')`
   margin-top: 1.1111vh;
   margin-right: 0.625vw;
   display: flex;
   justify-content: flex-end;
   width: 100%;
`
const StyledButton = styled(Button)`
   background: #2fc509;
   :hover {
      background: #2fc509;
   }
   :active {
      background: #2fc509;
   }
`
const Title = styled('p')`
   color: #292929;
   margin-top: 1.6667vh;
   margin-bottom: 0.7407vh;
   font-family: Inter;
   font-size: 0.729vw;
   font-style: normal;
   font-weight: 500;
   line-height: 140%;
   width: 9.271vw;
   text-align: left;
   text-transform: capitalize;
`
const Image = styled('img')`
   width: 8.039vw;
   height: 8.854vw;
   object-fit: cover;
`
const Price = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 700;
   line-height: 140%;
   margin: 0;
   margin-bottom: 1.1111vh;
   text-align: left;
   padding: 0 1.016vw;
   width: 100%;
   span {
      text-decoration-line: underline;
   }
`
const StyledBasketIcon = styled(BasketIcon)`
   width: 1.25vw;
   height: 1.25vw;
`
