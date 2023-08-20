import { toast } from 'react-toastify'
import { Snackbar } from '../components/UI/snackbar/Snackbar'

export const useSnackbar = () => {
   const snackbarHandler = ({
      message = 'Successfully',
      linkText = '',
      path = '',
      type = 'success',
      timeClose = 2500,
   }) => {
      toast[type](
         <Snackbar message={message} linkText={linkText} path={path} />,
         {
            position: 'top-right',
            autoClose: timeClose,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            closeOnClick: true,
            progress: undefined,
            theme: 'dark',
            closeButton: false,
            newestOnTop: false,
            toastId: 'custom-id-yes',
         }
      )
   }

   return {
      snackbarHandler,
   }
}
