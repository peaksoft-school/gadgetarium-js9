import * as z from 'zod'

export const schemaSignIn = z.object({
   email: z.string().email('Заполните обязательные поля'),
   password: z
      .string()
      .min(6, 'Пароль должен содержать буквы и цифры')
      .regex(
         /^(?=.*[A-Z])(?=.*\d)/,
         'Пароль должен содержать хотя бы одну заглавную букву'
      ),
})

export const schemaSignUp = z
   .object({
      firstName: z.string().nonempty('Заполните обязательные поля').min(3),
      lastName: z.string().nonempty('Заполните обязательные поля').min(3),
      phoneNumber: z
         .string()
         .nonempty('Заполните обязательные поля')
         .min(12, 'Номер телефона должен состоять из 13 символов')
         .regex(/^\+996[0-9]{9}$/, {
            message: 'Введите корректный номер телефона, начинающийся с +996',
         }),
      email: z
         .string()
         .nonempty('Заполните обязательные поля')
         .email('Неправильно указан Email'),
      password: z
         .string()
         .min(6, 'Пароль обязателен для заполнения')
         .regex(
            /^(?=.*[A-Z])(?=.*\d)/,
            'Пароль должен содержать буквы,цифры и одну заглавную букву'
         ),
      confirmPassword: z
         .string()
         .nonempty('Подтверждение пароля обязательно для заполнения'),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: 'Пароли не совпадают',
      path: ['confirmPassword'],
   })
