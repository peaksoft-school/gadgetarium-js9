import { styled } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../UI/Button'
import { InputUi } from '../UI/Input'

const schema = z.object({
   email: z
      .string()
      .regex(
         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
         'Неправильно указан Email'
      ),
   message: z.string().min(5, 'Напишите не менее 5 символов'),
   phone: z
      .string()
      .nonempty('Заполните обязательные поля')
      .regex(/^\+996[0-9]{9}$/, {
         message: 'Введите корректный номер телефона, начинающийся с +996',
      }),
})

export const UserInfo = () => {
   const { register, handleSubmit, reset, formState, trigger } = useForm({
      defaultValues: {
         email: '',
         phone: '+996',
         message: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })

   const onSubmit = (data) => {
      console.log(data)
      reset()
      trigger()
   }

   return (
      <Container onSubmit={handleSubmit(onSubmit)}>
         <h3>Напишите нам</h3>

         <div className="InfoContent">
            <div>
               <label htmlFor="name">Имя </label>
               <InputUi
                  id="name"
                  type="text"
                  height="3rem"
                  width="21.125rem"
                  padding="0.5rem 0.625rem"
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
                  padding="0.5rem 0.625rem"
                  placeholder="Напишите вашу фамилию"
               />
            </div>

            <div>
               <label htmlFor="email">E-mail </label>
               <InputUiStyled
                  {...register('email')}
                  id="email"
                  type="email"
                  height="3rem"
                  width="21.125rem"
                  padding="0.5rem 0.625rem"
                  placeholder="Напишите ваш email"
                  error={Boolean(!formState.errors?.email)}
               />
            </div>

            <div>
               <label htmlFor="phone">Телефон </label>
               <InputUi
                  type="tel"
                  height="3rem"
                  {...register('phone')}
                  format="+996 (###) ###-###"
                  width="21.125rem"
                  padding="0.5rem 0.625rem"
                  placeholder="+996 (_ _ _) _ _  _ _  _ _"
               />
            </div>
         </div>

         <div className="SmsContent">
            <label htmlFor="Sms">Сообщение</label>
            <textarea
               {...register('message')}
               id="Sms"
               placeholder="Напишите сообщение"
            />
            {formState.errors.message && (
               <p>{formState.errors.message.message}</p>
            )}
            {formState.errors.email && (
               <p>{!formState.errors.email?.message}</p>
            )}

            <Button
               className="button"
               variant="contained"
               type="submit"
               padding="0.88rem 0 1rem 0"
               disabled={formState.errors?.email || formState.errors?.message}
            >
               Отправить
            </Button>
         </div>
      </Container>
   )
}
// const InputMuiStyled = styled(InputUi)``
const Container = styled('form')(({ theme, formState }) => ({
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
         borderRadius: '0.375rem',
         padding: '0.75rem 0.625rem',
         fontSize: '1rem',
         border: formState?.message ? '2px solid red' : '1px solid #CDCDCD',

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

const InputUiStyled = styled(InputUi)`
   background-color: red;
   &.error {
      border: 2px solid red;
   }
`
