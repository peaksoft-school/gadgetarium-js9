import { Button, CircularProgress, styled } from '@mui/material'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
   const { isLoading } = useSelector((state) => state.auth)
   const { register, handleSubmit, reset, formState } = useForm({
      defaultValues: {
         email: '',
         password: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schemaSignIn),
   })

   const onSubmit = (data) => {
      dispatch(signInRequest({ data, snackbarHandler }))
         .unwrap()
         .then((response) => {
            if (response.role === 'USER') {
               navigate('/')
               dispatch(getPhoneNumber(data))
            } else {
               navigate('/admin/goods')
            }
         })
         .catch((error) => console.error(error))
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
            <Title>Войти</Title>
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
                  {isLoading ? (
                     <CircularProgress size={27} sx={{ color: 'white' }} />
                  ) : (
                     'Войти'
                  )}
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
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-bottom: 2.5rem;
   border-radius: 0.25rem;
   background: #fff;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`
const Title = styled('p')`
   color: #292929;
   text-align: center;
   font-family: Inter;
   font-size: 28px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   margin: 0;
   margin-bottom: 24px;
   margin-top: 14.5px;
`
const ButtonUi = styled(Button)`
   width: 29rem;
   height: 2.9375rem;
   color: #fff;
   font-family: Inter;
   font-size: 16px;
   text-transform: none;
`
const Block = styled('div')`
   display: flex;
   a {
      text-decoration: none;
   }
   p {
      margin-top: 12px;
   }
`
const Input = styled(InputUi)`
   padding-right: 0;
`
const ErrorTitle = styled('div')`
   display: flex;
   width: 35.875rem;
   justify-content: center;
`
const MuiCloseIcon = styled(CloseIcon)`
   margin-top: 1.2rem;
   margin-left: 33rem;
   cursor: pointer;
`
const Form = styled('form')`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.25rem;
`
