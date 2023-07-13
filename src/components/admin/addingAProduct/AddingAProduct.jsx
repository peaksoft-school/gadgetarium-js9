import { styled } from '@mui/material'
import { HeaderAddingAProduct } from './HeaderAddingAProduct'

export const AddingAProduct = () => {
   return (
      <Container>
         <HeaderAddingAProduct title="Добавление товара" pathNumber={1} />
      </Container>
   )
}

const Container = styled('div')(({ theme }) => ({
   paddingLeft: '6.25rem',
   marginTop: '1.88rem',
   fontFamily: theme.typography.mainFontFamily,
}))
