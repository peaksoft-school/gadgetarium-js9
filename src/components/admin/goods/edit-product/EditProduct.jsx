import { styled } from '@mui/material'
import { StageOfEditProduct } from './StageOfEditProduct'
import { EditProductPartOne } from './part-1/EditProductPartOne'

export const EditProduct = () => {
   return (
      <Container>
         <WidthContainer>
            <StageOfEditProduct title="Редактирование товара" pathNumber={1} />
            <EditProductPartOne />
         </WidthContainer>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 5.5556vh;
`
const WidthContainer = styled('div')`
   width: 89.583vw;
`
