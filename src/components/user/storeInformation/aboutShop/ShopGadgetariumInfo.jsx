import { styled } from '@mui/material'
import React from 'react'

export const ShopGadgetariumInfo = () => {
   return (
      <Container className="box-text">
         <p className="title">Магазин Gadgetarium</p>

         <ul className="text">
            <li>
               слаженная команда людей, любящих спорт и здоровый образ жизни
               знающих свое дело и ориентирующихся во всех нюансах фитнес
               оборудования;
            </li>
            <li>
               широкая номенклатура качественной продукции ведущих мировых
               брендов c огромным выбором товаров в наличии;
            </li>
            <li>
               склад запчастей для обеспечения качественного сервиса и
               бесперебойной работы оборудования;
            </li>
            <li>
               полный послепродажный сервис c информационной и технической
               поддержкой;
            </li>
            <li>строгое соблюдение всех обязательств перед партнерами;</li>
            <li>
               отличные цены и эксклюзивные условия для постоянных партнеров.
            </li>
         </ul>
      </Container>
   )
}

const Container = styled('div')(({ theme }) => ({
   ul: {
      width: '53.125vw',
   },

   color: theme.palette.primary.mainContrastText,

   li: {
      marginLeft: '1.125rem',
      listStyle: 'disc',
   },
}))
