import { toast } from 'react-toastify'
import { Snackbar } from '../components/UI/snackbar/Snackbar'

export const useSnackbar = () => {
   const snackbarHandler = ({
      message = 'Successfully',
      linkText = '',
      path = '',
      type = 'success',
   }) => {
      toast[type](
         <Snackbar message={message} linkText={linkText} path={path} />,
         {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            closeOnClick: false,
            progress: undefined,
            theme: 'dark',
            closeButton: false,
            toastId: 'custom-id-yes',
         }
      )
   }

   return {
      snackbarHandler,
   }
}
