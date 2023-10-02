import { Button as ButtonMui, Tooltip, styled } from '@mui/material'
import { useState } from 'react'
import { Button } from '../../../UI/Button'

export const QuantityOfProductsButton = ({
   id,
   index,
   newProduct,
   deleteHandler,
   onProductNumRenderMap,
   returnsTrueIfYouAreInTheCorrectProductPage,
}) => {
   const [openDeleteButton, setOpenDeleteButton] = useState(false)

   const onContextMenuDeleteHandler = (event) => {
      event.preventDefault()

      setOpenDeleteButton(true)
   }

   const onDeleteSubProductHandler = () => {
      deleteHandler(id)
   }

   const onCloseDeleteHandler = () => {
      setOpenDeleteButton(false)
   }

   const numProduct = index + 1

   const idTransmitterHandler = () => {
      onProductNumRenderMap(index)
   }

   return (
      <Container>
         <ButtonStyleNumber
            variant="outlined"
            onContextMenu={onContextMenuDeleteHandler}
            onClick={idTransmitterHandler}
            boolean={returnsTrueIfYouAreInTheCorrectProductPage}
         >
            Продукт {numProduct}
         </ButtonStyleNumber>
         {newProduct.subProductRequests.length > 1 ? (
            <TooltipStyle
               open={openDeleteButton}
               onClose={onCloseDeleteHandler}
               title={
                  <Button
                     variant="outlined"
                     backgroundcolor="#fff"
                     padding="0"
                     backgroundhover="#CB11AB"
                     onClick={onDeleteSubProductHandler}
                  >
                     Delete
                  </Button>
               }
            >
               <Box />
            </TooltipStyle>
         ) : null}
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

const ButtonStyleNumber = styled(ButtonMui)(({ theme, boolean }) => ({
   padding: '0.55rem 0.62rem',
   color:
      boolean === 'true'
         ? theme.palette.primary.main
         : theme.palette.secondary.contrastText,
   fontFamily: theme.typography.mainFontFamily,
   border: `1px solid ${
      boolean === 'true'
         ? theme.palette.primary.main
         : theme.palette.secondary.contrastText
   }`,
   textTransform: 'capitalize',
   fontWeight: 400,
   fontSize: '1rem',

   ':hover': {
      border: `1px solid ${
         boolean === 'true'
            ? theme.palette.primary.main
            : theme.palette.secondary.contrastText
      }`,
   },
}))
