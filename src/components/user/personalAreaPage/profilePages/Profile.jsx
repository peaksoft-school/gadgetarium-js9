import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as AddPhotoIcon } from '../../../../assets/icons/photo-add/add-photo-icon.svg'
import { ProfileInput } from './ProfileInput'
import { Button } from '../../../UI/Button'
import { getUserInfo } from '../../../../store/profile/profile.thunk'

const schema = z.object({
   firstName: z
      .string()
      .min(1)
      .nonempty('Заполните обязательные поля')
      .max(255),
   lastName: z.string().min(1).nonempty('Заполните обязательные поля').max(500),
   email: z
      .string()
      .nonempty('Заполните обязательные поля')
      .email('Неправильно указан Email'),
   telephone: z
      .string()
      .nonempty('Заполните обязательные поля')
      .min(12, 'Номер телефона должен состоять из 13 символов')
      .regex(/^\+996[0-9]{9}$/, {
         message: 'Введите корректный номер телефона, начинающийся с +996',
      }),
   address: z.string().min(1).nonempty('Заполните обязательные поля').max(255),
   password: z
      .string()
      .nonempty('Пароль обязателен для заполнения')
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .regex(
         /^(?=.*[A-Z])(?=.*\d)/,
         'Пароль должен содержать буквы,цифры и хотябы одну заглавную букву'
      ),
   confirmPassword: z
      .string()
      .nonempty('Подтверждение пароля обязательно для заполнения'),
})
const inputArray = [
   {
      label: 'Имя',
      key: 'firstName',
      type: 'text',
   },
   {
      label: 'Фамилия',
      key: 'lastName',
      type: 'text',
   },
   {
      label: 'E-mail',
      key: 'email',
      type: 'email',
   },
   {
      label: 'Телефон',
      key: 'telephone',
      type: 'tel',
   },
   {
      label: 'Адрес доставки',
      key: 'address',
      type: 'text',
      width: '688px',
   },
]
export const Profile = () => {
   const { user } = useSelector((state) => state.profile)
   const dispatch = useDispatch()
   const { register, handleSubmit, reset, formState } = useForm({
      defaultValues: {
         firstName: user?.firstName,
         lastName: user?.lastName,
         email: user?.email,
         telephone: user?.telephone,
         address: user?.address,
         password: '',
         confirmPassword: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })
   console.log(user)
   useEffect(() => {
      dispatch(getUserInfo())
   }, [])
   const onSubmit = (data) => {
      console.log(data)
      reset()
   }
   return (
      <Container>
         <Avatar>
            <FileInputLabel>
               <Input type="file" />
               <StyledAddPhotoIcon />
            </FileInputLabel>
            <Title>Нажмите для добавления фотографии</Title>
         </Avatar>
         <UserInformation>
            <UserTitle>Личные данные</UserTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
               {inputArray.map((el) => {
                  const error = formState.errors[el.key]?.message

                  return (
                     <ProfileInput
                        key={el.key}
                        type={el.type}
                        label={el.label}
                        width={el.width}
                        {...register(el.key)}
                        error={!!error}
                     />
                  )
               })}
               <ButtonContainer>
                  <StyledButton>Сменить пароль</StyledButton>
               </ButtonContainer>
               <UiStyledButton
                  variant="contained"
                  fontSize="16px"
                  backgroundhover="#E313BF"
                  backgroundactive="#C90EA9"
               >
                  Редактировать
               </UiStyledButton>
            </Form>
         </UserInformation>
      </Container>
   )
}
const Container = styled('div')`
   margin-top: 60px;
   display: flex;
   gap: 112px;
`
const ButtonContainer = styled('div')`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
const StyledButton = styled('button')`
   background: none;
   border: none;
   color: #cb11ab;
   font-family: Inter;
   cursor: pointer;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
   margin: 2px 0px 4px 0px;
`
const UiStyledButton = styled(Button)`
   width: 338px;
   height: 47px;
`
const Avatar = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 8px;
`
const Input = styled('input')`
   display: none;
`
const FileInputLabel = styled('label')`
   width: 90px;
   height: 90px;
   border-radius: 100%;
   background: rgba(213, 213, 213, 0.5);
   display: flex;
   align-items: center;
   justify-content: center;
`
const Title = styled('p')`
   color: #91969e;
   width: 148px;
   text-align: center;
   font-family: Inter;
   font-size: 12px;
   font-style: normal;
   font-weight: 500;
   line-height: 130%;
`
const StyledAddPhotoIcon = styled(AddPhotoIcon)`
   width: 30px;
   height: 30px;
   path {
      fill: #909cb5;
   }
`
const UserInformation = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 30px;
`
const UserTitle = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 24px;
   font-style: normal;
   font-weight: 700;
   margin: 0;
   line-height: 110%;
`
const Form = styled('form')`
   width: 688px;
   display: flex;
   gap: 12px;
   flex-wrap: wrap;
`
