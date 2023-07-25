import { IconButton, InputAdornment, TextField, styled } from '@mui/material'
import { useState } from 'react'
import { ReactComponent as PaintIcon } from '../../../../assets/icons/paint.svg'
import { bgColor } from '../../../../utils/common/constants/constants'

export const InputColorPalette = () => {
   const [showColor, setShowColor] = useState(false)
   const [color, setColor] = useState('')

   const onChangeColorHandler = (e) => {
      setColor(e.target.value)
   }

   const onShowPalette = () => {
      setShowColor((prev) => !prev)
   }

   const onHandleColorClick = (color) => {
      setColor(color)
      setShowColor((prev) => !prev)
   }

   return (
      <Container>
         <div>
            <BoxLabel>
               <p>Основной цвет</p>

               <InputUI
                  placeholder="Основной цвет"
                  value={color}
                  onChange={onChangeColorHandler}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton
                              sx={{ padding: '4px' }}
                              onClick={onShowPalette}
                              size="large"
                           >
                              <PaintIcon />
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />
            </BoxLabel>
         </div>
         {showColor && (
            <ContainerColor>
               {bgColor.map((item) => (
                  <div key={item} className="box">
                     <BoxColor
                        onClick={() => onHandleColorClick(item)}
                        backgroundColor={item}
                     />
                  </div>
               ))}
            </ContainerColor>
         )}
      </Container>
   )
}

const Container = styled('div')`
   position: relative;
   width: 24.75rem;
`

const BoxLabel = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.38rem;
`

const InputUI = styled(TextField)`
   width: 24.75rem;

   .MuiInputBase-root {
      padding: 0;
   }

   input {
      padding: 0.42rem 0.62rem;
      width: 21rem;
      padding-right: 0;

      font-size: 0.9rem;
      font-style: normal;
      font-weight: 300;
      line-height: normal;

      ::placeholder {
         color: #666666;
      }
   }
`

const ContainerColor = styled('div')`
   position: absolute;
   width: 24.75rem;

   display: flex;
   justify-content: revert;
   flex-direction: column;
   align-items: revert;
   flex-wrap: wrap;
   height: 221px;
   gap: 3px;
   background-color: #fff;
   margin-top: 4px;
   z-index: 999;
`

const BoxColor = styled('div')`
   background-color: ${(props) => props.backgroundColor};
   width: 25px;
   height: 25px;
   margin: 0;
   cursor: pointer;
`
