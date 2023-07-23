import { Button, styled } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import CloseIcon from '@mui/icons-material/Close'
import { InputUi } from '../UI/Input'

export const SignInAdmin = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm()

   const onSubmit = () => {
      reset()
   }

   const combinedError = errors.email || errors.password

   return (
      <Container>
         <MuiCloseIcon />
         <h2>Войти</h2>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
               {...register('email', {
                  required: 'Неправильно указан Email и/или пароль',
                  pattern: {
                     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                     message: 'Неправильно указан Email и/или пароль',
                  },
               })}
               placeholder="Напишите email"
               type="email"
            />

            <Input
               {...register('password', {
                  required: 'Неправильно указан Email и/или пароль',
                  pattern: {
                     value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                     message: 'Неправильно указан Email и/или пароль',
                  },
               })}
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
