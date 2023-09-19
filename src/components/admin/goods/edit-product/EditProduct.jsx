import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   styled,
} from '@mui/material'
import { useState } from 'react'
import { categoryProduct } from '../../../../utils/common/constants/constantsAdminAddNewProduct'

export const EditProduct = () => {
   const [age, setAge] = useState('')
   const handleChange = (event) => {
      setAge(event.target.value)
   }
   return (
      <Container>
         <WidthContainer>
            <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">Age</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
               >
                  {categoryProduct.subcategory.map((el) => {
                     return (
                        <MenuItem key={el.id} value={el.name}>
                           {el.name}
                        </MenuItem>
                     )
                  })}
               </Select>
            </FormControl>
         </WidthContainer>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: center;
`
const WidthContainer = styled('div')`
   width: 89.583vw;
`
