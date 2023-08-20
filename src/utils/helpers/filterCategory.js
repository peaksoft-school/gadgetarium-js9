import * as Yup from 'yup'

export const schema = Yup.object().shape({
   category: Yup.string().required('Обязательное поле'),
   brand: Yup.string().required('Обязательное поле'),
   name: Yup.string().required('Обязательное поле'),
   subcategory: Yup.string().required('Обязательное поле'),
   guarantee: Yup.number()
      .required('Обязательное поле')
      .min(1, 'Должно быть не менее 1')
      .max(121, 'Должно быть не более 120'),
   dateOfIssue: Yup.date().nullable().required('Обязательное поле'),
})
