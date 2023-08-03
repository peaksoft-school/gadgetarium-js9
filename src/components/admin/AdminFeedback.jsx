import { Rating, keyframes, styled } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as UserIcon } from '../../assets/icons/avatar/user-fill-icon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrows/down-icon.svg'
import { ReactComponent as ArrowUp } from '../../assets/icons/arrows/up-icon.svg'
import { Button } from '../UI/Button'
import { themes } from '../../utils/common/styles/themes'

const imagesArray = [1, 2, 3, 4, 5]
const AdminFeedback = ({
   index,
   stars,
   // userText,
   // userName,
   // modelName,
   // images = imagesArray,
   // time,
   // userEmail,
}) => {
   const [expanded, setExpanded] = useState(false)
   const [answerState, setAnswerState] = useState(false)
   const [adminAnswer, setAdminAnswer] = useState('')
   const [temporaryAnswer, setTemporaryAnswer] = useState('')
   const getAdminAnswer = (e) => {
      setTemporaryAnswer(e.target.value)
   }
   const answerToggleHandler = () => {
      setAnswerState((prev) => !prev)
   }
   const saveAnswerHandler = () => {
      setAdminAnswer(temporaryAnswer)
      setAnswerState(false)
   }
   const cancelAnswerHandler = () => {
      setTemporaryAnswer(adminAnswer)
      setAnswerState(false)
   }
   const deleteHandler = (id) => {
      console.log(id)
   }
   deleteHandler(1)
   const text =
      'Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик! Эрсултан, красавчик!'
   const handleToggle = () => {
      setExpanded((prevState) => !prevState)
   }
   const displayText = expanded ? text : text.slice(0, 123)
   return (
      <AdminReviewContainer>
         <ModelReviewContainer>
            <ModelContainer>
               <Index>{index}</Index>
               <StyledIcon themes={themes} />
               <ModelDescription themes={themes}>
                  <h5>Asus</h5>
                  <p>Модель</p>
                  <p>Арт. 1212121212</p>
               </ModelDescription>
            </ModelContainer>

            <UserReviewContainer>
               <UserText>
                  {displayText}
                  {!expanded && text.length > 123 && '...'}
               </UserText>
               <Time>20.06.22 - 14:15</Time>
               {expanded && (
                  <ImageContainer expanded={expanded}>
                     {imagesArray.map((el) => (
                        <StyledImage key={el} themes={themes}>
                           {el}
                        </StyledImage>
                     ))}
                  </ImageContainer>
               )}
            </UserReviewContainer>
         </ModelReviewContainer>
         <InfoAboutUserContainer>
            <InfoUserContainer>
               <StyledRating name="read-only" value={stars} readOnly />
               <UserContainer>
                  <UserAvatar>
                     <UserIcon />
                  </UserAvatar>
                  <UserDescription themes={themes}>
                     <h5>Адыл Бакытов</h5>
                     <p>Adyl@mail.ru</p>
                  </UserDescription>
                  <ToolIconContainer>
                     <StyledDeleteIcon />
                     {expanded ? (
                        <StyledArrowUp
                           onClick={handleToggle}
                           className={
                              expanded
                                 ? 'rotate-enter-active'
                                 : 'rotate-exit-active'
                           }
                        />
                     ) : (
                        <StyledArrowDown
                           onClick={handleToggle}
                           className={
                              expanded
                                 ? 'rotate-enter-active'
                                 : 'rotate-exit-active'
                           }
                        />
                     )}
                  </ToolIconContainer>
               </UserContainer>
            </InfoUserContainer>
            {expanded && (
               <Form expanded={expanded}>
                  <Label themes={themes} htmlFor="answer">
                     Ответить на комментарий
                  </Label>
                  {answerState ? (
                     <StyledTextarea
                        value={temporaryAnswer}
                        onChange={getAdminAnswer}
                        name="answer"
                        type="text"
                        variant="outlined"
                     />
                  ) : (
                     <StyledTextarea
                        readOnly
                        value={adminAnswer}
                        name="answer"
                        type="text"
                        variant="outlined"
                     />
                  )}

                  <ButtonContainer answer={answerState}>
                     {answerState ? (
                        <>
                           <Button
                              fontSize="16px"
                              padding="6.5px 62px"
                              backgroundHover="#CB11AB"
                              backgroundActive="#E313BF"
                              variant="outlined"
                              onClick={cancelAnswerHandler}
                           >
                              Отменить
                           </Button>
                           <Button
                              fontSize="16px"
                              padding="6.5px 58.5px"
                              backgroundHover="#E313BF"
                              backgroundActive="#CB11AB"
                              variant="contained"
                              onClick={saveAnswerHandler}
                           >
                              Сохронить
                           </Button>
                        </>
                     ) : (
                        <Button
                           fontSize="16px"
                           padding={
                              adminAnswer === '' ? '11.7px 64px' : '11.7px 41px'
                           }
                           backgroundHover="#E313BF"
                           backgroundActive="#CB11AB"
                           variant="contained"
                           onClick={answerToggleHandler}
                        >
                           {adminAnswer === '' ? 'Ответить' : 'Редактировать'}
                        </Button>
                     )}
                  </ButtonContainer>
               </Form>
            )}
         </InfoAboutUserContainer>
      </AdminReviewContainer>
   )
}

