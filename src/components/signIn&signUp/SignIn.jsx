import { Button, styled } from '@mui/material'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import CloseIcon from '@mui/icons-material/Close'
import { InputUi } from '../UI/Input'

const schema = z.object({
   email: z.string().email('Неправильно указан Email и/или пароль'),
   password: z
      .string()
      .min(6)
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)/),
})

export const SignIn = () => {
   const { register, handleSubmit, reset, formState } = useForm({
      defaultValues: {
         email: '',
         password: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })

   const onSubmit = () => {
      reset()
   }

   const combinedError = formState.errors.email || formState.errors.password

   return (
      <Container>
         <MuiCloseIcon />
         <h2>Войти</h2>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
               {...register('email')}
               placeholder="Напишите email"
               type="email"
               error={!!formState.errors.email}
            />
            <Input
               error={!!formState.errors.password}
               {...register('password')}
               placeholder="Напишите пароль"
               type="password"
            />
            <ErrorTitle>
               {combinedError && (
                  <p style={{ color: 'red', margin: 0 }}>
                     {combinedError.message}
                  </p>
               )}
            </ErrorTitle>
            <ButtonUi type="submit" variant="contained">
               Войти
            </ButtonUi>
         </Form>
         <Block>
            <p>
               Нет аккаунта? <a href="/signup">Зарегистрироваться</a>
            </p>
         </Block>
      </Container>
   )
}

const Container = styled('div')`
   width: 40.3vw;
   height: 49vh;
   margin: 0 auto;
   border-radius: 0.25rem;
   background: #fff;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
   h2 {
      padding-top: 3.66rem;
      margin-left: 15.5rem;
   }
`

const ButtonUi = styled(Button)`
   width: 28.75rem;
   height: 2.9375rem;
   color: #fff;
   margin-left: 3.75rem;
`
const Block = styled('div')`
   display: flex;
   margin-left: 9.75rem;
   a {
      text-decoration: none;
   }
`
const Input = styled(InputUi)`
   margin-left: 3.78rem;
`
const ErrorTitle = styled('div')`
   display: flex;
   width: 21.875rem;
   margin-left: 9.41rem;
`
const MuiCloseIcon = styled(CloseIcon)`
   position: absolute;
   margin-top: 0.75rem;
   margin-left: 33.5rem;
   cursor: pointer;
`
const Form = styled('form')`
   display: flex;
   flex-direction: column;
   gap: 1.25rem;
`
