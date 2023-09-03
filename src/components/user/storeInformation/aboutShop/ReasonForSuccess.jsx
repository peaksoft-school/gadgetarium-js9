import { styled } from '@mui/material'
import React from 'react'
import { whatIsTheReasonForOurSuccess } from '../../../../utils/common/constants/storeInformation'

export const ReasonForSuccess = () => {
   return (
      <div className="box-text">
         <p className="title">В чем причина нашего успеха?</p>

         <Box className="text">
            <div className="containerText">
               {whatIsTheReasonForOurSuccess.map((item) => (
                  <ContainerText key={item.id} width={item.width}>
                     <span>{item.id}.</span>
                     <p>{item.text}</p>
                  </ContainerText>
               ))}
            </div>

            <div>
               <p>
                  Благодаря этим факторам мы смогли достичь выдающегося успеха и
                  стать предпочтительным местом для покупки гаджетов для многих
                  клиентов.
               </p>
            </div>
         </Box>
      </div>
   )
}

const Box = styled('div')`
   width: 59vw;
   display: flex;
   flex-direction: column;
   gap: 10px;

   p {
      margin: 0;
   }

   .containerText {
      display: flex;
      flex-direction: column;
      gap: 5px;
   }
`

const ContainerText = styled('div')`
   display: flex;
   gap: 0.625rem;

   p {
      width: ${(props) => props.width};
   }
`

/* <p>
1.
<span>
   Широкий ассортимент: Мы предлагаем огромное разнообразие
   гаджетов, начиная от ноутбуков и смартфонов до часов и
   аксессуаров. Наши клиенты всегда могут найти именно то, что им
   нужно.
</span>
</p>
<div>
<p>
   Non ultricies sollicitudin nisi quisque. Morbi integer quis
   tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
   scelerisque elit fermentum nullam rhoncus adipiscing. Sem
   tortor molestie odio.
</p>

<p>
   Adipiscing etiam vitae in semper sed eget nec aliquet aliquam.
   Morbi integer quis tincidunt vitae penatibus. Feugiat quis
   tincidunt volutpat scelerisque elit fermentum nullam rhoncus
   adipiscing. Sem tortor molestie odio.Adipiscing etiam vitae in
   semper sed eget nec aliquet aliquam. Morbi integer quis
   tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
   scelerisque elit fermentum nullam rhoncus adipiscing. Sem
   tortor molestie odio.
</p> */
