import { useSelector } from 'react-redux'
import { Button, styled } from '@mui/material'
import { ReactComponent as Plus } from '../../../../assets/icons/plus.svg'
import { QuantityOfProductsButton } from './QuantityOfProductsButton'

export const QuantityOfProducts = ({
   onCreateNewProduct,
   onProductNumRenderMap,
   productNum,
   deleteHandler,
}) => {
   const { newProduct } = useSelector((state) => state.addProduct)

   return (
      <Container>
         <Box>
            {newProduct?.subProductRequests?.map((item, index) => (
               <QuantityOfProductsButton
                  key={item.id}
                  id={item.id}
                  index={index}
                  newProduct={newProduct}
                  deleteHandler={deleteHandler}
                  onProductNumRenderMap={onProductNumRenderMap}
                  returnsTrueIfYouAreInTheCorrectProductPage={
                     index === productNum ? 'true' : 'false'
                  }
               />
            ))}

            {newProduct.subProductRequests.length !== 12 ? (
               <div>
                  <ButtonAddNewProduct
                     onClick={onCreateNewProduct}
                     variant="outlined"
                  >
                     <Plus />
                     <p>Добавить продукт</p>
                  </ButtonAddNewProduct>
               </div>
            ) : null}
         </Box>
      </Container>
   )
}

const Container = styled('div')`
   margin: 2.08rem 0;
`

const Box = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
   alignItems: 'center',
   fontStyle: 'normal',
   lineHeight: 'normal',
}))

const ButtonAddNewProduct = styled(Button)(({ theme }) => ({
   padding: '0.42rem 0.62rem',
   display: 'flex',
   alignItems: 'center',
   gap: '0.31rem',
   border: `1px solid #fff`,
   textTransform: 'capitalize',
   fontSize: '1rem',

   ':hover': {
      border: `1px solid ${theme.palette.primary.main}`,
   },

   p: {
      padding: 0,
      margin: 0,
   },
}))
