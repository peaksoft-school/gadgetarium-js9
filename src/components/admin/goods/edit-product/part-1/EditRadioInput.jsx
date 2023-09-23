import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   styled,
} from '@mui/material'
import { useEffect, useState } from 'react'

export const EditRadioInput = ({
   onChangeProductWatchAndResRadio,
   productRadioText,
   radioData,
   label,
   value,
   error,
}) => {
   const [valueRadio, setValueRadio] = useState(value)

   useEffect(() => {
      setValueRadio(value)
   }, [value])

   const onChange = (event) => {
      const resValue = event.target.value

      if (resValue === 'true' || resValue === 'false') {
         onChangeProductWatchAndResRadio(productRadioText, JSON.parse(resValue))
      } else {
         onChangeProductWatchAndResRadio(productRadioText, resValue)
      }

      setValueRadio(resValue)
   }

   return (
      <Container error={error}>
         <StyledFormLabel>{label}</StyledFormLabel>
         <RadioGroup
            value={valueRadio === undefined ? '' : valueRadio}
            name={productRadioText}
            onChange={onChange}
         >
            <Box>
               {radioData.map((item) => (
                  <StyledFormControlLabel
                     key={item.id}
                     control={<StyledRadio />}
                     label={item.label}
                     value={item.value}
                  />
               ))}
            </Box>
         </RadioGroup>
      </Container>
   )
}

const Container = styled(FormControl)`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`

const Box = styled('div')`
   display: flex;
   gap: 30px;
`
const StyledFormLabel = styled(FormLabel)`
   color: #384255;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
`
const StyledFormControlLabel = styled(FormControlLabel)`
   margin-right: 0;
   .MuiTypography-root {
      color: #292929;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
   }
`
const StyledRadio = styled(Radio)`
   &:hover {
      color: #cb11ab;
   }

   width: 2rem;
   height: 1.6rem;
   margin-left: 6px;
`
