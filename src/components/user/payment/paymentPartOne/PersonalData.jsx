import { styled } from '@mui/material'
import { useEffect } from 'react'
import { InputUi } from '../../../UI/Input'
import { Button } from '../../../UI/Button'

export const PersonalData = ({ onNextHandler, formik, delivery }) => {
   const formatTelephone = (value) => {
      const formattedValue = value.replace(/\D/g, '') // Удалить все нецифровые символы
      if (formattedValue.length >= 1) {
         return `+${formattedValue.slice(0, 3)} (${formattedValue.slice(
            3,
            6
         )}) ${formattedValue.slice(6, 8)}-${formattedValue.slice(
            8,
            10
         )}-${formattedValue.slice(10)}`
      }
      return ''
   }

   const handleTelephoneChange = (e) => {
      const formattedValue = formatTelephone(e.target.value)
      formik.handleChange(e)
      formik.setFieldValue('telephone', formattedValue, false)
   }

   useEffect(() => {
      const formattedValue = formatTelephone(formik.values.telephone)

      if (formattedValue !== formik.values.telephone) {
         formik.setFieldValue('telephone', formattedValue, false)
      }
   }, [formik.values.telephone])

   const { firstName, lastName, email, telephone } = formik.errors

   const address = delivery === false ? formik.values.address === '' : false

   return (
      <Container>
         <p>Личные данные</p>

         <Form>
            <ContainerInput>
               <BoxInput>
                  <Label>
                     <span className="label-text">Имя</span>
                     <Input
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        type="text"
                        name="firstName"
                        placeholder="Напишите вашу фамилию"
                        error={Boolean(firstName)}
                     />
                  </Label>

                  <Label>
                     <span className="label-text">Фамилия</span>
                     <Input
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        type="text"
                        name="lastName"
                        placeholder="Напишите ваше имя"
                        error={Boolean(lastName)}
                     />
                  </Label>
               </BoxInput>

               <BoxInput>
                  <Label>
                     <span className="label-text">E-mail</span>
                     <Input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="email"
                        name="email"
                        placeholder="Напишите ваш email"
                        error={Boolean(email)}
                     />
                  </Label>

                  <Label>
                     <span className="label-text">Телефон</span>

                     <Input
                        value={formik.values.telephone}
                        onChange={handleTelephoneChange}
                        id="telephone"
                        name="telephone"
                        placeholder="+996 (_ _ _) _ _  _ _  _ _"
                        error={Boolean(telephone)}
                     />
                  </Label>
               </BoxInput>

               {!delivery && (
                  <div>
                     <Label>
                        <span className="label-text">Адрес доставки</span>
                        <Input
                           value={formik.values.address}
                           onChange={formik.handleChange}
                           type="text"
                           name="address"
                           width="100%"
                           placeholder="ул.Московская 120, кв 4, дом 9"
                           error={address}
                        />
                     </Label>
                  </div>
               )}
            </ContainerInput>

            <div>
               <StyledButton
                  variant="contained"
                  fontSize="1rem"
                  onClick={onNextHandler}
               >
                  Продолжить
               </StyledButton>
            </div>
         </Form>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.875rem;

   p {
      margin: 0;

      color: #292929;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 110%;
   }
`
const StyledButton = styled(Button)`
   width: 100%;
   height: 44px;
   border-radius: 4px;
`
const ContainerInput = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.75rem;
`

const Form = styled('form')`
   display: flex;
   flex-direction: column;
   gap: 1.875rem;
`

const BoxInput = styled('div')`
   display: flex;
   gap: 0.75rem;
`

const Label = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;

   .label-text {
      color: #384255;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;

      ::after {
         content: ' *';
         color: red;
         font-size: 1rem;
         font-style: normal;
         font-weight: 400;
         line-height: 150%;
      }
   }
`

const Input = styled(InputUi)`
   padding: 0;
   background-color: #ffffff;
   border-radius: 4px;
   width: ${(props) => (props.width ? props.width : '338px')};
   height: 48px;
   input {
      padding: 0.6rem 0.715rem;
      font-size: 1rem;

      ::placeholder {
         color: #000000;
      }
   }
`
