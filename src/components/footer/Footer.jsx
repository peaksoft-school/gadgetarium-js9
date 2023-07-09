import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { ReactComponent } from '../../assets/icons/headerIcons/Letter.svg'
import { ReactComponent as ReactComponentIcons } from '../../assets/icons/headerIcons/Background.svg'

export const Footer = () => {
   return (
      <Container>
         <Block1>
            <Filter>
               <span>Каталог</span>
               <Gadget>
                  <p>Смартфоны</p>
                  <p>Ноутбуки и планшеты</p>
                  <p>Смарт-часы и браслеты</p>
                  <p>Аксессуары </p>
               </Gadget>
            </Filter>
            <Сategories>
               <span>Будь с нами</span>
               <Stock>
                  <p>Акции</p>
                  <p>Новинки</p>
                  <p>Популярные категории </p>
               </Stock>
            </Сategories>
            <Service>
               <span>Помощь и сервисы</span>
               <Contact>
                  <p>О магазине</p>
                  <p>Доставка</p>
                  <p>FAQ</p>
                  <p>Контакты</p>
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
   margin-top: 2710px;
   width: 100%;
   height: 600px;
   background-color: #1a1a25;
`

const Block1 = styled('div')`
   display: flex;
   justify-content: space-around;
`

const Block2 = styled('div')`
   border-top: 1px solid#858FA4;
   width: 1300px;
   margin-top: 60px;
   margin-left: 80px;
   text-align: center;
   p {
      color: #858fa4;
      margin-top: 30px;
   }
   span {
      color: #858fa4;
      margin-left: 10px;
   }
`

const Input = styled('input')`
   width: 408px;
   height: 39px;
   border-radius: 4px;
   margin-top: 12px;
   border: none;
`
const ButtonFooter = styled(Button)`
   margin-top: -1px;
   margin-left: -162px;
   background-color: #cb11ab;
   width: 162px;
   height: 39px;
   font-size: 12px;
   &:hover {
      background-color: #cb11ab;
   }
`
const Filter = styled('div')`
   margin-top: 60px;
   span {
      color: #fff;
      cursor: pointer;
   }
`
const Gadget = styled('div')`
   margin-top: 30px;
   p {
      color: #858fa4;
      margin-top: 12px;
      cursor: pointer;
      &:hover {
         color: #fff;
      }
   }
`
const Description = styled('p')`
   margin-top: 12px;
   width: 367px;
   color: #fff;
`
const Info = styled('div')`
   margin-top: 30px;
   p {
      color: #858fa4;
      margin-top: 12px;
      cursor: pointer;
      &:hover {
         color: #fff;
      }
   }
`
const Сategories = styled('div')`
   margin-top: 60px;
   span {
      color: #fff;
      cursor: pointer;
   }
`
const Stock = styled('div')`
   margin-top: 30px;
   p {
      color: #858fa4;
      margin-top: 12px;
      cursor: pointer;
      &:hover {
         color: #fff;
      }
   }
`
const Service = styled('div')`
   margin-top: 60px;
   span {
      color: #fff;
      cursor: pointer;
   }
`
const Contact = styled('div')`
   margin-top: 30px;
   p {
      color: #858fa4;
      margin-top: 12px;
      cursor: pointer;
      &:hover {
         color: #fff;
      }
   }
`
const PersonalInformation = styled('div')`
   margin-top: 60px;
   span {
      color: #fff;
   }
`
const Gadgetarium = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 40px;
   h1 {
      margin-left: 10px;
      color: #fff;
   }
`
const Letter = styled(ReactComponent)`
   margin-top: 5px;
   margin-left: -30px;
`
