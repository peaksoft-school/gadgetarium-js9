import { styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const Description = () => {
   const { description, videoLink } = useSelector(
      (state) => state.phone.infoPhone
   )

   return (
      <Container>
         <iframe
            width="560"
            height="315"
            src={videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
         />

         <div dangerouslySetInnerHTML={{ __html: description }} />
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
