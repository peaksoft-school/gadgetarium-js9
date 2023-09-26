import { styled } from '@mui/material'
import { InputUi } from '../../../UI/Input'

export const ProfileInput = ({
   label,
   type,
   onChange,
   error,
   value,
   name,
   width,
}) => {
   return (
      <Container>
         <BoxLabel>
            {label} <span>*</span>
         </BoxLabel>
         <StyledInputUi
            type={type}
            padding="0.5rem 0"
            classpadding="11px 12px"
            placeholder={label}
            height="48px"
            width={width || '338px'}
            value={value}
            name={name}
            onChange={onChange}
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
const StyledInputUi = styled(InputUi)`
   font-family: Inter;
   color: #292929;
   font-weight: 400;
   font-size: 1rem;
   line-height: 1.4375em;
   input {
      ::placeholder {
         font-family: Inter;
         color: #292929;
         opacity: 0.8;
         font-weight: 400;
         font-size: 1rem;
         line-height: 1.4375em;
      }
   }
`
