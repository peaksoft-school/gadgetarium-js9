import { Button, styled } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import CloseIcon from '@mui/icons-material/Close'

export const SignUp = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
      getValues,
   } = useForm()

   const onSubmit = () => {
      reset()
   }

   const password = getValues('password', '')

   const getInputStyles = (error, isFilled) => {
      return error && !isFilled ? { border: '1px solid red' } : {}
   }
   return (
      <Container>
         <MuiCloseIcon />
         <h2>Войти</h2>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <InputEmail
               {...register('firstName', {
                  required: 'Имя обязательно для заполнения',
                  pattern: {
                     value: /^[A-Za-zА-Яа-яЁё]+$/,
                     message: 'Имя должно содержать только буквы',
                  },
               })}
               placeholder="Напишите ваше имя"
               type="text"
               style={getInputStyles(
                  errors.firstName,
                  Boolean(getValues('firstName'))
               )}
            />
            <InputPassword
               {...register('lastName', {
                  required: 'Фамилия обязательна для заполнения',
                  pattern: {
                     value: /^[A-Za-zА-Яа-яЁё]+$/,
                     message: 'Фамилия должна содержать только буквы',
                  },
               })}
               placeholder="Напишите вашу фамилию"
               type="text"
               style={getInputStyles(
                  errors.lastName,
                  Boolean(getValues('lastName'))
               )}
            />
            <InputEmail
               {...register('phone', {
                  required: 'Номер телефона обязателен для заполнения',
                  pattern: {
                     value: /^[+]?[0-9]{10,14}$/,
                     message: 'Введите корректный номер телефона',
                  },
               })}
               placeholder="+996 (_ _ _) _ _  _ _  _ _"
               type="tel"
               style={getInputStyles(
                  errors.lastName,
                  Boolean(getValues('lastName'))
               )}
            />
            <InputPassword
               {...register('email', {
                  required: 'Неправильно указан Email ',
                  pattern: {
                     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                     message: 'Неправильно указан Email',
                  },
               })}
               placeholder="Напишите email"
               type="email"
               style={getInputStyles(errors.email, Boolean(getValues('email')))}
            />
            <InputEmail
               {...register('password', {
                  required: 'Пароль обязателен для заполнения',
                  pattern: {
                     value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                     message:
                        'Пароль должен содержать от 6 до 16 символов, включая цифры и спецсимволы',
                  },
               })}
               placeholder="Напишите пароль"
               type="password"
               style={getInputStyles(
                  errors.password,
                  Boolean(getValues('password'))
               )}
            />

            <InputPassword
               {...register('confirmPassword', {
                  required: 'Подтверждение пароля обязательно для заполнения',
                  validate: (value) =>
                     value === password || 'Пароли не совпадают',
               })}
               placeholder="Подтвердите пароль"
               type="password"
               style={getInputStyles(
                  errors.confirmPassword,
                  Boolean(getValues('confirmPassword'))
               )}
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
   )
}

const Container = styled('div')`
   width: 40.3vw;
   height: 80vh;
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
const InputEmail = styled('input')`
   width: 28.6875rem;
   height: 2.6875rem;
   margin-left: 3.78rem;
   padding-left: 1.12rem;
`
const InputPassword = styled('input')`
   width: 28.6875rem;
   height: 2.6875rem;
   margin-left: 3.78rem;
   padding-left: 1.12rem;
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
