import { Button, styled } from '@mui/material'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ReactComponent as CloseIcon } from '../../assets/icons/cross/big-cross-icon.svg'
import { InputUi } from '../../components/UI/Input'
import { BackgroundInForm } from '../../layout/BackgroundInForm'
import { signInRequest } from '../../store/auth/authThunk'

const schema = z.object({
   email: z.string().email('Заполните обязательные поля'),

   password: z
      .string()
      .min(6, 'Пароль должен содержать минимум 6 символов')
      .regex(
         /^(?=.*[a-zA-Z])(?=.*\d)/,
         'Пароль должен содержать буквы и цифры'
      ),
})

export const SignIn = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { register, handleSubmit, reset, formState } = useForm({
      defaultValues: {
         email: '',
         password: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })

   const onSubmit = async (data) => {
      try {
         const response = await dispatch(signInRequest(data)).unwrap()
         reset()

         console.log('response', response)

         if (response.role === 'USER') {
            navigate('/')
         } else {
            navigate('admin')
         }
      } catch (error) {
         console.log('error', error)
      }
   }

   const combinedError = formState.errors.email || formState.errors.password

   return (
      <BackgroundInForm>
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
                  Нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
               </p>
            </Block>
         </Container>
      </BackgroundInForm>
   )
}

const Container = styled('div')`
   margin-top: 8rem;
   padding-bottom: 2.5rem;
   border-radius: 0.25rem;
   background: #fff;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
   h2 {
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
   margin-top: 1rem;
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
   width: 35.875rem;
   justify-content: center;
`
const MuiCloseIcon = styled(CloseIcon)`
   margin-top: 1.5rem;
   margin-left: 33.5rem;
   cursor: pointer;
`
const Form = styled('form')`
   display: flex;
   flex-direction: column;
   gap: 1.25rem;
`
