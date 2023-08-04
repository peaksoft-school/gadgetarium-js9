import { styled } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '../../UI/Button'
import { Calendar } from '../../UI/calendarFolder/Calendar'
import { InputUi } from '../../UI/Input'
import { ReactComponent as AddPhotoIcon } from '../../../assets/icons/photo-add/add-photo-icon.svg'
import { Modal } from '../../UI/Modal'

export const MealingModal = ({ open, handleClose }) => {
   const currentDate = new Date(Date.now())
   const day = currentDate.getDate()
   const month = currentDate.getMonth() + 1
   const year = currentDate.getFullYear()
   const formattedDate = `${day < 10 ? '0' : ''}${day}/${
      month < 10 ? '0' : ''
   }${month}/${year}`
   const [startDate, setStartDate] = useState()
   const [image, setImage] = useState()
   const [mealName, setMealName] = useState('')
   const [mealDescription, setMealDescription] = useState('')
   const [finishDate, setFinishDate] = useState()

   const getMealName = (e) => {
      setMealName(e.target.value)
   }
   const getMealDescription = (e) => {
      setMealDescription(e.target.value)
   }
   const getFinishDate = (e) => {
      setFinishDate(e.target.value)
   }
   const getStartDate = (e) => {
      setStartDate(e.$d)
   }

   const getImageValue = (e) => {
      setImage(e.target.files[0])
   }
   const urlImage = image && URL.createObjectURL(image)
   const submitHandler = () => {
      const data = {
         title: mealName,
         description: mealDescription,
         image: urlImage,
         startDate,
         finishDate,
      }
      console.log('data: ', data)
   }
   return (
      <Modal open={open.has('openModal')} onClose={handleClose}>
         <Form onSubmit={submitHandler}>
            <AnswerToComment>Создать рассылку</AnswerToComment>
            <FileInputLabel>
               {image ? (
                  <StyledImage src={urlImage} alt="" />
               ) : (
                  <>
                     <StyledAddPhotoIcon />
                     <InputText>Нажмите для добавления фотографии</InputText>
                     <input
                        type="file"
                        onChange={getImageValue}
                        style={{ display: 'none' }}
                     />
                  </>
               )}
            </FileInputLabel>
            <InputContainer>
               <InputLabelContainer>
                  <Label>
                     Название рассылки <span>*</span>
                  </Label>
                  <InputUi
                     width="100%"
                     height="35px"
                     value={getMealName}
                     onChange={getMealName}
                     placeholder="Введите название рассылки"
                  />
               </InputLabelContainer>
               <InputLabelContainer>
                  <Label>
                     Описание рассылки <span>*</span>
                  </Label>
                  <InputUi
                     width="100%"
                     height="35px"
                     value={mealDescription}
                     onChange={getMealDescription}
                     placeholder="Введите описание рассылки"
                  />
               </InputLabelContainer>
               <CalendarContainer>
                  <InputLabelContainer>
                     <Label>
                        Дата начала акции <span>*</span>
                     </Label>
                     <Calendar
                        onChange={getStartDate}
                        fontSize="1rem"
                        placeholder={formattedDate}
                        width="100%"
                     />
                  </InputLabelContainer>
                  <InputLabelContainer>
                     <Label>
                        Дата окончания акции <span>*</span>
                     </Label>
                     <Calendar
                        onChange={getFinishDate}
                        fontSize="1em"
                        placeholder="Выберете дату"
                        width="100%"
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
                  type="onSubmit"
               >
                  Отправить
               </Button>
            </ButtonContainer>
         </Form>
      </Modal>
   )
}

export default MealingModal
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
   background: '#FFF',
   boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.10)',
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
   gap: 20px;
`

const ButtonContainer = styled('div')`
   width: 100%;
   margin-top: 0.75rem;
   display: flex;
   justify-content: space-between;
   gap: 1.25rem;
   @media (max-height: 900px) {
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
   @media (max-height: 900px) {
      font-size: 1rem;
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
   @media (max-height: 900px) {
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
   @media (max-height: 900px) {
      width: 38.86%;
      height: 30.12%;
      margin-bottom: 0.8rem;
   }
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
