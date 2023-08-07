import { styled } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '../../UI/Button'
import { InputUi } from '../../UI/Input'

export const UserInfo = () => {
   const [all, setAll] = useState({
      name: '',
      surname: '',
      email: '',
      tel: '',
      message: '',
   })
   const onChangePhone = (event) => {
      const { value } = event.target

      const digitsOnlyValue = value.replace(/[^\d]/g, '')

      setAll((prevData) => ({
         ...prevData,
         tel: digitsOnlyValue,
      }))
   }
   const onChangeAll = (event) => {
      const { name, value } = event.target

      setAll((prevData) => ({
         ...prevData,
         [name]: value,
      }))
   }

   const onAllResetHandler = (e) => {
      e.preventDefault()
      setAll({ name: '', surname: '', email: '', tel: '', message: '' })
   }

   return (
      <Container>
         <h3>Напишите нам</h3>

         <div className="InfoContent">
            <div>
               <label htmlFor="name">Имя </label>
               <InputUi
                  id="name"
                  type="text"
                  height="3rem"
                  value={all.name}
                  width="21.125rem"
                  name="name"
                  onChange={onChangeAll}
                  placeholder="Напишите ваше имя"
               />
            </div>

            <div>
               <label htmlFor="surname">Фамилия </label>
               <InputUi
                  type="text"
                  id="surname"
                  height="3rem"
                  width="21.125rem"
                  value={all.surname}
                  name="surname"
                  onChange={onChangeAll}
                  placeholder="Напишите вашу фамилию"
               />
            </div>

            <div>
               <label htmlFor="email">E-mail </label>
               <InputUi
                  id="email"
                  type="email"
                  height="3rem"
                  value={all.email}
                  width="21.125rem"
                  name="email"
                  onChange={onChangeAll}
                  placeholder="Напишите ваш email"
               />
            </div>

            <div>
               <label htmlFor="phone">Телефон </label>
               <InputUi
                  type="tel"
                  height="3rem"
                  value={all.tel}
                  width="21.125rem"
                  name="tel"
                  onChange={onChangePhone}
                  placeholder="+996 (_ _ _) _ _  _ _  _ _"
               />
            </div>
         </div>

         <div className="SmsContent">
            <label htmlFor="Sms">Сообщение</label>
            <textarea
               id="Sms"
               value={all.message}
               placeholder="Напишите сообщение"
               name="message"
               onChange={onChangeAll}
            />

            <Button
               variant="contained"
               padding="0.88rem 0 1rem 0"
               onClick={onAllResetHandler}
            >
               Отправить
            </Button>
         </div>
      </Container>
   )
}
const Container = styled('div')(({ theme }) => ({
   width: '43rem',
   margin: '3.75rem 0 7.5rem 0',
   fontSize: '1rem',

   '.InfoContent': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
   },

   h3: {
      fontFamily: theme.typography.mainFontFamily,
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '110%',
      marginBottom: '2rem',
      marginTop: '0.6rem',
   },

   label: {
      fontFamily: theme.typography.mainFontFamily,
      color: theme.palette.primary.light,
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '150%',
      display: 'flex',
      gap: '0.4rem',
      marginBottom: '0.625rem',

      '&::after': {
         content: '"*"',
         color: 'red',
         fontSize: '1rem',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: '150%',
      },
   },

   '.SmsContent': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginTop: '0.75rem',

      label: {
         marginBottom: '-1.2rem',

         '&::after': {
            content: "''",
         },
      },

      textarea: {
         width: '99%',
         height: '9.375rem',
         resize: 'none',
         borderRadius: '0.375rem',
         padding: '0.75rem 0.625rem',
         fontSize: '1rem',

         '&:focus': {
            outline: 'none',
            border: '2px solid #CB11AB',
         },
      },

      p: {
         color: 'red',
         margin: '0',
      },
   },
}))
