import { useState } from 'react'
import { keyframes, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { navBarForAdminHeader } from '../../../utils/common/constants/header'
import { MailingList } from '../mailing.list/MailingList'
import { ReactComponent as ArrowBottom } from '../../../assets/icons/arrows/down-icon.svg'
import { Modal } from '../../UI/Modal'
import { Button } from '../../UI/Button'
import { logOut } from '../../../store/auth/authThunk'
import { Loading } from '../../UI/loading/Loading'

export const AdminHeader = () => {
   const navigate = useNavigate()
   const [openExit, setOpenExit] = useState(false)
   const [openModal, setOpenModal] = useState(false)
   const dispatch = useDispatch()
   const onComeBack = () => {
      navigate('/admin/goods')
   }
   const location = useLocation()
   const { isLoading } = useSelector((state) => state.adminGoods)
   const toggleHandler = () => {
      setOpenExit(!openExit)
   }
   const toggleModalHandler = () => {
      setOpenModal(!openModal)
   }
   const logOutHandler = () => {
      dispatch(logOut())
   }
   return (
      <>
         {isLoading && location.pathname !== '/admin' && <Loading />}
         <Container>
            <WidthContainer>
               <Title onClick={onComeBack}>
                  <GadgeteriumContainer>
                     <GIcons>G</GIcons>
                  </GadgeteriumContainer>
                  <AdgetariumTitle>adgetarium</AdgetariumTitle>
               </Title>
               <NavBar>
                  {navBarForAdminHeader.map((el) => (
                     <Link
                        key={el.title}
                        to={el.path}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        {el.title}
                     </Link>
                  ))}
               </NavBar>
               <AvatarAndMailContainer>
                  <MailingList />
                  <Line />
                  <AvatarContainer onMouseLeave={() => setOpenExit(false)}>
                     <Avatar>G</Avatar>
                     <AdminTitle onClick={toggleHandler}>
                        Администратор
                        <StyledArrowBottom
                           style={{
                              transform: openExit
                                 ? 'rotate(180deg)'
                                 : 'rotate(0deg)',
                           }}
                        />
                     </AdminTitle>
                     {openExit && (
                        <ExitModal onClick={toggleModalHandler} open={openExit}>
                           Выйти
                        </ExitModal>
                     )}
                  </AvatarContainer>
               </AvatarAndMailContainer>
            </WidthContainer>
         </Container>
         <StyledModal
            onClose={toggleModalHandler}
            open={openModal}
            padding="20px 90px"
         >
            <ModalTitle>Вы уверены, что хотите выйти?</ModalTitle>
            <ButtonContainer>
               <Button
                  onClick={toggleModalHandler}
                  padding="6px 24px"
                  variant="outlined"
                  backgroundhover="#CB11AB"
                  backgroundactive="#E313BF"
               >
                  Отменить
               </Button>
               <Button
                  variant="contained"
                  padding="10px 24px"
                  backgroundhover="#E313BF"
                  backgroundactive="#C90EA9"
                  onClick={logOutHandler}
               >
                  Выйти
               </Button>
            </ButtonContainer>
         </StyledModal>
      </>
   )
}
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
const Container = styled('div')`
   background: #1a1a25;
   width: 100%;
   height: 83px;
   display: flex;
   align-items: center;
   justify-content: center;
`
const ExitModal = styled('div')`
   width: 82px;
   height: 51px;
   border-radius: 4px;
   position: absolute;
   user-select: none;
   color: #292929;
   font-family: Inter;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   display: flex;
   align-items: center;
   justify-content: center;
   top: 34px;
   left: 130px;
   background: #fff;
   cursor: pointer;
   box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
   animation: ${(props) => (props.open ? slideIn : slideOut)} 0.3s ease-in-out;
   :hover {
      color: #cb11ab;
   }
`
const WidthContainer = styled('div')`
   width: 89.583vw;
   display: flex;
   justify-content: space-between;
`
const Line = styled('div')`
   width: 0px;
   height: 32px;
   border: 1px solid #cdcdcd;
`
const ButtonContainer = styled('div')`
   display: flex;
   gap: 30px;
`
const GadgeteriumContainer = styled('div')`
   width: 35px;
   height: 35px;
   display: flex;
   background-color: #cb11ab;
   margin-right: 2.5px;
   align-items: center;
   justify-content: center;
`
const StyledModal = styled(Modal)`
   .MuiBox-root {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
   }
`
const Title = styled('div')`
   display: flex;
   align-items: center;
   cursor: pointer;
`
const AdgetariumTitle = styled('div')`
   font-size: 28.49px;
   color: #ffffff;
   font-family: 'Orbitron';
`
const ModalTitle = styled('p')`
   color: #292929;
   text-align: center;
   font-family: Inter;
   font-size: 18px;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
   margin: 0;
`
const GIcons = styled('p')`
   color: #fff;
   font-family: Outfit;
   font-size: 32.053px;
   font-style: normal;
   font-weight: 600;
`
const Link = styled(NavLink)`
   padding: 10px 14px 12px 14px;
   cursor: pointer;
   text-decoration: none;
   color: #fff;

   &:hover {
      border-radius: 4px;
      background: rgba(133, 143, 164, 0.15);
      box-shadow: 0 0 10px rgba(133, 143, 164, 0.15);
   }
`
const AvatarContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 210px;
   position: relative;
`
const Avatar = styled('div')`
   width: 44px;
   height: 44px;
   border-radius: 100%;
   background-color: #fff;
   color: #cb11ab;
   font-family: Inter;
   font-size: 26px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   display: flex;
   align-items: center;
   justify-content: center;
`
const NavBar = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   color: #ffffff;

   .active {
      border-radius: 4px;
      background: rgba(133, 143, 164, 0.15);
      box-shadow: 0 0 10px rgba(133, 143, 164, 0.15);
   }
`
const AvatarAndMailContainer = styled('div')`
   width: 457px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const AdminTitle = styled('p')`
   color: #fff;
   user-select: none;
   font-family: Inter;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   display: flex;
   align-items: center;
   gap: 6px;
   cursor: pointer;
`
const StyledArrowBottom = styled(ArrowBottom)`
   transition: transform 0.3s ease;
   width: 16px;
   height: 16px;
   path {
      fill: #fff;
   }
`
