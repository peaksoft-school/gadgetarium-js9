import { IconButton, InputAdornment, TextField, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { ReactComponent as PaintIcon } from '../../../../assets/icons/paint.svg'
import { bgColor } from '../../../../utils/common/constants/constantsAdminAddNewProduct'

export const InputColorPalette = ({ productColor, stateColor }) => {
   const [showColor, setShowColor] = useState(false)
   const [color, setColor] = useState(stateColor)

   useEffect(() => {
      if (stateColor === '') {
         setColor('')
      }

      setColor(stateColor)
   }, [stateColor])

   const onChangeColorHandler = (e) => {
      setColor(e.target.value)

      productColor(color)
   }

   const onShowPalette = () => {
      setShowColor((prev) => !prev)
   }

   const onHandleColorClick = (color) => {
      productColor(color)
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

   p {
      margin: 0;
   }
`

const InputUI = styled(TextField)`
   width: 24.75rem;

   .MuiInputBase-root {
      padding: 0;
   }

   input {
      padding: 0.42rem 0.875rem;
      width: 21rem;
      padding-right: 0;

      font-size: 1.1rem;
      font-style: normal;
      font-weight: 300;
      line-height: normal;

      ::placeholder {
         color: rgba(0, 0, 0, 0.6) !important;
         opacity: 1;
         font-family: Ubuntu;
         font-weight: 400;
         font-size: 1rem;
         line-height: 1.4375em;
      }
   }
`

const ContainerColor = styled('div')(({ theme }) => ({
   position: 'absolute',
   width: '24.75rem',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   flexWrap: 'wrap',
   height: '184px',
   gap: '3px',
   backgroundColor: '#fff',
   marginTop: '4px',
   zIndex: '555',
   border: `1px solid ${theme.palette.primary.main}`,
   borderRadius: '2px',
}))

const BoxColor = styled('div')`
   background-color: ${(props) => props.backgroundColor};
   width: 23px;
   height: 23px;
   margin: 0;
   cursor: pointer;
`
