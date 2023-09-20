import { styled } from '@mui/material'
import { InputUi } from '../../../../UI/Input'

export const EditInput = ({ label, type, handleChange, error, value }) => {
   return (
      <Container>
         <BoxLabel>
            {label} <span>*</span>
         </BoxLabel>
         <InputUi
            type={type}
            padding="0.5rem 0"
            placeholder="Введите гарантию товара"
            width="24.75rem"
            height="39px"
            min={1}
            max={3}
            value={value}
            name="guarantee"
            onChange={handleChange}
            error={error}
         />
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 10px;
`
const BoxLabel = styled('p')`
   color: #384255;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   margin: 0;
   span {
      color: #ff0000;
   }
`
