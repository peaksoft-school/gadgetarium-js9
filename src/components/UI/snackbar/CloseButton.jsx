import IconButton from '@mui/material/IconButton'
import { ReactComponent as SnackbarDeleteIcon } from '../../../assets/icons/snackbarDelete.svg'

export const CloseButton = ({ closeToast }) => {
   return (
      <IconButton onClick={closeToast}>
         <SnackbarDeleteIcon />
      </IconButton>
   )
}
