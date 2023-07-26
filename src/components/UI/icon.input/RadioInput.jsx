import {
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   styled,
} from '@mui/material'
import { useState } from 'react'

const RadioInput = ({
   onChangeProductWatchAndResRadio,
   productRadioText,
   radioData,
   label,
}) => {
   const [value, setValue] = useState('')

   const onChange = (event) => {
      const resValue = event.target.value

      onChangeProductWatchAndResRadio(productRadioText, resValue)

      setValue(resValue)
   }

   return (
      <Container>
         <FormLabel>{label}</FormLabel>
         <RadioGroup value={value} onChange={onChange}>
            <Box>
               {radioData.map((item) => (
                  <FormControlLabel
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

export default RadioInput

const Container = styled(FormControl)`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`

const Box = styled('div')`
   display: flex;
   gap: 1.88rem;
`

const StyledRadio = styled(Radio)`
   &:hover {
      color: #cb11ab;
   }

   width: 2rem;
   height: 1.6rem;
   margin-left: 6px;
`
