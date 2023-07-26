import { Button, styled } from '@mui/material'
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg'

export const QuantityOfProducts = ({ onCreateNewProduct, newProduct }) => {
   return (
      <Container>
         <Box>
            {newProduct.productData.map((item) => (
               <div key={item.id}>
                  <ButtonStyleNumber variant="outlined">
                     Продукт {item.numProduct}
                  </ButtonStyleNumber>
               </div>
            ))}
            <div>
               <ButtonAddNewProduct
                  onClick={onCreateNewProduct}
                  variant="outlined"
               >
                  <Plus /> <p>Добавить продукт</p>
               </ButtonAddNewProduct>
            </div>
         </Box>
      </Container>
   )
}

const Container = styled('div')`
   margin: 2.08rem 0;
`

const Box = styled('div')(({ theme }) => ({
   display: 'flex',
   gap: '1rem',
   alignItems: 'center',
   fontFamily: theme.typography.mainFontFamily,
   fontStyle: 'normal',
   lineHeight: 'normal',
}))

const ButtonStyleNumber = styled(Button)(({ theme }) => ({
   padding: '0.55rem 0.62rem',
   color: theme.palette.secondary.contrastText,
   border: `1px solid ${theme.palette.secondary.contrastText}`,
   textTransform: 'capitalize',
   fontSize: '1rem',

   ':hover': {
      border: `1px solid ${theme.palette.secondary.contrastText}`,
   },
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

   '.plus': {
      fontSize: '1.5rem',
   },
}))
