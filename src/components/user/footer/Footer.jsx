import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { ReactComponent as LetterIcon } from '../../../assets/icons/headerIcons/Letter.svg'
import { ReactComponent as ReactComponentIcons } from '../../../assets/icons/headerIcons/Background.svg'

export const Footer = () => {
   return (
      <Container>
         <Block1>
            <Filter>
               <span>Каталог</span>
               <Gadget>
                  <a href="./cмартфоны">Смартфоны</a>
                  <a href="./ноутбуки и планшеты">Ноутбуки и планшеты</a>
                  <a href="./смарт-часы и браслеты">Смарт-часы и браслеты</a>
                  <a href="./аксессуары">Аксессуары</a>
               </Gadget>
            </Filter>
            <Categories>
               <span>Будь с нами</span>
               <Stock>
                  <a href="/акции">Акции</a>
                  <a href="./новинки">Новинки</a>
                  <a href="./популярные категории">Популярные категории </a>
               </Stock>
            </Categories>
            <Service>
               <span>Помощь и сервисы</span>
               <Contact>
                  <a href="./Омагазине">О магазине</a>
                  <a href="./доставка">Доставка</a>
                  <a href="./fag">FAG</a>
                  <a href="./контакты">Контакты</a>
               </Contact>
            </Service>
            <PersonalInformation>
               <div>
                  <span>Расскажем об акциях и скидках</span>
                  <form onSubmit="submit">
                     <Input type="email" placeholder="Email" />
                     <ButtonFooter onSubmit="submit" variant="contained">
                        Подписаться
                     </ButtonFooter>
                  </form>
                  <Description>
                     Нажимая на кнопку «подписаться» Вы соглашаетесь на
                     обработку персональных данных
                  </Description>
               </div>
               <Info>
                  <p>+996 (400) 00 00 00</p>
                  <p>Gadgetarium.kg</p>
                  <p>г.Бишкек, ул. Гражданская 119</p>
                  <p>С 10:00 до 21:00 (без выходных)</p>
               </Info>
            </PersonalInformation>
         </Block1>
         <Block2>
            <Gadgetarium>
               <ReactComponentIcons />
               <Letter />
               <h1>adgetarium</h1>
            </Gadgetarium>
            <p>© 2022 Gadgetarium. Интернет магазин </p>
            <span>Все права защищены.</span>
         </Block2>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 44.375rem;
   width: 100%;
   height: 37.5rem;
   background-color: #1a1a25;
`

const Block1 = styled('div')`
   display: flex;
   justify-content: space-around;
`

const Block2 = styled('div')`
   border-top: 1px solid#858FA4;
   width: 81.25rem;
   margin-top: 3.75rem;
   margin-left: 5rem;
   text-align: center;
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
   border-radius: 0.25rem;
   margin-top: 0.75rem;
   border: none;
   padding-left: 1rem;
`
const ButtonFooter = styled(Button)`
   margin-top: -1px;
   margin-left: -10.125rem;
   background-color: #cb11ab;
   width: 10.125rem;
   height: 2.4375rem;
   font-size: 0.75rem;
   &:hover {
      background-color: #cb11ab;
   }
`
const Filter = styled('div')`
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
      cursor: pointer;
      &:hover {
         color: #fff;
      }
   }
`
const Categories = styled('div')`
   margin-top: 3.75rem;
   span {
      color: #fff;
      cursor: pointer;
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
const Service = styled('div')`
   margin-top: 3.75rem;
   span {
      color: #fff;
      cursor: pointer;
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
   margin-top: 2.5rem;
   h1 {
      margin-left: 0.625rem;
      color: #fff;
   }
`
const Letter = styled(LetterIcon)`
   margin-top: 0.3125rem;
   margin-left: -1.875rem;
`
