import { styled } from '@mui/material'
import InputMask from 'react-input-mask'
import { InputUi } from '../../../UI/Input'
import { Button } from '../../../UI/Button'

export const PersonalData = ({ onNextHandler, formik, delivery }) => {
   return (
      <Container>
         <p>Личные данные</p>

         <Form>
            <ContainerInput>
               <BoxInput>
                  <Label>
                     <span className="label-text">Имя</span>
                     <Input
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        type="text"
                        name="lastName"
                        placeholder="Напишите ваше имя"
                     />
                  </Label>

                  <Label>
                     <span className="label-text">Фамилия</span>
                     <Input
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        type="text"
                        name="firstName"
                        placeholder="Напишите вашу фамилию"
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
                     />
                  </Label>

                  <Label>
                     <span className="label-text">Телефон</span>

                     <InputMask
                        mask="+999 (999) 99-99-99"
                        value={formik.values.telephone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                     >
                        {(inputProps) => (
                           <Input
                              {...inputProps}
                              id="telephone"
                              name="telephone"
                              placeholder="+996 (_ _ _) _ _  _ _  _ _"
                           />
                        )}
                     </InputMask>
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
                           placeholder="ул.Московская 120, кв 4, дом 9"
                           width="45vw"
                        />
                     </Label>
                  </div>
               )}
            </ContainerInput>

            <div>
               <Button
                  variant="contained"
                  padding="0.75rem 20.2vw"
                  fontSize="1rem"
                  onClick={onNextHandler}
               >
                  Продолжить
               </Button>
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
   width: ${(props) => (props.width ? props.width : '22.1vw')};
   border-radius: 0.375rem;

   input {
      padding: 0.6rem 0.715rem;
      font-size: 1rem;

      ::placeholder {
         color: #000000;
      }
   }
`
