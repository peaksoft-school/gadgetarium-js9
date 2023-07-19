import { styled } from '@mui/material'
import React from 'react'
import { ReactComponent as EditIcon } from '../../../assets/icons/tools-for-site/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import ReviewStars from './ReviewStars'
import { ReactComponent as DefaultIcon } from '../../../assets/icons/avatar/default-avatar-icon.svg'

const Reviews = ({
   userName,
   userIcon: Icon = DefaultIcon,
   userText,
   timePublication,
   stars,
   adminReviewState,
   canUserEdit,
   adminText = '',
}) => {
   const StyledUserIcon = styled(Icon)`
      width: 4vw;
      height: 5.309vh;
      path {
         fill: #dedede;
      }
   `
   return (
      <Container>
         <UserContainer>
            {Icon && <StyledUserIcon />}
            <UserDescriptionContainer>
               <Name>{userName}</Name>
               <Time>{timePublication}</Time>
            </UserDescriptionContainer>
         </UserContainer>
         <UserReviewContainer canUserEdit={canUserEdit}>
            <ReviewStars stars={stars} />
            <UserText>{userText}</UserText>
            {adminReviewState && (
               <AdminText>
                  <Name>Ответ от представителя</Name>
                  <Text>{adminText}</Text>
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
   margin: 0;
   line-height: 1.5rem;
`
const Time = styled('p')`
   font-size: 0.875rem;
   line-height: 1.225rem;
   font-weight: 400;
   color: #000000;
   opacity: 0.5;
   margin: 0;
`
const UserReviewContainer = styled('div')`
   margin-bottom: ${(props) => (props.canUserEdit ? '0.625rem' : '2.5rem')};
   margin-left: 3.25rem;
`
const UserText = styled('p')`
   color: #384255;
   width: 51.5625rem;
   line-height: 1.5rem;
   margin: 0;
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
