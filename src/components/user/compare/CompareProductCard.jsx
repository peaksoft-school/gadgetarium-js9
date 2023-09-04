import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Button } from '../../UI/Button'
import DeleteButton from '../../UI/icon.button/DeleteButton'
import { ReactComponent as BasketIcon } from '../../../assets/icons/basket-icon.svg'
import { postBasketById } from '../../../store/basket/basket.thunk'
import { useSnackbar } from '../../../hooks/useSnackbar'

export const CompareProductCard = ({
   prodName,
   price,
   image,
   id,
   deleteHandler,
   ...props
}) => {
   const dispatch = useDispatch()
   const { snackbarHandler } = useSnackbar()
   const cardHandler = (id) => {
      console.log(id)
   }
   return (
      <Container {...props} onClick={cardHandler}>
         <DeleteContainer>
            <DeleteButton onClick={() => deleteHandler(id)} />
         </DeleteContainer>
         <Image src={image} alt="" />
         <Title>{prodName}</Title>
         <Price>
            {price.toLocaleString()} <span>с</span>
         </Price>
         <Button
            padding="1.1111vh 1.875vw"
            variant="contained"
            texttransform="uppercase"
            fontSize="0.729vw"
            onClick={() => dispatch(postBasketById({ id, snackbarHandler }))}
         >
            <StyledBasketIcon /> В корзину
         </Button>
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
