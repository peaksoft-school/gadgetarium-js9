import { styled } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '../UI/Button'
import { InputUi } from '../UI/Input'

export const UserInfo = () => {
   const [isEmailValid, setIsEmailValid] = useState(false)
   const [messageValue, setMessageValue] = useState('')
   const [all, setAll] = useState({
      name: '',
      surname: '',
      tel: '+996',
      email: '',
      message: '',
   })

   const validateEmail = (e) => {
      const email = e.target.value
      setAll(email)

      if (email.includes('@')) {
         setIsEmailValid(true)
      } else {
         setIsEmailValid(false)
      }
   }

   const validateMessage = (e) => {
      const message = e.target.value
      setAll(message)
      if (message.length < 5) {
         setMessageValue(true)
      } else {
         setMessageValue(false)
      }
   }

   const onChangeAllInput = (e) => {
      setAll(e.target.value)
   }

   const buttonСleaning = (e) => {
      e.preventDefault()

      setMessageValue('')
      setAll({
         name: '',
         surname: '',
         tel: '',
         email: '',
         message: '',
      })
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
                  value={all.name}
                  height="3rem"
                  width="21.125rem"
                  padding="0.5rem 0.625rem"
                  onChange={onChangeAllInput}
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
                  padding="0.5rem 0.625rem"
                  onChange={onChangeAllInput}
                  placeholder="Напишите вашу фамилию"
               />
            </div>

            <div>
               <label htmlFor="email">E-mail </label>
               <InputUi
                  id="email"
                  type="email"
                  height="3rem"
                  width="21.125rem"
                  value={all.email}
                  error={!isEmailValid}
                  onChange={validateEmail}
                  padding="0.5rem 0.625rem"
                  placeholder="Напишите ваш email"
               />
            </div>

            <div>
               <label htmlFor="phone">Телефон </label>
               <InputUi
                  id="phone"
                  type="tel"
                  value={all.tel}
                  height="3rem"
                  width="21.125rem"
                  padding="0.5rem 0.625rem"
                  onChange={onChangeAllInput}
                  placeholder="+996 (_ _ _) _ _  _ _  _ _"
               />
            </div>
         </div>

         <div className="SmsContent">
            <label htmlFor="Sms">Сообщение</label>
            <textarea
               name="dsads"
               id="Sms"
               value={all.message}
               onChange={validateMessage}
               placeholder="Напишите сообщение"
            />

            {messageValue && <p>Напишите сообщение не менее 5 букв</p>}

            <Button
               className="button"
               variant="contained"
               disabled={all.message || Boolean(messageValue) || !isEmailValid}
               onClick={buttonСleaning}
               padding="0.88rem 0 1rem 0"
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
         border: '1px solid #CDCDCD',
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
      },
   },
}))
