import { Button as ButtonMui, Tooltip, styled } from '@mui/material'
import { useState } from 'react'
import { Button } from '../../UI/Button'

export const QuantityOfProductsButton = ({ index }) => {
   const [openDeleteButton, setOpenDeleteButton] = useState(false)

   const onContextMenuDeleteHandler = (event) => {
      event.preventDefault()

      setOpenDeleteButton(true)
   }

   const onBLurDeleteHandler = () => {
      setOpenDeleteButton(false)
   }

   const numProduct = index + 1

   return (
      <Container>
         <ButtonStyleNumber
            variant="outlined"
            onContextMenu={onContextMenuDeleteHandler}
            onBlur={onBLurDeleteHandler}
         >
            Продукт {numProduct}
         </ButtonStyleNumber>
         <TooltipStyle
            onClose={onBLurDeleteHandler}
            open={openDeleteButton}
            title={
               <Button
                  variant="outlined"
                  backgroundColor="#fff"
                  padding="0"
                  backgroundHover="#CB11AB"
               >
                  Delete
               </Button>
            }
         >
            <Box />
         </TooltipStyle>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
`

const Box = styled('div')`
   margin-top: 30px;
   position: absolute;

   span {
      display: none;
   }
`

const TooltipStyle = styled(({ className, ...props }) => (
   <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
   '& .MuiTooltip-tooltip': {
      padding: 0,
   },
}))

const ButtonStyleNumber = styled(ButtonMui)(({ theme }) => ({
   padding: '0.55rem 0.62rem',
   color: theme.palette.secondary.contrastText,
   fontFamily: theme.typography.mainFontFamily,
   border: `1px solid ${theme.palette.secondary.contrastText}`,
   textTransform: 'capitalize',
   fontWeight: 400,
   fontSize: '1rem',

   ':hover': {
      border: `1px solid ${theme.palette.secondary.contrastText}`,
   },
}))
