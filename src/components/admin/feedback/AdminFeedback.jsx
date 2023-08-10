import { Rating, keyframes, styled } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrows/up-icon.svg'
import { ReactComponent as UserIcon } from '../../../assets/icons/avatar/user-fill-icon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrows/down-icon.svg'
import { Button } from '../../UI/Button'
import { themes } from '../../../utils/common/styles/themes'

const imagesArray = [1, 2, 3, 4, 5]
const AdminFeedback = ({
   index = 1,
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
   const [checked, setChecked] = useState(false)
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
      if (!checked) {
         setChecked((prevState) => !prevState)
      }
      setExpanded(true)
   }
   const handleClose = () => {
      setExpanded(false)
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
               <UserText checked={checked}>
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
                     <StyledUserIcon />
                  </UserAvatar>
                  <UserDescription themes={themes}>
                     <h5>Адыл Бакытов</h5>
                     <p>Adyl@mail.ru</p>
                  </UserDescription>
                  <ToolIconContainer>
                     <StyledDeleteIcon />
                     {expanded ? (
                        <StyledArrowUp
                           onClick={handleClose}
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
                              fontSize="0.8333vw"
                              padding="0.6019vh 3.223vw"
                              backgroundHover="#CB11AB"
                              backgroundActive="#E313BF"
                              variant="outlined"
                              onClick={cancelAnswerHandler}
                           >
                              Отменить
                           </Button>
                           <Button
                              fontSize="0.8333vw"
                              padding="0.6019vh 3.223vw"
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
                           fontSize="0.8333vw"
                           padding={
                              adminAnswer === ''
                                 ? '1.2vh 3.49vw'
                                 : '1.2vh 2.3vw'
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
const StyledUserIcon = styled(UserIcon)`
   width: 1.35417vw;
   height: 1.35417vw;
`
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
   width: 67.188vw;
   padding: 1.852vh 0;
   border-top: 1px solid #e8e8e8;
   justify-content: space-between;
`
const ModelReviewContainer = styled('div')`
   display: flex;
   width: 40.78125vw;
`
const StyledDeleteIcon = styled(DeleteIcon)`
   width: 1.04167vw;
   height: 1.04167vw;
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
   width: 1.04167vw;
   height: 1.04167vw;
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
   width: 1.04167vw;
   height: 1.04167vw;
`
const ModelContainer = styled('div')`
   display: flex;
`
const Index = styled('p')`
   font-family: Inter;
   margin-top: 2.037vh;
   font-size: 0.8333vw;
   font-style: normal;
   font-weight: 400;
   margin-left: 0.463vh;
`
const UserText = styled('p')`
   color: #2e2c34;
   margin: 0;
   font-size: 0.73vw;
   font-family: Inter;
   font-style: normal;
   font-weight: ${(props) => (props.checked ? '400' : '700')};
   line-height: 150%;
   width: 100%;
`
const UserContainer = styled('div')`
   display: flex;
`
const Time = styled('p')`
   margin: 0;
   color: rgba(0, 0, 0, 0.5);
   font-size: 0.625vw;
   font-family: Inter;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
`
const ModelDescription = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.185vh',
   marginLeft: '1.40625vw',
   h5: {
      fontFamily: 'Inter',
      color: theme.palette.primary.mainContrastText,
      fontSize: '0.73vw',
      margin: 0,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '1.25rem',
   },
   p: {
      fontFamily: 'Inter',
      color: theme.palette.secondary.light,
      fontSize: '0.73vw',
      margin: 0,
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
   margin-top: 0.926vh;
   width: 95%;
`
const StyledIcon = styled('div')(({ themes }) => ({
   width: '2.9167vw',
   height: '3.23vw',
   background: themes.palette.secondary.main,
   marginLeft: '1.5625rem',
}))
const UserReviewContainer = styled('div')`
   margin-left: 3.28125vw;
   width: 60.2%;
`
const InfoAboutUserContainer = styled('div')`
   width: 25.7291666vw;
   display: flex;
   flex-direction: column;
`
const InfoUserContainer = styled('div')`
   display: flex;
   justify-content: space-between;
`
const StyledRating = styled(Rating)`
   && .MuiSvgIcon-root {
      font-size: 1.04167vw;
   }
`
const UserAvatar = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 2.1875vw;
   height: 2.1875vw;
   border-radius: 100%;
   margin-right: 0.8333vw;
   background: #d9d9d9;
`
const UserDescription = styled('div')(({ theme }) => ({
   marginRight: '2.03125vw',
   h5: {
      fontFamily: 'Inter',
      color: theme.palette.primary.mainContrastText,
      margin: 0,
      fontSize: '0.73vw',
      fontStyle: 'normal',
      lineHeight: '1.25rem',
   },
   p: {
      color: theme.palette.secondary.lightGray,
      fontFamily: 'Inter',
      fontSize: '0.73vw',
      margin: 0,
      marginTop: '2px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
   },
}))
const ToolIconContainer = styled('div')`
   display: flex;
   align-items: flex-start;
   gap: 1.04166vw;
   font-family: Inter;
`
const StyledImage = styled('div')(({ theme }) => ({
   width: '4.1667vw',
   height: '4.1667vw',
   flexShrink: 0,
   background: theme.palette.secondary.main,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))
const Form = styled('form')`
   animation: ${(props) => (props.expanded ? slideIn : slideOut)} 0.3s
      ease-in-out;
   margin-top: 3.5185vh;
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
   height: '11.8519vh',
   padding: '1.11111vh 0.52083vw 0px 0.9375vw',
   borderRadius: '4px',
   border: '1px solid #cdcdcd',
   textAlign: 'start',
   resize: 'none',
}))
const ButtonContainer = styled('div')(({ answer }) => ({
   display: 'flex',
   marginTop: '1.29629vh',
   justifyContent: answer ? 'space-between' : 'flex-end',
}))
