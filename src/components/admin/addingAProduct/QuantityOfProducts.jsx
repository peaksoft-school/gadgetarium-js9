import { Button, styled } from '@mui/material'
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg'
import { QuantityOfProductsButton } from './QuantityOfProductsButton'

export const QuantityOfProducts = ({ onCreateNewProduct, newProduct }) => {
   return (
      <Container>
         <Box>
            {newProduct.subProductRequests.map((_, index) => {
               const id = index + 1
               return <QuantityOfProductsButton key={id} index={index} />
            })}

            <div>
               <ButtonAddNewProduct
                  onClick={onCreateNewProduct}
                  variant="outlined"
               >
                  <Plus />
                  <p>Добавить продукт</p>
               </ButtonAddNewProduct>
            </div>
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
