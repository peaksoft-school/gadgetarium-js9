import { styled } from '@mui/material'
import React from 'react'
import mapOfKyrgyzstan from '../../../assets/images/mapOfKyrgyzstan.png'

export const TodayWeAre = () => {
   return (
      <Container>
         <div>
            <p className="title">Мы сегодня - это:</p>

            <Box className="text">
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  amet est orci volutpat placerat maecenas egestas augue ac.
                  Tortor, sed magnis interdum massa. Id phasellus lectus dui
                  nisl. Adipiscing etiam vitae in semper sed eget nec aliquet
                  aliquam.
               </p>

               <p>
                  Non ultricies sollicitudin nisi quisque. Morbi integer quis
                  tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
                  scelerisque elit fermentum nullam rhoncus adipiscing. Sem
                  tortor molestie odio. Adipiscing etiam vitae in semper sed
                  eget nec aliquet aliquam. Morbi integer quis tincidunt vitae
                  penatibus. Feugiat quis tincidunt volutpat scelerisque elit
                  fermentum nullam rhoncus adipiscing. Sem tortor molestie odio.
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
   width: 85.35vw;
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
