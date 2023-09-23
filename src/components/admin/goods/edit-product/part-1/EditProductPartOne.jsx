import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { FirstSelectContainer } from './FirstSelectContainer'
import { editFilterResComponent } from '../../../../../utils/helpers/AddFilterResComponent'
import { Button } from '../../../../UI/Button'
import { editActions } from '../../../../../store/edit.product/edit.product.slice'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

export const EditProductPartOne = ({ changePart }) => {
   const dispatch = useDispatch()
   const { product, isAllChoosed } = useSelector((state) => state.editProduct)
   const { snackbarHandler } = useSnackbar()
   const navigate = useNavigate()
   const [value, setValue] = useState(false)
   const toggleHandler = () => {
      setValue(!value)
   }
   const finishPartOne = (values) => {
      if (value) {
         const { name, guarantee, dateOfIssue } = values
         if (!name) {
            snackbarHandler({
               message: 'Заполните название товара',
               type: 'error',
            })
            return
         }
         if (!guarantee) {
            snackbarHandler({
               message: 'Заполните гарантию',
               type: 'error',
            })
            return
         }
         if (Number(guarantee) < 0) {
            snackbarHandler({
               message: 'Гарантия должна быть положительная',
               type: 'error',
            })
            return
         }

         dispatch(editActions.getProductName(name))

         dispatch(editActions.getGuarantee(guarantee))

         dispatch(
            editActions.getProductDate(dayjs(dateOfIssue).format('YYYY-MM-DD'))
         )
         changePart()
      }
   }

   useEffect(() => {
      dispatch(editActions.getAllChoose())
   }, [product])
   return (
      <Container>
         <FirstSelectContainer value={value} onChange={finishPartOne} />
         {editFilterResComponent(product)}
         <ButtonContainer>
            <Button
               variant="outlined"
               padding="8px 24px"
               fontSize="16px"
               backgroundhover="#CB11AB"
               backgroundactive="#E313BF"
               onClick={() => navigate(-1)}
            >
               Назад
            </Button>
            {isAllChoosed && (
               <Button
                  onClick={toggleHandler}
                  variant="contained"
                  padding="8px 24px"
                  fontSize="16px"
               >
                  Далее
               </Button>
            )}
         </ButtonContainer>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 3rem;
   margin-top: 5.5556vh;
   margin-bottom: 120px;
`
const ButtonContainer = styled('div')`
   width: 396px;
   display: flex;
   justify-content: space-between;
`
