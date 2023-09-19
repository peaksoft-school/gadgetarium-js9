import { Button, CircularProgress, styled } from '@mui/material'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CloseIcon } from '../../assets/icons/cross/big-cross-icon.svg'
import { Modal } from '../UI/Modal'
import { InputUi } from '../UI/Input'
import { getPhoneNumber, signInRequest } from '../../store/auth/authThunk'
import { useSnackbar } from '../../hooks/useSnackbar'
import { schemaSignIn } from '../../utils/helpers/reactHookFormShema'
import { getFavoriteItems } from '../../store/favorite/favorite.thunk'
import {
   getNovelities,
   getRecommend,
   getStock,
} from '../../store/main.page/main.page.thunk'
import { getAllCompareGoods } from '../../store/compare/compare.thunk'

export const AuthorizationModal = ({ openModal, toggleHandler }) => {
   const { snackbarHandler } = useSnackbar()
   const { isLoading } = useSelector((state) => state.auth)
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

   const onSubmit = (data) => {
      dispatch(signInRequest({ data, snackbarHandler }))
         .unwrap()
         .then((response) => {
            if (response.role === 'USER') {
               navigate('/')
               dispatch(getNovelities({ page: 1, pageSize: 5 }))
               dispatch(getRecommend({ page: 1, pageSize: 5 }))
               dispatch(getStock({ page: 1, pageSize: 5 }))
               dispatch(getPhoneNumber(data))
               dispatch(getFavoriteItems())
               dispatch(getAllCompareGoods())
               toggleHandler()
               reset()
            } else {
               navigate('admin')
            }
         })
         .catch((error) => console.error(error))
   }

   const combinedError = formState.errors.email || formState.errors.password

   const open = !!openModal
   return (
      <StyledModal
         open={open}
         onClose={isLoading ? null : toggleHandler}
         padding="0"
      >
         <Container>
            <CloseContainer>
               <MuiCloseIcon onClick={toggleHandler} />
            </CloseContainer>
            <LoginWarning sx={{ marginTop: '26px' }}>Вы не вошли</LoginWarning>
            <LoginWarning>войдите или зарегестрируйтесь</LoginWarning>
            <LoginText>Войти</LoginText>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <Input
                  width="29rem"
                  height="43px"
                  {...register('email')}
                  placeholder="Напишите email"
                  type="email"
                  error={!!formState.errors.email}
               />
               <Input
                  width="29rem"
                  height="43px"
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
      </StyledModal>
   )
}
const Container = styled('div')`
   width: 35.875rem;
   padding: 1.25rem;
   border-radius: 0.25rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   background: #fff;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
   h2 {
      /* margin-left: 15.5rem; */
   }
`
const LoginText = styled('p')`
   color: #292929;
   text-align: center;
   font-family: Inter;
   font-size: 1.75rem;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin: 0;
   margin-top: 1.5rem;
   margin-bottom: 1.5rem;
`
const LoginWarning = styled('p')`
   color: #292929;
   text-align: center;
   font-family: Inter;
   font-size: 1.25rem;
   font-style: normal;
   font-weight: 600;
   line-height: 120%;
   margin: 0;
`
const StyledModal = styled(Modal)`
   padding: 0;
`
const ButtonUi = styled(Button)`
   width: 28.75rem;
   height: 2.9375rem;
   color: #fff;
`
const Block = styled('div')`
   display: flex;
   margin-top: 0.75rem;
   margin-bottom: 2.5rem;
   p {
      margin: 0;
   }
   a {
      text-decoration: none;
   }
`
const Input = styled(InputUi)`
   .MuiInputBase-input {
      height: 1.6875rem;
      background: #f6f6f6;
      padding: 0;
      padding: 0.5rem 1.125rem;
   }
   padding-right: 0;
`
const ErrorTitle = styled('div')`
   display: flex;
   justify-content: center;
   width: 80%;
   text-align: center;
`
const MuiCloseIcon = styled(CloseIcon)`
   cursor: pointer;
`
const Form = styled('form')`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
`
const CloseContainer = styled('div')`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
