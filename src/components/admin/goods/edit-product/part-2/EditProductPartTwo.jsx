import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { EditTable } from './table/EditTable'
import { Button } from '../../../../UI/Button'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { editActions } from '../../../../../store/edit.product/edit.product.slice'

export const EditProductPartTwo = ({ changePartPlus, changePartMinus }) => {
   const [value, setValue] = useState(false)
   const dispatch = useDispatch()
   const { snackbarHandler } = useSnackbar()
   const { isAllPartTwoChoosed } = useSelector((state) => state.editProduct)
   const openHandler = () => {
      setValue(true)
   }
   const closeHandler = () => {
      changePartMinus()
      setValue(false)
   }
   const finishPartTwo = (values) => {
      if (value) {
         const { quantity, price } = values
         if (!price) {
            snackbarHandler({
               message: 'Заполните название товара',
               type: 'error',
            })
            return
         }
         if (!quantity) {
            snackbarHandler({
               message: 'Заполните гарантию',
               type: 'error',
            })
            return
         }
         dispatch(editActions.getProductPrice(Number(price)))

         dispatch(editActions.getProductQuantity(Number(quantity)))
         dispatch(editActions.putProduct())
         changePartPlus()
      }
   }
   return (
      <Container>
         <EditTable onChange={finishPartTwo} value={value} />
         <ButtonContainer>
            <Button
               variant="outlined"
               padding="8px 24px"
               onClick={closeHandler}
               fontSize="16px"
               backgroundhover="#CB11AB"
               backgroundactive="#E313BF"
            >
               Назад
            </Button>
            {isAllPartTwoChoosed ? (
               <Button
                  onClick={openHandler}
                  variant="contained"
                  padding="8px 24px"
                  fontSize="16px"
               >
                  Далее
               </Button>
            ) : (
               ''
            )}
         </ButtonContainer>
      </Container>
   )
}
const Container = styled('div')`
   margin-top: 3.906vw;
`
const ButtonContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 28px;
`
