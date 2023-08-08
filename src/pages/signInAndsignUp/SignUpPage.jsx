import { Button, styled } from '@mui/material'
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CloseIcon } from '../../assets/icons/cross/big-cross-icon.svg'
import { InputUi } from '../../components/UI/Input'
import { BackgroundInForm } from '../../layout/BackgroundInForm'
import { signUpRequest } from '../../store/auth/authThunk'
import { SnackBar } from '../../components/UI/SnackBar'
import { SnackBarActions } from '../../store/snackBarSlice'

const signUpInputArray = [
   {
      key: 'firstName',
      placeholder: 'Напишите ваше имя',
      type: 'text',
   },
   {
      key: 'lastName',
      placeholder: 'Напишите вашу фамилию',
      type: 'text',
   },
   {
      key: 'phoneNumber',
      placeholder: '+996 (_ _ _) _ _  _ _  _ _',
      type: 'tel',
   },
   {
      key: 'email',
      placeholder: 'Напишите email',
      type: 'email',
   },
   {
      key: 'password',
      placeholder: 'Напишите пароль',
      type: 'password',
   },
   {
      key: 'confirmPassword',
      placeholder: 'Напишите ваше имя',
      type: 'password',
   },
]

const schema = z
   .object({
      firstName: z.string().nonempty('Заполните обязательные поля').min(3),
      lastName: z.string().nonempty('Заполните обязательные поля').min(3),
      phoneNumber: z
         .string()
         .nonempty('Заполните обязательные поля')
         .regex(/^\+996[0-9]{9}$/, {
            message: 'Введите корректный номер телефона, начинающийся с +996',
         }),
      email: z
         .string()
         .nonempty('Заполните обязательные поля')
         .email('Неправильно указан Email'),
      password: z
         .string()
         .min(6, 'Пароль обязателен для заполнения')
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
   const { open } = useSelector((state) => state.snackbar)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [focusedField, setFocusedField] = useState('')

   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm({
      defaultValues: {
         firstName: '',
         lastName: '',
         phoneNumber: '',
         email: '',
         password: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })

   const onSubmit = async (data) => {
      try {
         reset()
         dispatch(signUpRequest(data)).unwrap()
         dispatch(SnackBarActions.doSuccess())
         navigate('/')
      } catch (error) {
         dispatch(SnackBarActions.doError())
         console.log('error', error)
      }

      console.log(data)
   }

   function onCloseHandler() {
      dispatch(SnackBarActions.closeSnackbar())
   }

   const handleFieldBlur = (fieldName) => {
      setFocusedField(fieldName)
   }

   const errorMessages = signUpInputArray
      .filter((el) => errors[el.key]?.message && focusedField === el.key)
      .map((el) => errors[el.key]?.message)

   return (
      <BackgroundInForm>
         {open && <SnackBar handleClose={onCloseHandler} />}
         <Container>
            <MuiCloseIcon />
            <h2>Регистрация</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
               {signUpInputArray.map((el) => {
                  const error = errors[el.key]?.message

                  return (
                     <div key={el.key}>
                        <Input
                           {...register(el.key)}
                           placeholder={el.placeholder}
                           type={el.type}
                           error={!!error}
                           onBlur={() => handleFieldBlur(el.key)}
                        />
                     </div>
                  )
               })}
               {errorMessages.length > 0 && (
                  <div>
                     {errorMessages.map((errorMessage) => (
                        <ErrorMessage key={errorMessage}>
                           {errorMessage}
                        </ErrorMessage>
                     ))}
                  </div>
               )}
               <ButtonUi type="submit" variant="contained">
                  Войти
               </ButtonUi>
            </Form>
            <Block>
               <p>
                  У вас уже есть аккаунт? <Link to="/">Войти</Link>
               </p>
            </Block>
         </Container>
      </BackgroundInForm>
   )
}

const Container = styled('div')`
   width: 36.25rem;
   margin-top: 0.5rem;
   border-radius: 0.25rem;
   background: #fff;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
   h2 {
      text-align: center;
   }
`

const ButtonUi = styled(Button)`
   width: 29.5rem;
   height: 2.9375rem;
   color: #fff;
   margin-left: 3.75rem;
`
const Block = styled('div')`
   display: flex;
   margin-left: 9.75rem;
   margin-bottom: 1rem;
   a {
      text-decoration: none;
   }
`
const Input = styled(InputUi)`
   margin-left: 3.78rem;
`
const Form = styled('form')`
   display: flex;
   flex-direction: column;
   gap: 1.25rem;
`
const MuiCloseIcon = styled(CloseIcon)`
   margin-top: 1.5rem;
   margin-left: 33.5rem;
   cursor: pointer;
`

const ErrorMessage = styled('div')`
   text-align: center;
   color: red;
`
