import { Rating, keyframes, styled } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as UserIcon } from '../../assets/icons/avatar/user-fill-icon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrows/down-icon.svg'
import { ReactComponent as ArrowUp } from '../../assets/icons/arrows/up-icon.svg'
import { Button } from '../UI/Button'
import { themes } from '../../utils/common/styles/themes'

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
const imagesArray = [1, 2, 3, 4, 5]
const AdminReview = ({
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
                     {imagesArray.map((el) => {
                        return <StyledImage themes={themes}>{el}</StyledImage>
                     })}
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

export default AdminReview
const AdminReviewContainer = styled('div')`
   display: flex;
   width: 1285px;
   padding: 20px 0 20px 0;
   border-top: 1px solid #e8e8e8;
   justify-content: space-between;
`
const ModelReviewContainer = styled('div')`
   display: flex;
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
   width: 20px;
   height: 20px;
`
const ModelContainer = styled('div')`
   display: flex;
`
const Index = styled('p')`
   font-family: Inter;
   margin-top: 22px;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: 18px;
   margin-left: 5px;
`
const UserText = styled('p')`
   color: #2e2c34;
   font-size: 14px;
   font-family: Inter;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
   width: 478px;
`
const UserContainer = styled('div')`
   display: flex;
`
const Time = styled('p')`
   color: rgba(0, 0, 0, 0.5);
   font-size: 12px;
   font-family: Inter;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
`
const ModelDescription = styled('div')(({ themes }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '2px',
   marginLeft: '27px',
   h5: {
      fontFamily: 'Inter',
      color: themes.palette.primary.contrastText,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '20px',
   },
   p: {
      fontFamily: 'Inter',
      color: themes.palette.secondary.light,
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '20px',
   },
}))
const ImageContainer = styled('div')`
   animation: ${(props) => (props.expanded ? slideIn : slideOut)} 0.3s
      ease-in-out;
   display: flex;
   justify-content: space-between;
   margin-top: 10px;
   width: 449px;
`
const StyledIcon = styled('div')(({ themes }) => ({
   width: '56px',
   height: '62px',
   background: themes.palette.secondary.main,
   marginLeft: '25px',
}))
const UserReviewContainer = styled('div')`
   margin-left: 63px;
`
const InfoAboutUserContainer = styled('div')`
   display: flex;
   flex-direction: column;
`
const InfoUserContainer = styled('div')`
   width: 494px;
   display: flex;
   justify-content: space-between;
`
const StyledRating = styled(Rating)`
   && .MuiSvgIcon-root {
      font-size: 20px;
   }
`
const UserAvatar = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 42px;
   height: 42px;
   border-radius: 50px;
   margin-right: 16px;
   background: #d9d9d9;
`
const UserDescription = styled('div')(({ themes }) => ({
   marginRight: '39px',
   h5: {
      fontFamily: 'Inter',
      color: themes.palette.primary.contrastText,
      fontStyle: 'normal',
      lineHeight: '20px',
   },
   p: {
      color: themes.palette.secondary.lightGray,
      fontFamily: 'Inter',
      fontSize: '14px',
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
const StyledImage = styled('div')(({ themes }) => ({
   width: '80px',
   height: '80px',
   flexShrink: 0,
   background: themes.palette.secondary.main,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))
const Form = styled('form')`
   animation: ${(props) => (props.expanded ? slideIn : slideOut)} 0.3s
      ease-in-out;
   margin-top: 38px;
   display: flex;
   flex-direction: column;
`
const Label = styled('label')(({ themes }) => ({
   color: themes.palette.primary.contrastText,
   fontFamily: 'Inter',
   fontSize: '14px',
   fontStyle: 'normal',
   fontWeight: 500,
   marginBottom: '10px',
   lineHeight: '120%',
}))
const StyledTextarea = styled('textarea')(() => ({
   width: '494px',
   height: '128px',
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
