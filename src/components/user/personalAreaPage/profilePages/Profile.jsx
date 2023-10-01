import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as AddPhotoIcon } from '../../../../assets/icons/photo-add/add-photo-icon.svg'
import { ProfileInput } from './ProfileInput'
import { Button } from '../../../UI/Button'
import { ReactComponent as DefaultUserIcon } from '../../../../assets/icons/avatar/user-fill-icon.svg'
import {
   getUserInfo,
   postS3FileProfile,
   putUserInfo,
} from '../../../../store/profile/profile.thunk'
import { Loading } from '../../../UI/loading/Loading'
import { useSnackbar } from '../../../../hooks/useSnackbar'

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
      key: 'phoneNumber',
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
   const { user, isLoading } = useSelector((state) => state.profile)
   const dispatch = useDispatch()
   const { snackbarHandler } = useSnackbar()
   const [readOnly, setReadOnly] = useState(true)
   const [changePassword, setChangePassword] = useState(false)
   const toggleReadOnly = () => {
      setReadOnly(!readOnly)
      setChangePassword(false)
   }
   const changePasswordHandler = () => {
      setChangePassword(!changePassword)
   }
   const validationSchema = () => {
      let schema = Yup.object().shape({
         firstName: Yup.string()
            .required('Заполните обязательные поля')
            .max(255, 'Слишком длинное имя'),
         lastName: Yup.string()
            .required('Заполните обязательные поля')
            .max(500, 'Слишком длинная фамилия'),
         email: Yup.string()
            .required('Заполните обязательные поля')
            .email('Неправильно указан Email'),
         phoneNumber: Yup.string()
            .required('Заполните обязательные поля')
            .matches(
               /^\+996[0-9]{9}$/,
               'Введите корректный номер телефона, начинающийся с +996'
            ),
         address: Yup.string()
            .required('Заполните обязательные поля')
            .max(255, 'Слишком длинное имя'),
         imageLink: Yup.string(),
      })

      if (!readOnly && changePassword) {
         schema = schema.shape({
            firstName: Yup.string()
               .required('Заполните обязательные поля')
               .max(255, 'Слишком длинное имя'),
            lastName: Yup.string()
               .required('Заполните обязательные поля')
               .max(500, 'Слишком длинная фамилия'),
            email: Yup.string()
               .required('Заполните обязательные поля')
               .email('Неправильно указан Email'),
            phoneNumber: Yup.string()
               .required('Заполните обязательные поля')
               .matches(
                  /^\+996[0-9]{9}$/,
                  'Введите корректный номер телефона, начинающийся с +996'
               ),
            address: Yup.string()
               .required('Заполните обязательные поля')
               .max(255, 'Слишком длинное имя'),

            oldPassword: Yup.string().required(
               'Пароль обязателен для заполнения'
            ),
            newPassword: Yup.string()
               .required('Пароль обязателен для заполнения')
               .min(8, 'Пароль должен содержать минимум 8 символов')
               .matches(
                  /^(?=.*[A-Z])(?=.*\d)/,
                  'Пароль должен содержать буквы, цифры и хотя бы одну заглавную букву'
               ),
            confirmPassword: Yup.string()
               .required('Подтверждение пароля обязательно для заполнения')
               .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпадают'),
            imageLink: Yup.string(),
         })
      }

      return schema
   }

   const { values, handleChange, errors, setFieldValue, handleSubmit } =
      useFormik({
         initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            oldPassword: '',
            newPassword: '',
            imageLink: '',
         },
         validateOnBlur: true,
         validationSchema: validationSchema(),
         onSubmit: (data) => {
            dispatch(
               putUserInfo({
                  data,
                  snackbarHandler,
                  toggleReadOnly,
                  setFieldValue,
               })
            )
         },
      })
   useEffect(() => {
      dispatch(getUserInfo())
   }, [])
   useEffect(() => {
      if (user) {
         if (user.firstName) setFieldValue('firstName', user.firstName)
         if (user.lastName) setFieldValue('lastName', user.lastName)
         if (user.email) setFieldValue('email', user.email)
         if (user.phoneNumber) setFieldValue('phoneNumber', user.phoneNumber)
         if (user.address) setFieldValue('address', user.address)
         if (user.image) setFieldValue('imageLink', user.image)
      }
   }, [user])
   let imageContent

   if (values.imageLink) {
      imageContent = (
         <ImageContainer>
            <Image src={values.imageLink} />
            {!readOnly && (
               <ImageStyledLabel>
                  Сменить фото
                  <Input
                     type="file"
                     onChange={(e) => {
                        const formData = new FormData()
                        formData.append('file', e.target.files[0])
                        dispatch(
                           postS3FileProfile({ data: formData, setFieldValue })
                        )
                     }}
                     name="imageLink"
                  />
               </ImageStyledLabel>
            )}
         </ImageContainer>
      )
   } else if (readOnly) {
      imageContent = (
         <WidthContainer>
            <UserIconContainer>
               <DefaultUserIcon />
            </UserIconContainer>
         </WidthContainer>
      )
   } else {
      imageContent = (
         <>
            <FileInputLabel>
               <Input
                  type="file"
                  onChange={(e) => {
                     const formData = new FormData()
                     formData.append('file', e.target.files[0])
                     dispatch(
                        postS3FileProfile({
                           data: formData,
                           setFieldValue,
                        })
                     )
                  }}
                  name="imageLink"
               />
               <StyledAddPhotoIcon />
            </FileInputLabel>
            <Title>Нажмите для добавления фотографии</Title>
         </>
      )
   }
   return (
      <>
         {isLoading && <Loading />}
         <Container>
            <Avatar>{imageContent}</Avatar>
            <UserInformation>
               <UserTitle>Личные данные</UserTitle>
               <Form onSubmit={handleSubmit}>
                  {inputArray.map((el) => {
                     return (
                        <ProfileInput
                           key={el.key}
                           type={el.type}
                           name={el.key}
                           onChange={handleChange}
                           label={el.label}
                           value={values[el.key]}
                           width={el.width}
                           readOnly={readOnly}
                           error={!readOnly && !!errors[el.key]}
                        />
                     )
                  })}
                  {!readOnly && !changePassword && (
                     <ButtonContainer>
                        <StyledButton onClick={changePasswordHandler}>
                           Сменить пароль
                        </StyledButton>
                     </ButtonContainer>
                  )}
                  {!readOnly && changePassword && (
                     <InputContainer>
                        <ProfileInput
                           label="Старый пароль"
                           onChange={handleChange}
                           value={values.oldPassword}
                           error={!!errors.oldPassword}
                           type="password"
                           name="oldPassword"
                           left="18.5rem"
                        />
                        <ProfileInput
                           label="Новый пароль"
                           onChange={handleChange}
                           value={values.newPassword}
                           error={!!errors.newPassword}
                           name="newPassword"
                           type="password"
                           left="18.5rem"
                        />
                        <ProfileInput
                           label="Подтвердите новый пароль"
                           onChange={handleChange}
                           name="confirmPassword"
                           error={!!errors.confirmPassword}
                           type="password"
                           left="18.5rem"
                        />
                        {errors.newPassword && (
                           <Error>{errors.newPassword}</Error>
                        )}
                        {!errors.newPassword && errors.confirmPassword && (
                           <Error>{errors.confirmPassword}</Error>
                        )}
                     </InputContainer>
                  )}
                  {!readOnly && (
                     <>
                        <UiStyledButton
                           variant="outlined"
                           fontSize="16px"
                           backgroundhover="#cb11ab"
                           backgroundactive="#E313BF"
                           onClick={toggleReadOnly}
                           change={changePassword ? 'true' : 'false'}
                        >
                           Назад
                        </UiStyledButton>

                        <UiStyledButton
                           variant="contained"
                           fontSize="16px"
                           backgroundhover="#E313BF"
                           backgroundactive="#C90EA9"
                           type="submit"
                           change={changePassword ? 'true' : 'false'}
                        >
                           Подтвердить
                        </UiStyledButton>
                     </>
                  )}
               </Form>
               {readOnly && (
                  <UiStyledButton
                     variant="contained"
                     fontSize="16px"
                     backgroundhover="#E313BF"
                     backgroundactive="#C90EA9"
                     onClick={toggleReadOnly}
                     change={changePassword ? 'true' : 'false'}
                  >
                     Редактировать
                  </UiStyledButton>
               )}
            </UserInformation>
         </Container>
      </>
   )
}
const Container = styled('div')`
   margin-top: 60px;
   display: flex;
   gap: 112px;
   margin-bottom: 120px;
   font-family: Inter;
`
const ImageContainer = styled('div')`
   width: 148px;
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 8px;
`
const InputContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 12px;
   width: 100%;
