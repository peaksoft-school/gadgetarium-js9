import { styled } from '@mui/material'
import React, { useState } from 'react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { Button } from '../../UI/Button'
import { Calendar } from '../../UI/calendarFolder/Calendar'
import { InputUi } from '../../UI/Input'
import { ReactComponent as AddPhotoIcon } from '../../../assets/icons/photo-add/add-photo-icon.svg'
import { Modal } from '../../UI/Modal'
import {
   postMailingList,
   postS3File,
} from '../../../store/admin.goods/admin.goods.thunk'
import { useSnackbar } from '../../../hooks/useSnackbar'

const today = new Date()
today.setHours(0, 0, 0, 0)
const schema = z.object({
   title: z.string().min(1).max(255),
   description: z.string().min(1).max(500),
   image: z.string().min(1),
   startDate: z.date().min(today),
   finishDate: z.date().min(today),
})
export const MailingModal = ({ open, handleClose }) => {
   const {
      register,
      handleSubmit,
      getValues,
      control,
      reset,
      watch,
      formState,
   } = useForm({
      defaultValues: {
         title: '',
         description: '',
         image: '',
         startDate: new Date(Date.now()),
         finishDate: null,
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })
   const dispatch = useDispatch()
   const { snackbarHandler } = useSnackbar()
   const [firstDateSelected, setFirstDateSelected] = useState(false)
   const startDate = watch('startDate')
   const finishDate = watch('finishDate')

   const submitHandler = () => {
      const data = getValues()
      const updatedData = {
         ...data,
         startDate: dayjs(startDate).format('YYYY-MM-DD'),
         finishDate: dayjs(finishDate).format('YYYY-MM-DD'),
      }
      dispatch(postMailingList({ data: updatedData, snackbarHandler }))
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
                                    const formData = new FormData()
                                    formData.append('file', e.target.files[0])
                                    dispatch(
                                       postS3File({
                                          data: formData,
                                          field,
                                       })
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
                     {...register('title')}
                     width="100%"
                     height="1.823vw"
                     fontSize="0.83333vw"
                     classpadding="true"
                     error={!!formState.errors.title}
                     placeholder="Введите название рассылки"
                  />
               </InputLabelContainer>
               <InputLabelContainer>
                  <Label>
                     Описание рассылки <span>*</span>
                  </Label>
                  <InputUi
                     {...register('description')}
                     width="100%"
                     height="1.823vw"
                     classpadding="true"
                     fontSize="0.83333vw"
                     error={!!formState.errors.description}
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
                                 if (!firstDateSelected) {
                                    setFirstDateSelected(true)
                                 }
                              }}
                              value={dayjs(field.value)}
                              maxDate={
                                 firstDateSelected
                                    ? dayjs(finishDate)
                                    : undefined
                              }
                              fontSize="0.83333vw"
                              error={!!formState.errors.startDate}
                              height="1.823vw"
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
                                 if (!firstDateSelected) {
                                    setFirstDateSelected(true)
                                 }
                              }}
                              minDate={
                                 firstDateSelected
                                    ? dayjs(startDate)
                                    : undefined
                              }
                              value={field.value}
                              fontSize="0.83333vw"
                              error={!!formState.errors.finishDate}
                              placeholder="Выберите дату"
                              height="1.823vw"
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
                  texttransform="uppercase"
                  backgroundhover="#CB11AB"
                  backgroundactive="#CB11AB"
                  padding="0.69vh 5vw"
                  fontSize="0.791vw"
                  onClick={handleClose}
               >
                  Отменить
               </Button>
               <Button
                  variant="contained"
                  texttransform="uppercase"
                  padding="0.69vh 5vw"
                  fontSize="0.791vw"
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
   width: '28.3334vw',
   padding: '1.66666vw',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   position: 'absolute',
   top: '50%',
   backgroundColor: 'white',
   borderRadius: '0.9%',
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
   gap: 1.07vw;
`

const ButtonContainer = styled('div')`
   width: 100%;
   margin-top: 1.1111vh;
   display: flex;
   justify-content: space-between;
   gap: 1.07vw;
`
const AnswerToComment = styled('p')`
   margin-top: 0.7407vh;
   margin-bottom: 3.3333vh;
   font-family: Inter;
   font-size: 1.252vw;
   font-style: normal;
   font-weight: 500;
`
const Label = styled('label')`
   font-family: Inter;
   font-size: 0.729vw;
   font-style: normal;
   font-weight: 400;
   span {
      color: red;
   }
`
const InputLabelContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.5555vh;
   margin-bottom: 1.8519vh;
`
const FileInputLabel = styled('label')`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.296vh;
   justify-content: center;
   width: 11.5135vw;
   height: 11.5135vw;
   background-color: #909cb533;
   margin-bottom: 2.96296vh;
   border-radius: 2%;
`
const StyledAddPhotoIcon = styled(AddPhotoIcon)`
   width: 1.4589vw;
   height: 1.4589vw;
`
const InputText = styled('p')`
   font-family: Inter;
   font-size: 0.625vw;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
   color: #91969e;
   text-align: center;
   margin: 0;
`
const StyledImage = styled('img')`
   object-fit: cover;
   width: 100%;
   height: 100%;
   border-radius: 2%;
`
