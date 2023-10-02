import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Button, styled } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { navBarForHeader } from '../../../utils/common/constants/header'
import { followMail } from '../../../store/main.page/main.page.thunk'
import { AuthorizationModal } from '../AuthorizationModal'
import { categoryActions } from '../../../store/cataog/catalogSlice'

const schema = z.object({
   email: z.string().email('Заполните обязательные поля'),
})
export const Footer = () => {
   const dispatch = useDispatch()
   const [openModal, setOpenModal] = useState(false)
   const [message, setMessage] = useState('')
   const navigate = useNavigate()
   const [messageTimeout, setMessageTimeout] = useState(null)
   const { isAuthorization } = useSelector((state) => state.auth)
   const { register, handleSubmit, reset, formState } = useForm({
      defaultValues: {
         email: '',
      },
      mode: 'onBlur',
      resolver: zodResolver(schema),
   })
   const toggleMessageHandler = (value) => {
      setMessage(value)
   }
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }
   const scrollToTopMain = (top) => {
      navigate('/')
      window.scrollTo({ top, behavior: 'smooth' })
   }
   const onSubmit = (data) => {
      if (isAuthorization) {
         dispatch(followMail({ email: data.email, toggleMessageHandler }))
         reset()
      } else {
         setOpenModal(!openModal)
      }
   }
   const toggleHandler = () => {
      setOpenModal(!openModal)
   }
   useEffect(() => {
      if (message) {
         if (messageTimeout) {
            clearTimeout(messageTimeout)
         }
         const newMessageTimeout = setTimeout(() => {
            setMessage('')
         }, 3000)
         setMessageTimeout(newMessageTimeout)
      }
   }, [message])
   const handleButtonClick = () => {
      dispatch(categoryActions.resetAll())
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }
   return (
      <>
         <AuthorizationModal
            openModal={openModal}
            toggleHandler={toggleHandler}
         />
         <Container>
            <Block1>
               <NavListContainer>
                  <NavList>
                     <span>Каталог</span>
                     <Gadget>
                        <NavLink
                           onClick={handleButtonClick}
                           to="/category/Phone"
                        >
                           Смартфоны
                        </NavLink>
                        <NavLink
                           onClick={handleButtonClick}
                           to="/category/Tablet"
                        >
                           Планшеты
                        </NavLink>
                        <NavLink
                           onClick={handleButtonClick}
                           to="/category/Laptop"
                        >
                           Ноутбуки
                        </NavLink>
                        <NavLink
                           onClick={handleButtonClick}
                           to="/category/Smart Watch"
                        >
                           Смарт-часы и браслеты
                        </NavLink>
                     </Gadget>
                  </NavList>
                  <NavList>
                     <span>Будь с нами</span>
                     <Stock>
                        <p onClick={() => scrollToTopMain(450)}>Акции</p>
                        <p onClick={() => scrollToTopMain(1050)}>Новинки</p>
                        <p onClick={() => scrollToTopMain(1650)}>
                           Мы рекомендуем
                        </p>
                     </Stock>
                  </NavList>
                  <NavList>
                     <span>Помощь и сервисы</span>
                     <Contact>
                        {navBarForHeader.map((el) => (
                           <Link
                              key={el.title}
                              to={el.path}
                              onClick={scrollToTop}
                              className={({ isActive }) =>
                                 isActive ? 'active' : ''
                              }
                           >
                              {el.title}
                           </Link>
                        ))}
                     </Contact>
                  </NavList>
               </NavListContainer>

               <PersonalInformation>
                  <div>
                     <span>Расскажем oб акциях и скидках</span>
                     <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                           type="email"
                           placeholder="Email"
                           {...register('email')}
                           error={!!formState.errors.email}
                        />
                        <ButtonFooter type="submit" variant="contained">
                           Подписаться
                        </ButtonFooter>
                     </Form>
                     <Description>
                        Нажимая на кнопку «Подписаться» Вы соглашаетесь на
                        обработку персональных данных
                     </Description>
                     {!message && formState.errors.email && (
                        <Error>Введите корректный email</Error>
                     )}
                     {message === 'Subscription successful' && (
                        <Success>Вы успешно подписались</Success>
                     )}
                     {message === 'Already subscribed' && (
                        <Error>Вы уже подписаны</Error>
                     )}
                  </div>
                  <Info>
                     <p>+996 (500) 34 44 33</p>
                     <p>Gadgetarium.kg</p>
                     <p>г.Бишкек, ул. Гражданская 119</p>
                     <p>C 10:00 до 21:00 (без выходных)</p>
                  </Info>
               </PersonalInformation>
            </Block1>
            <Block2>
               <Gadgetarium>
                  <GadgeteriumContainer>
                     <GIcons>G</GIcons>
                  </GadgeteriumContainer>

                  <h1>adgetarium</h1>
               </Gadgetarium>

               <BoxMinInfo>
                  <p>© 2023 Gadgetarium. Интернет магазин </p>
                  <span>Bce права защищены.</span>
               </BoxMinInfo>
            </Block2>
         </Container>
      </>
   )
}
const Form = styled('form')`
   display: flex;
   align-items: center;
   margin-top: 0.75rem;
`
const Error = styled('p')`
   color: #f53b49;
   margin: 0;
`
const Success = styled('p')`
   color: #2fc509;
   margin: 0;
`
const Container = styled('div')`
   margin: 0;
   width: 100%;
   height: 37.5rem;
   background-color: #1a1a25;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Link = styled(NavLink)`
   cursor: pointer;
   text-decoration: none;
   color: #fff;
