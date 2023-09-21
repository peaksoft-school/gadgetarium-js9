import { styled } from '@mui/material'
import React from 'react'

export const ReasonForSuccess = () => {
   return (
      <div className="box-text">
         <p className="title">В чем причина нашего успеха?</p>

         <Box className="text">
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
                  adipiscing. Sem tortor molestie odio. Adipiscing etiam vitae
                  in semper sed eget nec aliquet aliquam. Morbi integer quis
                  tincidunt vitae penatibus. Feugiat quis tincidunt volutpat
                  scelerisque elit fermentum nullam rhoncus adipiscing. Sem
                  tortor molestie odio.
               </p>
            </div>
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
   gap: 1.25rem;

   p {
      margin: 0;
   }
`
