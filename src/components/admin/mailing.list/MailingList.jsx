import { useCustomSearchParams } from '../../../hooks/useCustomSearchParams'
import { Button } from '../../UI/Button'
import { MailingModal } from './MailingModal'

export const MailingList = () => {
   const { params, setParam, deleteParam } = useCustomSearchParams()

   const closeModalHandler = () => {
      deleteParam('openModal')
   }

   const openModalHandler = () => {
      setParam('openModal', 'true')
   }

   return (
      <>
         <Button
            variant="contained"
            background="#CB11AB"
            padding="1.11111vh 1.04164vw"
            fontSize="0.833333vw"
            borderRadius="2.875rem"
            textTransform="none"
            onClick={openModalHandler}
         >
            Создать рассылку
         </Button>
         {params.has('openModal') && (
            <MailingModal open={params} handleClose={closeModalHandler} />
         )}
      </>
   )
}
export default MailingList
