import { styled } from '@mui/material'
import React, { useState } from 'react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { Button } from '../../UI/Button'
import { Calendar } from '../../UI/calendarFolder/Calendar'
import { InputUi } from '../../UI/Input'
import { Modal } from '../../UI/Modal'
import { adminGoodsActions } from '../../../store/admin.goods/admin.goods.slice'
import { postDiscount } from '../../../store/admin.goods/admin.goods.thunk'
import { useSnackbar } from '../../../hooks/useSnackbar'

const today = new Date()
today.setHours(0, 0, 0, 0)

const schema = z.object({
   amountOfDiscount: z.string().min(1),
   discountStartDate: z.date().min(today),
   discountEndDate: z.date().min(today),
})
export const DiscountModal = ({ open, handleClose, onClick }) => {
   const {
      register,
      handleSubmit,
      getValues,
      control,
      reset,
      formState,
      watch,
      setValue,
   } = useForm({
      defaultValues: {
         amountOfDiscount: '',
         discountStartDate: new Date(Date.now()),
         discountEndDate: null,
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })
   const [firstDateSelected, setFirstDateSelected] = useState(false)
   const { checkedProducts } = useSelector((state) => state.adminGoods)
   const dispatch = useDispatch()
   const discountStartDate = watch('discountStartDate')
   const discountEndDate = watch('discountEndDate')
   const { snackbarHandler } = useSnackbar()
   const submitHandler = () => {
      const data = getValues()
      const updatedData = {
         discountStartDate: dayjs(data.discountStartDate).format('YYYY-MM-DD'),
         discountEndDate: dayjs(data.discountEndDate).format('YYYY-MM-DD'),
         amountOfDiscount: parseInt(data.amountOfDiscount, 10),
         subProductIds: checkedProducts,
      }
      dispatch(adminGoodsActions.falseAllChecked())
      if (checkedProducts.length === 0) {
         snackbarHandler({
            type: 'error',
            message: 'Выберите товар чтобы добавить скидку!',
         })
      } else {
         dispatch(postDiscount({ data: updatedData, snackbarHandler, onClick }))
         handleClose()
         reset()
      }
   }
   const handleamountOfDiscountChange = (e) => {
      let value = e.target.value.replace(/\D/g, '')
      if (value > 100) {
         value = '100'
      }
      const formattedValue = value !== '' ? `${value}%` : ''
      setValue('amountOfDiscount', formattedValue, {
         shouldDirty: true,
         shouldValidate: true,
      })
   }
   const handleKeyDown = (e) => {
      if (e.key === 'Backspace') {
         e.preventDefault()
         const amountOfDiscount = getValues('amountOfDiscount')

         if (amountOfDiscount.length === 2) {
            setValue('amountOfDiscount', '')
         } else if (amountOfDiscount.length > 1) {
            setValue(
               'amountOfDiscount',
               amountOfDiscount.slice(0, -2) + amountOfDiscount.slice(-1),
               {
                  shouldDirty: true,
                  shouldValidate: true,
               }
            )
         }
      }
   }
   const closeModalHandler = () => {
      handleClose()
      reset()
   }
   return (
      <Modal open={open.has('openModalDiscount')} onClose={closeModalHandler}>
         <Form onSubmit={handleSubmit(submitHandler)}>
            <AnswerToComment>Создать скидку</AnswerToComment>
            <InputContainer>
               <InputLabelContainer>
                  <Label>
                     Размер скидки <span>*</span>
                  </Label>
                  <InputUi
                     {...register('amountOfDiscount')}
                     width="100%"
                     height="1.823vw"
                     fontSize="0.83333vw"
                     placeholder="0%"
                     error={!!formState.errors.amountOfDiscount}
                     classpadding="3px 14px"
                     onChange={handleamountOfDiscountChange}
                     onKeyDown={handleKeyDown}
                  />
               </InputLabelContainer>
               <CalendarContainer>
                  <InputLabelContainer>
                     <Label>
                        Дата начала скидки <span>*</span>
                     </Label>
                     <Controller
                        name="discountStartDate"
                        control={control}
                        render={({ field }) => (
                           <Calendar
                              onChange={(newDate) => {
                                 field.onChange(new Date(newDate))
                                 if (!firstDateSelected) {
                                    setFirstDateSelected(true)
                                 }
                              }}
                              value={dayjs(field.value)}
                              maxDate={
                                 firstDateSelected
                                    ? dayjs(discountEndDate)
                                    : undefined
                              }
                              fontSize="0.83333vw"
                              height="1.823vw"
                              error={!!formState.errors.discountStartDate}
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
                        name="discountEndDate"
                        control={control}
                        render={({ field }) => {
                           return (
                              <Calendar
                                 onChange={(newDate) => {
                                    field.onChange(newDate.$d)
                                    if (!firstDateSelected) {
                                       setFirstDateSelected(true)
                                    }
                                 }}
                                 minDate={
                                    firstDateSelected
                                       ? dayjs(discountStartDate)
                                       : undefined
                                 }
                                 value={field.value}
                                 fontSize="0.83333vw"
                                 placeholder="Выберите дату"
                                 error={!!formState.errors.discountEndDate}
                                 height="1.823vw"
                                 width="100%"
                              />
                           )
                        }}
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
                  onClick={closeModalHandler}
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
