import { styled } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '../UI/Button'
import { InputUi } from '../UI/Input'

export const UserInfo = () => {
   const [valueEmail, setValueEmail] = useState('')
   const [isEmailValid, setIsEmailValid] = useState(true)
   const [messageValue, setMessageValue] = useState('')

   const validateEmail = (e) => {
      const email = e.target.value
      setValueEmail(email)

      if (email.includes('@')) {
         setIsEmailValid(true)
      } else {
         setIsEmailValid(false)
      }
   }

   const validateMessage = (e) => {
      const message = e.target.value
      if (message.length < 5) {
         setMessageValue(true)
      } else {
         setMessageValue(false)
      }
   }

   const buttonСleaning = (e) => {
      e.preventDefault()

      setValueEmail('')
      setMessageValue('')
   }
   return (
      <Container>
         <h3>Напишите нам</h3>

         <div className="InfoContent">
            <div>
               <label htmlFor="name">Имя </label>
               <InputUi
                  width="21.125rem"
                  height="3rem"
                  padding="0.5rem 0.625rem"
                  id="name"
                  type="text"
                  placeholder="Напишите ваше имя"
               />
            </div>
            <div>
               <label htmlFor="surname">Фамилия </label>
               <InputUi
                  width="21.125rem"
                  height="3rem"
                  padding="0.5rem 0.625rem"
                  id="surname"
                  type="text"
                  placeholder="Напишите вашу фамилию"
               />
            </div>
            <div>
               <label htmlFor="email">E-mail </label>
               <InputUi
                  width="21.125rem"
                  height="3rem"
                  padding="0.5rem 0.625rem"
                  error={!isEmailValid}
                  onChange={validateEmail}
                  value={valueEmail}
                  id="email"
                  type="email"
                  placeholder="Напишите ваш email"
               />
            </div>
            <div>
               <label htmlFor="phone">Телефон </label>
               <InputUi
                  width="21.125rem"
                  height="3rem"
                  padding="0.5rem 0.625rem"
                  id="phone"
                  type="tel"
                  placeholder="+996 (_ _ _) _ _  _ _  _ _"
               />
            </div>
         </div>

         <div className="SmsContent">
            <label htmlFor="Sms">Сообщение</label>
            <InputUi
               width="99%"
               height="9.375rem"
               onChange={validateMessage}
               padding="-3.75rem 0.625rem 0  0"
               id="Sms"
               type="text"
               placeholder="Напишите сообщение"
            />
            {messageValue && <p>Напишите сообщение не менее 5 букв</p>}

            <Button
               className="button"
               padding="0.88rem 0 1rem 0"
               variant="contained"
               onClick={buttonСleaning}
            >
               Отправить
            </Button>
         </div>
      </Container>
   )
}

const Container = styled('div')(({ theme }) => ({
   width: '43rem',
   marginTop: '3.75rem',

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
      marginBottom: '2.5rem',
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

      // flexDirection: 'column',
      '&::after': {
         content: '"*"',
         color: 'red',
         fontSize: '1rem',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: '150%',

         // display: 'inline',
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
      p: {
         color: 'red',
      },
   },
}))
