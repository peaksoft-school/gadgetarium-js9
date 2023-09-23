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
            padding="12px 20px"
            borderradius="2.875rem"
            texttransform="none"
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
