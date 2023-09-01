import { Button, styled } from '@mui/material'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ReactComponent as CloseIcon } from '../../assets/icons/cross/big-cross-icon.svg'
import { InputUi } from '../../components/UI/Input'
import { getPhoneNumber, signInRequest } from '../../store/auth/authThunk'
import { BackgroundInForm } from '../../layout/BackgroundInForm'
import { useSnackbar } from '../../hooks/useSnackbar'
import { schemaSignIn } from '../../utils/helpers/reactHookFormShema'

export const SignIn = () => {
   const { snackbarHandler } = useSnackbar()

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { register, handleSubmit, reset, formState } = useForm({
      defaultValues: {
         email: '',
         password: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schemaSignIn),
   })

   const onSubmit = async (data) => {
      await dispatch(signInRequest({ data, snackbarHandler }))
         .unwrap()
         .then((response) => {
            if (response.role === 'USER') {
               navigate('/')
               dispatch(getPhoneNumber(data))
            } else {
               navigate('admin')
            }
         })
      reset()
   }

   const combinedError = formState.errors.email || formState.errors.password

   const onCloseHandler = () => {
      navigate(-1)
   }

   return (
      <BackgroundInForm>
         <Container>
            <MuiCloseIcon onClick={onCloseHandler} />
            <h2>Войти</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <Input
                  width="29rem"
                  {...register('email')}
                  placeholder="Напишите email"
                  type="email"
                  error={!!formState.errors.email}
               />
               <Input
                  width="29rem"
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
   padding-right: 0;
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
