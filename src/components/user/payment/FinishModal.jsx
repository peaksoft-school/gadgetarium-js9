import { useDispatch, useSelector } from 'react-redux'
import { IconButton, styled } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../UI/Modal'
import { Button } from '../../UI/Button'
import { ReactComponent as Cross } from '../../../assets/icons/cross/big-cross-icon.svg'
import { closeOpenSuccessModal } from '../../../store/payment/payment.slice'

function getCurrentDate() {
   const today = new Date()
   const day = today.getDate().toString().padStart(2, '0')
   const month = (today.getMonth() + 1).toString().padStart(2, '0')
   const year = today.getFullYear()
   return `${day}.${month}.${year}`
}

export const FinishModal = () => {
   const dispatch = useDispatch()
   const { openSuccessModal, orderNumber, orderData } = useSelector(
      (state) => state.payment
   )
   const navigate = useNavigate()

   const [open, setOpen] = useState(openSuccessModal)

   const onHandlerClose = () => {
      setOpen(false)
      dispatch(closeOpenSuccessModal())
   }

   const date = getCurrentDate()

   const onFinishClickHandler = () => {
      navigate('/')
      onHandlerClose()
   }

   const onClosCrossHandler = () => {
      onHandlerClose()
   }

   return (
      <div>
         <Modal open={open} onClose={onHandlerClose} padding="1.875rem">
            <Container>
               <BoxCross>
                  <IconButton onClick={onClosCrossHandler}>
                     <Cross />
                  </IconButton>
               </BoxCross>

               <ContainerText>
                  <HeaderText>
                     <span>Спасибо!</span>
                     <span>Заявка успешна оформлена!</span>
                  </HeaderText>

                  <ApplicationNumberBox>
                     <p>
                        Номер заявки <span>{orderNumber}</span>
                     </p>
                  </ApplicationNumberBox>

                  <BoxMoreText>
                     <p>
                        Ваш заявка №{orderNumber} от {date} оформлена Вся
                        актуальная информация o статусе исполнения заказа придет
                        на указанный email:
                     </p>
                     <p>{orderData?.email}</p>
                  </BoxMoreText>

                  <ContainerBtn>
                     <Btn variant="contained" onClick={onFinishClickHandler}>
                        Продолжить покупки
                     </Btn>
                  </ContainerBtn>
               </ContainerText>
            </Container>
         </Modal>
      </div>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
`

const ContainerText = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: Inter;

   p {
      margin: 0;
   }
`

const HeaderText = styled('div')`
   display: flex;
   flex-direction: column;
   text-align: center;

   color: #292929;
   font-size: 1.125rem;
   font-style: normal;
   font-weight: 500;
   line-height: 130%;
`

const ApplicationNumberBox = styled('div')`
   margin-top: 1.5rem;

   font-size: 1.25rem;
   font-style: normal;
   font-weight: 600;
   line-height: 120%;
   color: #292929;

   span {
      color: #cb11ab;
   }
`

const BoxMoreText = styled('div')`
   margin-top: 1.375rem;

   color: #292929;
   text-align: center;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;

   width: 23.4vw;
`

const ContainerBtn = styled('div')`
   margin-top: 1.875rem;
`

const Btn = styled(Button)`
   color: #fff;
   font-size: 1rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;

   padding: 0.625rem 1.5rem;
`

const BoxCross = styled('div')`
   margin-bottom: 0.5rem;

   width: 100%;
   display: flex;
   justify-content: flex-end;
`
