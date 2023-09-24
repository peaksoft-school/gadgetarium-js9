import { IconButton, InputAdornment, TextField, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { ReactComponent as PaintIcon } from '../../../../../assets/icons/paint.svg'
import { bgColor } from '../../../../../utils/common/constants/constantsAdminAddNewProduct'

export const EditColorInput = ({ productColor, stateColor, error }) => {
   const [showColor, setShowColor] = useState(false)
   const [color, setColor] = useState(stateColor)

   useEffect(() => {
      if (stateColor === '') {
         setColor('')
      } else {
         setColor(stateColor)
      }
   }, [stateColor])

   const onChangeColorHandler = (e) => {
      const newColor = e.target.value

      setColor(newColor)
      productColor(newColor)
   }

   const onShowPalette = () => {
      setShowColor((prev) => !prev)
   }

   const onHandleColorClick = (newColor) => {
      productColor(newColor)
      setColor(newColor)
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
                  error={error}
                  onChange={onChangeColorHandler}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <CubColor color={color} />
                           <IconButton
                              sx={{ padding: '4px', marginRight: '5px' }}
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

const CubColor = styled('div')(({ color }) => ({
   backgroundColor: color,
   width: '20px',
   height: '18px',
   borderRadius: '2px',

   border: `1px solid ${color === '#FFFFFF' && '#CB11AB'}`,
}))

const BoxLabel = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 10px;

   p {
      color: #384255;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 0;
   }
`

const InputUI = styled(TextField)`
   width: 24.75rem;

   .MuiInputBase-root {
      padding: 0;
   }

   input {
      height: 25.585px;
      padding: 0.42rem 0.875rem;
      width: 21rem;
      padding-right: 0;
      color: #292929;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: Inter;

      ::placeholder {
         color: #292929;
         opacity: 0.8;
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
