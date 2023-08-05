import { useSearchParams } from 'react-router-dom'
import { Button } from '../../UI/Button'
import { MailingModal } from './MailingModal'

export const MailingList = () => {
   const [openModal, setOpenModal] = useSearchParams()
   const closeModalHandler = () => {
      openModal.delete('openModal')
      setOpenModal(openModal)
   }
   const openModalHandler = () => {
      openModal.set('openModal', 'true')
      setOpenModal(openModal)
   }

   return (
      <>
         <Button
            variant="contained"
            background="#CB11AB"
            padding="12px 20px 12px 20px"
            onClick={openModalHandler}
         >
            Создать рассылку
         </Button>
         {openModal.has('openModal') && (
            <MailingModal open={openModal} handleClose={closeModalHandler} />
         )}
      </>
   )
}
export default MailingList
