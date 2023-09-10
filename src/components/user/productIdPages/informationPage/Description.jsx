import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const Description = () => {
   const { description } = useSelector((state) => state.phone.infoPhone)

   return (
      <Container>
         <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9SeCBpRNT68"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
         />
         <h3>{description}</h3>
         <p>
            Non ultricies sollicitudin nisi quisque. Morbi integer quis
            tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
            scelerisque elit fermentum nullam rhoncus adipiscing. Sem tortor
            molestie odio. Adipiscing etiam vitae in semper sed eget nec aliquet
            aliquam. Morbi integer quis tincidunt vitae penatibus. Feugiat quis
            tincidunt volutpat scelerisque elit fermentum nullam rhoncus
            adipiscing. Sem tortor molestie odio.Adipiscing etiam vitae in
            semper sed eget nec aliquet aliquam. Non ultricies sollicitudin nisi
            quisque. Morbi integer quis tincidunt vitae penatibus. Feugiat quis
            tincidunt volutpat scelerisque elit fermentum nullam rhoncus
            adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae in
            semper sed eget nec aliquet aliquam.
         </p>
         <p>
            Morbi integer quis tincidunt vitae penatibus. Feugiat quis tincidunt
            volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem
            tortor molestie odio.Adipiscing etiam vitae in semper sed eget nec
            aliquet aliquam. Non ultricies sollicitudin nisi quisque. Morbi
            integer quis tincidunt vitae penatibus. Feugiat quis tincidunt
            volutpat scelerisque elit fermentum nullam rhoncus adipiscing. Sem
            tortor molestie odio
         </p>
         <p>
            Vel at convallis tempus nisl ut posuere. Sagittis vitae sodales
            scelerisque egestas platea nulla aenean. Facilisis feugiat est
            aliquet amet eu neque. Magna elementum laoreet tincidunt dolor, quam
            pulvinar. Feugiat lectus iaculis tortor magna vel eget in sem amet.
            Metus, tellus diam in neque sit sagittis ullamcorper. Nisl pulvinar
            lobortis enim morbi arcu, sed dictumst id. Tellus dolor eget magna
            auctor molestie eget.
         </p>
         <p>
            Vel at convallis tempus nisl ut posuere. Sagittis vitae sodales
            scelerisque egestas platea nulla aenean. Facilisis feugiat est
            aliquet amet eu neque. Magna elementum laoreet tincidunt dolor, quam
            pulvinar. Feugiat lectus iaculis tortor magna vel eget in sem amet.
            Metus, tellus diam in neque sit sagittis ullamcorper. Nisl pulvinar
            lobortis enim morbi arcu, sed dictumst id. Tellus dolor eget magna
            auctor molestie eget.
         </p>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 3.75rem;
   iframe {
      width: 100%;
      height: 35rem;
      border-radius: 0.5rem;
   }
`
