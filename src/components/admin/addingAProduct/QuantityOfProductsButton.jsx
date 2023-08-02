import { Button, Tooltip, styled } from '@mui/material'
import { useState } from 'react'

export const QuantityOfProductsButton = ({ item }) => {
   const [openDeleteButton, setOpenDeleteButton] = useState(false)
   console.log('openDeleteButton: ', openDeleteButton)

   const onContextMenuDeleteHandler = (event) => {
      event.preventDefault()

      setOpenDeleteButton(true)
   }

   const onBLurDeleteHandler = () => {
      setOpenDeleteButton(false)
   }

   return (
      <ContainerButtonDelete
         onClose={onBLurDeleteHandler}
         open={openDeleteButton}
         title={<button>d</button>}
         arrow
      >
         <ContainerButtonNum key={item.id}>
            <ButtonStyleNumber
               variant="outlined"
               onContextMenu={onContextMenuDeleteHandler}
               onBlur={onBLurDeleteHandler}
            >
               Продукт {item.numProduct}
            </ButtonStyleNumber>
         </ContainerButtonNum>
      </ContainerButtonDelete>
   )
}

const ContainerButtonNum = styled('div')`
   position: relative;
`

const ContainerButtonDelete = styled(Tooltip)`
   .MuiTooltip-tooltip {
      padding: 0;
      margin: 0;

      background-color: red;
   }

   button {
      margin: 0;
   }
`

const ButtonStyleNumber = styled(Button)(({ theme }) => ({
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
