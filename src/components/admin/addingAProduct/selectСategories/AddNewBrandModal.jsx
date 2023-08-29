import { styled } from '@mui/material'
import { Modal } from '../../../UI/Modal'
import { InputUi } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import PhotoUploader from './PhotoUploader'

export const AddNewBrandModal = ({ openModalAddNewBrand, onClose }) => {
   return (
      <Modal
         open={openModalAddNewBrand.has('AddingAProduct')}
         onClose={onClose}
      >
         <Container>
            <ModalBoxHeaderContent>
               <p>Добавление бренда</p>
            </ModalBoxHeaderContent>

            <div>
               <PhotoUploader />
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
                  />
               </BoxLabel>
            </div>
            <ContainerButton>
               <Button
                  variant="outlined"
                  padding="0.62rem 4.2rem"
                  backgroundHover="#CB11AB"
                  onClick={onClose}
               >
                  oтмeнить
               </Button>
               <Button variant="contained" padding="0.62rem 4.2rem">
                  отправить
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