export default AdminFeedback

const rotateArrow = keyframes`
  0% { transform: rotate(-180deg); }
  100% { transform: rotate(0deg); }
`
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`

const AdminReviewContainer = styled('div')`
   display: flex;
   width: 67.93%;
   padding: 20px 0 20px 0;
   border-top: 1px solid #e8e8e8;
   justify-content: space-between;
`
const ModelReviewContainer = styled('div')`
   display: flex;
   width: 60.75%;
`
const StyledDeleteIcon = styled(DeleteIcon)`
   :hover {
      cursor: pointer;
      path {
         fill: red;
      }
   }
   :active {
      cursor: pointer;
      path {
         fill: red;
      }
   }
`
const StyledArrowDown = styled(ArrowDown)`
   transition: transform 0.3s ease-in-out;
   :hover {
      cursor: pointer;
      path {
         fill: black;
      }
   }
   :active {
      cursor: pointer;
      path {
         fill: black;
      }
   }
   &.rotate-enter-active,
   &.rotate-exit-active {
      animation: ${rotateArrow} 0.3s ease-in-out;
   }
   width: 20px;
   height: 20px;
`
const StyledArrowUp = styled(ArrowUp)`
   transition: transform 0.3s ease-in-out;
   :hover {
      cursor: pointer;
      path {
         fill: black;
      }
   }
   :active {
      cursor: pointer;
      path {
         fill: black;
      }
   }
   &.rotate-enter-active,
   &.rotate-exit-active {
      animation: ${rotateArrow} 0.3s ease-in-out;
   }
   width: 1.25rem;
   height: 1.25rem;
`
const ModelContainer = styled('div')`
   display: flex;
`
const Index = styled('p')`
   font-family: Inter;
   margin-top: 1.375rem;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 1.125rem;
   margin-left: 5px;
`
const UserText = styled('p')`
   color: #2e2c34;
   font-size: 0.875rem;
   font-family: Inter;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
   width: 100%;
`
const UserContainer = styled('div')`
   display: flex;
`
const Time = styled('p')`
   color: rgba(0, 0, 0, 0.5);
   font-size: 0.75rem;
   font-family: Inter;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
`
const ModelDescription = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '2px',
   marginLeft: '1.6875rem',
   h5: {
      fontFamily: 'Inter',
      color: theme.palette.primary.mainContrastText,
      margin: 0,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '1.25rem',
   },
   p: {
      fontFamily: 'Inter',
      color: theme.palette.secondary.light,
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '1.25rem',
   },
}))
const ImageContainer = styled('div')`
   animation: ${(props) => (props.expanded ? slideIn : slideOut)} 0.3s
      ease-in-out;
   display: flex;
   justify-content: space-between;
   margin-top: 0.625rem;
   width: 91%;
`
const StyledIcon = styled('div')(({ themes }) => ({
   width: '56px',
   height: '62px',
   background: themes.palette.secondary.main,
   marginLeft: '1.5625rem',
}))
const UserReviewContainer = styled('div')`
   margin-left: 3.9375rem;
   width: 60.2%;
`
const InfoAboutUserContainer = styled('div')`
   width: 39.25%;
   display: flex;
   flex-direction: column;
`
const InfoUserContainer = styled('div')`
   display: flex;
   justify-content: space-between;
`
const StyledRating = styled(Rating)`
   && .MuiSvgIcon-root {
      font-size: 1.25rem;
   }
`
const UserAvatar = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 2.625rem;
   height: 2.625rem;
   border-radius: 3.125rem;
   margin-right: 1rem;
   background: #d9d9d9;
`
const UserDescription = styled('div')(({ theme }) => ({
   marginRight: '2.4375rem',
   h5: {
      fontFamily: 'Inter',
      color: theme.palette.primary.mainContrastText,
      margin: 0,
      fontStyle: 'normal',
      lineHeight: '1.25rem',
   },
   p: {
      color: theme.palette.secondary.lightGray,
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
   },
}))
const ToolIconContainer = styled('div')`
   display: flex;
   align-items: flex-start;
   gap: 20px;
   font-family: Inter;
`
const StyledImage = styled('div')(({ theme }) => ({
   width: '5rem',
   height: '5rem ',
   flexShrink: 0,
   background: theme.palette.secondary.main,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))
const Form = styled('form')`
   animation: ${(props) => (props.expanded ? slideIn : slideOut)} 0.3s
      ease-in-out;
   margin-top: 2.375rem;
   display: flex;
   flex-direction: column;
`
const Label = styled('label')(({ theme }) => ({
   color: theme.palette.primary.contrastText,
   fontFamily: 'Inter',
   fontSize: '0.875rem',
   fontStyle: 'normal',
   fontWeight: 500,
   marginBottom: '10px',
   lineHeight: '120%',
}))
const StyledTextarea = styled('textarea')(() => ({
   width: '100%',
   height: '8rem',
   padding: '12px 10px 0px 18px',
   borderRadius: '4px',
   border: '1px solid #cdcdcd',
   textAlign: 'start',
   resize: 'none',
}))
const ButtonContainer = styled('div')(({ answer }) => ({
   display: 'flex',
   marginTop: '14px',
   justifyContent: answer ? 'space-between' : 'flex-end',
}))
