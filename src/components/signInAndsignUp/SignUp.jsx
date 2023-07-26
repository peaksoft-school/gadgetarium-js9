import { Button, styled } from '@mui/material'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import CloseIcon from '@mui/icons-material/Close'
import { InputUi } from '../UI/Input'
import { BackgroundInForm } from './BackgroundInForm'

const schema = z
   .object({
      firstName: z.string().nonempty('Имя обязательно для заполнения').min(3),
      lastName: z
         .string()
         .nonempty('Фамилия обязательна для заполнения')
         .min(3),
      phone: z.string().regex(/^\+996[0-9]{9}$/, {
         message: 'Введите корректный номер телефона, начинающийся с +996',
      }),
      email: z.string().email('Неправильно указан Email'),
      password: z
         .string()
         .min(6, 'Пароль должен содержать минимум 6 символов')
         .regex(
            /^(?=.*[a-zA-Z])(?=.*\d)/,
            'Пароль должен содержать буквы и цифры'
         ),
      confirmPassword: z
         .string()
         .nonempty('Подтверждение пароля обязательно для заполнения'),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: 'Пароли не совпадают',
      path: ['confirmPassword'],
   })

export const SignUp = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm({
      defaultValues: {
         firstName: '',
         lastName: '',
         phone: '',
         email: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })

   const onSubmit = () => {
      reset()
   }

   return (
      <BackgroundInForm>
         <Container>
            <MuiCloseIcon />
            <h2>Регистрация</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <Input
                  {...register('firstName')}
                  placeholder="Напишите ваше имя"
                  type="text"
                  error={!!errors.firstName}
               />
               <Input
                  {...register('lastName')}
                  placeholder="Напишите вашу фамилию"
                  type="text"
                  error={!!errors.lastName}
               />
               <Input
                  {...register('phone')}
                  placeholder="+996 (_ _ _) _ _  _ _  _ _"
                  type="tel"
                  error={!!errors.phone}
               />
               <Input
                  {...register('email')}
                  placeholder="Напишите email"
                  type="email"
                  error={!!errors.email}
               />
               <Input
                  {...register('password')}
                  placeholder="Напишите пароль"
                  type="password"
                  error={!!errors.password}
               />
               <Input
                  {...register('confirmPassword')}
                  placeholder="Напишите пароль"
                  type="password"
                  error={!!errors.confirmPassword}
               />
               <ErrorTitle>
                  {errors.firstName?.message ||
                  errors.lastName?.message ||
                  errors.phone?.message ||
                  errors.email?.message ||
                  errors.password?.message ||
                  errors.confirmPassword?.message ? (
                     <p style={{ color: 'red', margin: 0 }}>
                        {errors.firstName?.message ||
                           errors.lastName?.message ||
                           errors.phone?.message ||
                           errors.email?.message ||
                           errors.password?.message ||
                           errors.confirmPassword?.message}
                     </p>
                  ) : null}
               </ErrorTitle>
               <ButtonUi type="submit" variant="contained">
                  Войти
               </ButtonUi>
            </Form>
            <Block>
               <p>
                  У вас уже есть аккаунт? <a href="/">Войти</a>
               </p>
            </Block>
         </Container>
      </BackgroundInForm>
   )
}

const Container = styled('div')`
   width: 40.3vw;
   height: 88vh;
   margin: 0 auto;
   border-radius: 0.25rem;
   background: #fff;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
   h2 {
      padding-top: 2.66rem;
      text-align: center;
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
   width: 35.875rem;
   justify-content: center;
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
