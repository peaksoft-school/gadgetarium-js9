import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, styled } from '@mui/material'
import { navBarForHeader } from '../../../utils/common/constants/header'
import { categoryActions } from '../../../store/cataog/catalogSlice'

export const Footer = () => {
   const dispatch = useDispatch()
   const handleButtonClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      dispatch(categoryActions.reset())
   }
   return (
      <Container>
         <Block1>
            <NavListContainer>
               <NavList>
                  <span>Каталог</span>
                  <Gadget>
                     <NavLink onClick={handleButtonClick} to="/category/Phone">
                        Смартфоны
                     </NavLink>
                     <NavLink onClick={handleButtonClick} to="/category/Tablet">
                        Планшеты
                     </NavLink>
                     <NavLink onClick={handleButtonClick} to="/category/Laptop">
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
                     <a href="/акции">Акции</a>
                     <a href="./новинки">Новинки</a>
                     <a href="./популярные категории">Популярные категории </a>
                  </Stock>
               </NavList>
               <NavList>
                  <span>Помощь и сервисы</span>
                  <Contact>
                     {navBarForHeader.map((el) => (
                        <Link
                           key={el.title}
                           to={el.path}
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
                  <Form>
                     <Input type="email" placeholder="Email" />
                     <ButtonFooter variant="contained">
                        Подписаться
                     </ButtonFooter>
                  </Form>
                  <Description>
                     Нажимая на кнопку «Подписаться» Вы соглашаетесь на
                     обработку персональных данных
                  </Description>
               </div>
               <Info>
                  <p>+996 (400) 00 00 00</p>
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
               <p>© 2022 Gadgetarium. Интернет магазин </p>
               <span>Bce права защищены.</span>
            </BoxMinInfo>
         </Block2>
      </Container>
   )
}
const Form = styled('form')`
   display: flex;
   align-items: center;
   margin-top: 0.75rem;
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
   width: 50%;
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
   padding-left: 1rem;
`
const ButtonFooter = styled(Button)`
   text-transform: none;
   border-radius: 0 !important;
   border-bottom-right-radius: 0.35rem !important;
   border-top-right-radius: 0.35rem !important;

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

      &:hover {
         color: #fff;
      }
   }
`
const Stock = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 1.875rem;

   a {
      text-decoration: none;
      color: #858fa4;
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
