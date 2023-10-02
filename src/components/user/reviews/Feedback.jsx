import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as EditIcon } from '../../../assets/icons/tools-for-site/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import FeedbackStars from './FeedbackStars'
import { ReactComponent as DefaultIcon } from '../../../assets/icons/avatar/default-avatar-icon.svg'
import FeedbackModal from '../../admin/feedback/FeedbackModal'
import {
   deleteReviewsRequest,
   getInfoPage,
} from '../../../store/informationPhone/infoPageThunk'
import { EditModal } from './EditModal'
import { infoPageActions } from '../../../store/informationPhone/infoPageSlice'
import { useSnackbar } from '../../../hooks/useSnackbar'

const Feedback = ({
   userName,
   userIcon,
   userText,
   timePublication,
   stars,
   canUserEdit,
   adminState,
   reviewId,
   subProductId,
   answer,
}) => {
   const dispatch = useDispatch()

   const { snackbarHandler } = useSnackbar()

   const { role } = useSelector((state) => state.auth)

   const { productId, color } = useSelector((state) => state.product.infoPhone)

   const [openModal, setOpenModal] = useState()
   const [adminText, setAdminText] = useState(answer)
   const [modalText, setModalText] = useState(adminText)
   const [adminReviewState, setAdminReviewState] = useState(!!answer)
   const [open, setOpen] = useState(false)
   const [isEditing, setIsEditing] = useState(false)

   const getAdminText = (e) => {
      setModalText(e.target.value)
   }

   const saveTextHandler = () => {
      if (modalText === '') {
         if (adminReviewState === true) {
            setAdminReviewState(false)
            setModalText('')
            setOpenModal(false)
         }

         return null
      }
      setAdminReviewState(true)
      setOpenModal(false)
      setAdminText(modalText)
      return null
   }

   const deleteUserReviwes = async () => {
      dispatch(deleteReviewsRequest({ reviewId, snackbarHandler }))
         .unwrap()
         .then(() => {
            dispatch(getInfoPage({ productId, colour: color }))
         })
   }

   const toggleUserHandler = () => {
      dispatch(infoPageActions.getUserComment(reviewId))
      setOpen(!open)
   }
   const closeModalHandler = () => {
      setOpenModal(false)
   }
   const openModalHandler = () => {
      setIsEditing(adminReviewState)
      setOpenModal(true)
   }

   const disabledAction = answer === null ? canUserEdit : false

   return (
      <Container>
         <UserContainer>
            {userIcon ? (
               <StyledUserIcon icon={userIcon} />
            ) : (
               <StyledDefalutIcon />
            )}
            <UserDescriptionContainer>
               <Name>{userName}</Name>
               <Time>{timePublication}</Time>
            </UserDescriptionContainer>
         </UserContainer>
         <UserReviewContainer canUserEdit={canUserEdit}>
            <FeedbackStars stars={stars} />
            <UserText>{userText}</UserText>
            {adminReviewState && (
               <AdminText>
                  <Name>Ответ от представителя</Name>
                  <Text>{adminText}</Text>
               </AdminText>
            )}
         </UserReviewContainer>
         {disabledAction && (
            <ToolContainer>
               <EditIcon onClick={toggleUserHandler} />
               <DeleteIcon onClick={deleteUserReviwes} />
            </ToolContainer>
         )}
         {adminState && role === 'ADMIN' && (
            <AdminButtonContainer>
               <AdminButton onClick={openModalHandler}>
                  {adminReviewState ? 'Редактировать' : 'Ответить'}
               </AdminButton>
               {openModal && (
                  <FeedbackModal
                     isEditing={isEditing}
                     setIsEditing={setIsEditing}
                     subProductId={subProductId}
                     reviewId={reviewId}
                     modalText={modalText}
                     getAdminText={getAdminText}
                     saveTextHandler={saveTextHandler}
                     open={openModal}
                     adminReviewState={adminReviewState}
                     handleClose={closeModalHandler}
                  />
               )}
            </AdminButtonContainer>
         )}
         {open && (
            <EditModal
               reviewId={reviewId}
               open={open}
               onClose={toggleUserHandler}
            />
         )}
      </Container>
   )
}

export default Feedback
const Container = styled('div')`
   width: 40rem;
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
const StyledDefalutIcon = styled(DefaultIcon)`
   width: 2.5rem;
   height: 2.5rem;
   path {
      fill: #dedede;
   }
`
const StyledUserIcon = styled('img')(({ icon }) => ({
   backgroundImage: `url(${icon})`,
   backgroundSize: 'cover',
   width: '2.5rem',
   height: '2.5rem',
   borderRadius: '100%',
   border: 'none',
}))
const UserContainer = styled('div')`
   display: flex;
   gap: 0.75rem;
`
const AdminButton = styled('button')`
   color: #cb11ab;
   font-family: Inter;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   background-color: white;
   border: none;
   margin-bottom: 0.5rem;
   cursor: pointer;
`
const AdminButtonContainer = styled('div')`
   display: flex;
   justify-content: flex-end;
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
   width: 38rem;
   line-height: 1.5rem;
   margin: 0;
`
const AdminText = styled('div')`
   margin-top: 1.25rem;
   width: 100%;
   padding: 1.25rem;
   background-color: #e8e8e8;
   border-radius: 0.375rem;
`
const Text = styled('div')`
   line-height: 1.4rem;
   width: 100%;
   color: #384255;
`