`
const ButtonContainer = styled('div')`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`
const Image = styled('img')`
   width: 90px;
   height: 90px;
   border-radius: 100%;
   object-fit: cover;
   background: white;
`
const Error = styled('p')`
   margin: 0;
   color: #d63838;
`
const WidthContainer = styled('div')`
   width: 148px;
   display: flex;
   justify-content: center;
`
const ImageStyledLabel = styled('label')`
   cursor: pointer;
   color: #2c68f5;
   text-align: center;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
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
   margin: 2px 0px 0px 0px;
`
const UiStyledButton = styled(Button)`
   width: 338px;
   height: 47px;
   margin-top: ${(props) => (props.change === 'true' ? '12px' : '4px')};
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
   cursor: pointer;
`
const UserIconContainer = styled('div')`
   width: 90px;
   height: 90px;
   border-radius: 100%;
   background: rgba(213, 213, 213, 0.5);
   display: flex;
   align-items: center;
   justify-content: center;
   svg {
      width: 50px;
      height: 50px;
      margin-left: 2px;
   }
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
   gap: 8px;
`
const UserTitle = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 24px;
   font-style: normal;
   font-weight: 700;
   margin: 0;
   line-height: 110%;
   margin-bottom: 22px;
`
const Form = styled('form')`
   width: 688px;
   display: flex;
   gap: 12px;
   flex-wrap: wrap;
`
