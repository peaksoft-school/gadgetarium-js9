import { styled } from '@mui/material'
import React from 'react'
import { ReactComponent as UserIcon } from '../../assets/icons/avatar/user-avatar-icon.svg'
import ReviewStars from './ReviewStars'

const Reviews = () => {
   return (
      <Container>
         <ReviewsContainer>
            <UserContainer>
               <StyledUserIcon />
               <UserDescriptionContainer>
                  <Name>Адыл Бакытов</Name>
                  <Time>22.05.22 - 14:20</Time>
               </UserDescriptionContainer>
            </UserContainer>
            <UserReviewContainer>
               <ReviewStars stars={2} />
               <UserText>
                  {`- Размер (разумный - достаточно большой для чтения/просмотра
                  контента, но не чрезмерный) - Камера (первое время режимом
                  "мультикадр" был приятно удивлён + мегапикселей не пожалели на
                  основную камеру, зум работает увереннее, чем y конкурентов) -
                  Экран (приятная цветопередача,`}
               </UserText>
            </UserReviewContainer>
         </ReviewsContainer>
      </Container>
   )
}

export default Reviews
const Container = styled('div')`
   width: 54.8125rem;
   border-bottom: 1px solid #e8e8e8;
`
const ReviewsContainer = styled('div')`
   height: 11.5rem;
`
const UserContainer = styled('div')`
   display: flex;
   gap: 12px;
`
const UserDescriptionContainer = styled('div')``
const Name = styled('h4')`
   line-height: 24px;
`
const Time = styled('p')`
   font-size: 14px;
   line-height: 19.6px;
   font-weight: 400;
   color: #000000 50%;
`
const StyledUserIcon = styled(UserIcon)`
   width: 2.5rem;
   height: 2.5rem;
`
const UserReviewContainer = styled('div')`
   margin-top: 0.75rem;
   margin-left: 3.25rem;
`
const UserText = styled('p')``
