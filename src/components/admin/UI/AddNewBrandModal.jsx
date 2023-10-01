import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../UI/Modal'
import { InputUi } from '../../UI/Input'
import { Button } from '../../UI/Button'
import PhotoUploader from '../addingAProduct/partOne/selectСategories/PhotoUploader'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { postBrand } from '../../../store/addProduct/addProduct.thunk'

export const AddNewBrandModal = ({ openModalAddNewBrand, onClose }) => {
   const dispatch = useDispatch()
   const [brandValue, setBrandValue] = useState('')
   const { brandImg } = useSelector((state) => state.addProduct)
   const { snackbarHandler } = useSnackbar()
   const [validError, setValidError] = useState(false)

   const onToSendHandler = () => {
      const data = {
         name: brandValue,
         image: brandImg,
      }

      if (data.image !== '' && data.name !== '') {
         dispatch(postBrand({ data, snackbarHandler }))
         setValidError(false)
         onClose()
      }

      if (data.image === '' || data.name === '') {
         snackbarHandler({
            message: 'Bce поле должны быть заполнены',
            type: 'error',
         })

         setValidError(true)
      }
   }

   return (
      <Modal open={openModalAddNewBrand} onClose={onClose} padding="1.6vw 1vw">
         <Container>
            <ModalBoxHeaderContent>
               <p>Добавление бренда</p>
            </ModalBoxHeaderContent>

            <div>
               <PhotoUploader error={validError && brandImg === ''} />
            </div>

            <div>
               <BoxLabel>
                  <p>
                     Название бренда <span>*</span>
                  </p>

                  <InputUi
                     type="text"
                     padding="0.5rem 0"
                     placeholder="Введите название бренда"
                     width="28rem"
                     height="2.6rem"
                     value={brandValue}
                     onChange={(e) => setBrandValue(e.target.value)}
                     error={validError && brandValue === ''}
                  />
               </BoxLabel>
            </div>
            <ContainerButton>
               <Button
                  variant="outlined"
                  padding="0.62rem 4.2rem"
                  backgroundhover="#CB11AB"
                  onClick={onClose}
               >
                  ОТМЕНИТЬ
               </Button>
               <Button
                  variant="contained"
                  padding="0.62rem 4.2rem"
                  onClick={onToSendHandler}
               >
                  ОТПРАВИТЬ
               </Button>
            </ContainerButton>
         </Container>
      </Modal>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   padding: 2.5rem 2rem;
`

const ModalBoxHeaderContent = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '2.25rem',

   p: {
      color: theme.palette.primary.mainContrastText,
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 500,
      margin: 0,
   },
}))

const ContainerButton = styled('div')`
   display: flex;
   gap: 1.25rem;
`

const BoxLabel = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.38rem;

   p {
      margin: 0;
      padding: 0;
   }

   span {
      color: #ff0000;
   }
`
