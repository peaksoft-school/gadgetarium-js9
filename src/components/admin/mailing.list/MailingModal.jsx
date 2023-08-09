import { styled } from '@mui/material'
import React from 'react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { Button } from '../../UI/Button'
import { Calendar } from '../../UI/calendarFolder/Calendar'
import { InputUi } from '../../UI/Input'
import { ReactComponent as AddPhotoIcon } from '../../../assets/icons/photo-add/add-photo-icon.svg'
import { Modal } from '../../UI/Modal'

const schema = z.object({
   image: z.string().min(1),
   mealName: z.string().min(1).max(255),
   mealDescription: z.string().min(1).max(500),
   startDate: z.date().min(new Date()),
   finishDate: z.date().min(new Date()),
})
export const MailingModal = ({ open, handleClose }) => {
   const { register, handleSubmit, getValues, control, reset } = useForm({
      defaultValues: {
         image: '',
         mealName: '',
         mealDescription: '',
         startDate: new Date(Date.now()),
         finishDate: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })
   const values = getValues()
   const submitHandler = () => {
      const data = {
         title: values.mealName,
         description: values.mealDescription,
         image: values.image,
         startDate: values.startDate,
         finishDate: values.finishDate,
      }
      console.log('data: ', data)
      handleClose()
      reset()
   }
   return (
      <Modal open={open.has('openModal')} onClose={handleClose}>
         <Form onSubmit={handleSubmit(submitHandler)}>
            <AnswerToComment>Создать рассылку</AnswerToComment>
            <Controller
               name="image"
               control={control}
               render={({ field }) => {
                  return (
                     <FileInputLabel>
                        {field.value ? (
                           <StyledImage src={field.value} alt="" />
                        ) : (
                           <>
                              <StyledAddPhotoIcon />
                              <InputText>
                                 Нажмите для добавления фотографии
                              </InputText>
                              <Input
                                 type="file"
                                 {...field}
                                 onChange={(e) => {
                                    field.onChange(
                                       URL.createObjectURL(e.target.files[0])
                                    )
                                 }}
                              />
                           </>
                        )}
                     </FileInputLabel>
                  )
               }}
            />
            <InputContainer>
               <InputLabelContainer>
                  <Label>
                     Название рассылки <span>*</span>
                  </Label>
                  <InputUi
                     {...register('mealName')}
                     width="100%"
                     height="2.1875rem"
                     placeholder="Введите название рассылки"
                  />
               </InputLabelContainer>
               <InputLabelContainer>
                  <Label>
                     Описание рассылки <span>*</span>
                  </Label>
                  <InputUi
                     {...register('mealDescription')}
                     width="100%"
                     height="2.1875rem"
                     placeholder="Введите описание рассылки"
                  />
               </InputLabelContainer>
               <CalendarContainer>
                  <InputLabelContainer>
                     <Label>
                        Дата начала акции <span>*</span>
                     </Label>
                     <Controller
                        name="startDate"
                        control={control}
                        render={({ field }) => (
                           <Calendar
                              onChange={(newDate) => {
                                 field.onChange(newDate.$d)
                              }}
                              value={dayjs(field.value)}
                              fontSize="1rem"
                              placeholder="Выберите дату"
                              width="100%"
                           />
                        )}
                     />
                  </InputLabelContainer>
                  <InputLabelContainer>
                     <Label>
                        Дата окончания акции <span>*</span>
                     </Label>
                     <Controller
                        name="finishDate"
                        control={control}
                        render={({ field }) => (
                           <Calendar
                              onChange={(newDate) => {
                                 field.onChange(newDate.$d)
                              }}
                              value={dayjs(field.value)}
                              fontSize="1em"
                              placeholder="Выберите дату"
                              width="100%"
                           />
                        )}
                     />
                  </InputLabelContainer>
               </CalendarContainer>
            </InputContainer>
            <ButtonContainer>
               <Button
                  variant="outlined"
                  textTransform="uppercase"
                  backgroundHover="#CB11AB"
                  backgroundActive="#CB11AB"
                  padding="0.69vh 5vw"
                  fontSize="0.875rem"
                  onClick={handleClose}
               >
                  Отменить
               </Button>
               <Button
                  variant="contained"
                  textTransform="uppercase"
                  padding="0.69vh 5vw"
                  fontSize="0.875rem"
                  type="submit"
               >
                  Отправить
               </Button>
            </ButtonContainer>
         </Form>
      </Modal>
   )
}

const Form = styled('form')(() => ({
   width: '28.5%',
   height: '63.334%',
   padding: '1.66666vw',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   position: 'absolute',
   top: '50%',
   backgroundColor: 'white',
   borderRadius: '0.25rem',
   boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.10)',
   left: '50%',
   transform: 'translate(-50%, -50%)',
}))
const Input = styled('input')`
   display: none;
`
const InputContainer = styled('div')`
   display: flex;
   width: 100%;
   flex-direction: column;
`
const CalendarContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   gap: 20px;
`

const ButtonContainer = styled('div')`
   width: 100%;
   margin-top: 0.75rem;
   display: flex;
   justify-content: space-between;
   gap: 1.25rem;
   @media (max-height: 960px) {
      margin-top: 0.5rem;
   }
`
const AnswerToComment = styled('p')`
   margin-top: 0.5rem;
   margin-bottom: 2.25rem;
   font-family: Inter;
   font-size: 1.5rem;
   font-style: normal;
   font-weight: 500;
   line-height: 2rem;
   @media (max-height: 960px) {
      margin-bottom: 1rem;
      margin-top: 0;
   }
`
const Label = styled('label')`
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   span {
      color: red;
   }
`
const InputLabelContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.375rem;
   margin-bottom: 1.25rem;
   @media (max-height: 960px) {
      margin-bottom: 0.5rem;
   }
`
const FileInputLabel = styled('label')`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.875rem;
   justify-content: center;
   width: 43.86%;
   height: 35.12%;
   background-color: #909cb533;
   margin-bottom: 2rem;
   border-radius: 4px;
`
const StyledAddPhotoIcon = styled(AddPhotoIcon)`
   width: 28px;
   height: 28px;
`
const InputText = styled('p')`
   font-family: Inter;
   font-size: 12px;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
   color: #91969e;
   width: 80%;
   text-align: center;
   margin: 0;
`
const StyledImage = styled('img')`
   object-fit: cover;
   width: 100%;
   height: 100%;
   border-radius: 4px;
`
