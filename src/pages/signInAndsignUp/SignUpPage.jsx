import { Button, CircularProgress, styled } from '@mui/material'
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CloseIcon } from '../../assets/icons/cross/big-cross-icon.svg'
import { InputUi } from '../../components/UI/Input'
import { getPhoneNumber, signUpRequest } from '../../store/auth/authThunk'
import { BackgroundInForm } from '../../layout/BackgroundInForm'
import { useSnackbar } from '../../hooks/useSnackbar'
import { signUpInputArray } from '../../utils/common/constants/ArrayForm'
import { schemaSignUp } from '../../utils/helpers/reactHookFormShema'

export const SignUp = () => {
   const { snackbarHandler } = useSnackbar()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { isLoading } = useSelector((state) => state.auth)

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
      resolver: zodResolver(schemaSignUp),
   })

   const onSubmit = async (data) => {
      try {
         reset()
         await dispatch(signUpRequest({ data, snackbarHandler })).unwrap()
         snackbarHandler({
            message: 'Регистрация успешно выполнена',
            type: 'success',
         })
         dispatch(getPhoneNumber(data)).unwrap()
         navigate('/')
      } catch (error) {
         snackbarHandler({
            message:
               'Пользователь с таким адресом электронной почты уже существует.',
            type: 'error',
         })
      }
   }

   const handleFieldBlur = (fieldName) => {
      setFocusedField(fieldName)
   }

   const errorMessages = signUpInputArray
      .filter((el) => errors[el.key]?.message && focusedField === el.key)
      .map((el) => errors[el.key]?.message)

   const onCloseHandler = () => {
      navigate(-1)
   }

   return (
      <BackgroundInForm>
         <Container>
            <MuiCloseIcon onClick={onCloseHandler} />
            <Title>Регистрация</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
               {signUpInputArray.map((el) => {
                  const error = errors[el.key]?.message
                  return (
                     <div key={el.key}>
                        <Input
                           width="29.5rem"
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
                  {isLoading ? (
                     <CircularProgress size={27} sx={{ color: 'white' }} />
                  ) : (
                     'Создать аккаунт'
                  )}
               </ButtonUi>
            </Form>
            <Block>
               <p>
                  У вас уже есть аккаунт? <Link to="/signin">Войти</Link>
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
   width: 36.25rem;
   height: 44rem;
   border-radius: 0.25rem;
   background: #fff;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`
const Title = styled('p')`
   color: #292929;
   text-align: center;
   font-family: Inter;
   font-size: 1.75rem;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   margin: 0;
   margin-bottom: 1.5rem;
   margin-top: 0.9063rem;
`
const ButtonUi = styled(Button)`
   width: 29.5rem;
   height: 2.9375rem;
   color: #fff;
   font-family: Inter;
   font-size: 1rem;
   text-transform: none;
`
const Block = styled('div')`
   display: flex;
   margin-bottom: 1rem;
   a {
      text-decoration: none;
   }
`
const Input = styled(InputUi)`
   padding-right: 0;
`
const Form = styled('form')`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 1.25rem;
`
const MuiCloseIcon = styled(CloseIcon)`
   margin-top: 1.2rem;
   margin-left: 33.4rem;
   cursor: pointer;
`

const ErrorMessage = styled('div')`
   text-align: center;
   color: red;
`
