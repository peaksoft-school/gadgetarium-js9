import { styled } from '@mui/material'
import React from 'react'
import mapOfKyrgyzstan from '../../../../assets/images/mapOfKyrgyzstan.png'

export const TodayWeAre = () => {
   return (
      <Container>
         <div>
            <p className="title">Мы сегодня - это:</p>

            <Box className="text">
               <p>
                  Мы сегодня - это прогрессивный и увлекательный магазин
                  Gadgetarium, нашедший свое место в мире технологических
                  новинок. Мы предлагаем не только широкий ассортимент
                  высококачественных гаджетов, начиная от передовых ноутбуков и
                  интеллектуальных смартфонов, и заканчивая стильными часами и
                  инновационными аксессуарами, но также предоставляем
                  незабываемый опыт покупок.
               </p>

               <p>
                  Наши клиенты ценят нас за наше стремление к качеству,
                  внимательное отношение к деталям и профессиональное
                  обслуживание. Мы всегда готовы помочь вам подобрать идеальный
                  гаджет для ваших потребностей и держимся в курсе последних
                  технологических новинок, чтобы предложить вам только самое
                  лучшее.
               </p>

               <p>
                  Сегодня мы гордимся нашим успехом, который был достигнут
                  благодаря нашей страсти к инновациям и постоянному стремлению
                  к удовлетворению потребностей наших клиентов. Gadgetarium -
                  это не просто магазин, это ваш партнер в мире современных
                  технологий.
               </p>
            </Box>
         </div>
         <ContainerImg>
            <img
               src={mapOfKyrgyzstan}
               alt="map of Kyrgyzstan"
               width="100%"
               height="100%"
            />
         </ContainerImg>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   width: 79.688vw;
   justify-content: space-between;
   margin-bottom: 7.5rem;
`

const Box = styled('div')`
   width: 32.5vw;
`

const ContainerImg = styled('div')`
   width: 47vw;
   height: 43vh;
`