`

const GadgeteriumContainer = styled('div')`
   width: 35px;
   height: 35px;
   background-color: #cb11ab;
   margin-right: 2.5px;
   display: flex;
   align-items: center;
   justify-content: center;
`
const GIcons = styled('p')`
   color: #fff !important;
   font-family: Outfit;
   font-size: 32.053px;
   font-style: normal;
   margin: 0 !important;
   font-weight: 700;
`
const NavListContainer = styled('div')`
   display: flex;
   width: 53%;
   justify-content: space-between;
`
const Block1 = styled('div')`
   width: 79.688vw;
   display: flex;
   justify-content: space-between;
   margin-bottom: 49px;
`

const Block2 = styled('div')`
   border-top: 1px solid #858fa4;
   width: 79.688vw;
   text-align: center;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   p {
      color: #858fa4;
      margin-top: 1.875rem;
   }
   span {
      color: #858fa4;
      margin-left: 0.625rem;
   }
`

const Input = styled('input')`
   width: 25.5rem;
   height: 2.4375rem;
   border-radius: 0.35rem;
   border: none;
   outline: none;
   padding-left: 1rem;
`
const ButtonFooter = styled(Button)`
   text-transform: none;
   border-radius: 0rem 0.35rem 0.35rem 0rem !important;

   margin-left: -10.125rem;
   background-color: #cb11ab;
   font-family: Inter;
   width: 10.125rem;
   height: 2.4375rem;
   &:hover {
      background-color: #cb11ab;
   }
`
const NavList = styled('div')`
   margin-top: 3.75rem;
   span {
      color: #fff;
      cursor: pointer;
   }
`
const Gadget = styled('div')`
   margin-top: 1.875rem;
   display: flex;
   flex-direction: column;
   a {
      text-decoration: none;
      color: #858fa4;
      margin-top: 0.75rem;
      cursor: pointer;
      margin-bottom: 0;
      &:hover {
         color: #fff;
      }
   }
`
const Description = styled('p')`
   margin-top: 0.75rem;
   width: 22.9375rem;
   color: #fff;
`
const Info = styled('div')`
   margin-top: 1.875rem;
   p {
      color: #858fa4;
      margin-top: 0.75rem;
   }
`
const Stock = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 1.875rem;

   p {
      text-decoration: none;
      color: #858fa4;
      margin: 0;
      margin-top: 0.75rem;
      cursor: pointer;
      &:hover {
         color: #fff;
      }
   }
`
const Contact = styled('div')`
   margin-top: 1.875rem;
   display: flex;
   flex-direction: column;
   a {
      color: #858fa4;
      margin-top: 0.75rem;
      cursor: pointer;
      text-decoration: none;
      &:hover {
         color: #fff;
      }
   }
`
const PersonalInformation = styled('div')`
   margin-top: 3.75rem;
   span {
      color: #fff;
   }
`
const Gadgetarium = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;

   h1 {
      font-family: Orbitron;
      font-weight: 600;
      color: #fff;
   }
`
const BoxMinInfo = styled('div')`
   margin-top: -36px;
`
