import { styled } from '@mui/material'
import React from 'react'
import { ReactComponent as UserIcon } from '../../assets/icons/avatar/user-avatar-icon.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/tools-for-site/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/tools-for-site/delete-icon.svg'
import ReviewStars from './ReviewStars'

const Reviews = ({
   // userName,
   // userIcon = User
   // userText,
   // timePublication,
   // stars,
   adminReviewState,
   canUserEdit,
   // adminText,
}) => {
   return (
      <Container>
         <UserContainer>
            <StyledUserIcon />
            <UserDescriptionContainer>
               <Name>Адыл Бакытов</Name>
               <Time>22.05.22 - 14:20</Time>
            </UserDescriptionContainer>
         </UserContainer>
         <UserReviewContainer canUserEdit={canUserEdit}>
            <ReviewStars stars={3} />
            <UserText>
               {`- Размер (разумный - достаточно большой для чтения/просмотра контента, но не чрезмерный)
                    - Камера (первое время режимом "мультикадр" был приятно удивлён + мегапикселей не пожалели на основную камеру, зум работает увереннее, чем у конкурентов)
                    - Экран (приятная цветопередача, читать комфортно, повышенная герцовка в первые разы восхищала).`}
            </UserText>
            {adminReviewState && (
               <AdminText>
                  <Name>Ответ от представителя</Name>
                  <Text>
                     {`Добрый день! Благодарим Вас за отзыв, рады быть полезными. Спасибо, что выбираете нас. Хорошего дня! `}
                  </Text>
               </AdminText>
            )}
         </UserReviewContainer>
         {canUserEdit && (
            <ToolContainer>
               <EditIcon />
               <DeleteIcon />
            </ToolContainer>
         )}
      </Container>
   )
}

export default Reviews
const Container = styled('div')`
   width: 54.8125rem;
   border-bottom: 0.0625rem solid #e8e8e8;
`
const ToolContainer = styled('div')`
   display: flex;
   gap: 1.125rem;
   justify-content: flex-end;
   align-items: center;
   margin-bottom: 0.625rem;
   svg {
      cursor: pointer;
   }
`
const UserContainer = styled('div')`
   display: flex;
   gap: 0.75rem;
`
const UserDescriptionContainer = styled('div')``
const Name = styled('h4')`
   line-height: 1.5rem;
`
const Time = styled('p')`
   font-size: 0.875rem;
   line-height: 1.225rem;
   font-weight: 400;
   color: #000000 50%;
`
const StyledUserIcon = styled(UserIcon)`
   width: 2.5rem;
   height: 2.5rem;
`
const UserReviewContainer = styled('div')`
   margin-bottom: ${(props) => (props.canUserEdit ? '0.625rem' : '2.5rem')};
   margin-left: 3.25rem;
`
const UserText = styled('p')`
   color: #384255;
   width: 51.5625rem;
   line-height: 1.5rem;
`
const AdminText = styled('div')`
   margin-top: 1.25rem;
   width: 51.5625rem;
   padding: 1.25rem;
   background-color: #e8e8e8;
   border-radius: 0.375rem;
`
const Text = styled('div')`
   line-height: 1.4rem;
   color: #384255;
`
