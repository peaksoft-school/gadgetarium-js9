/* eslint-disable react/no-danger */
import { styled } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

export const Description = () => {
   const { description, videoLink } = useSelector(
      (state) => state.product.infoPhone
   )

   return (
      <Container>
         <ReactPlayer
            url={
               videoLink === 'link'
                  ? 'https://www.youtube.com/embed/-0_VUeaM-vA?si=7-7dFg6Xf15eKaDv'
                  : videoLink
            }
            width="560"
            height="315"
            controls
            playing={false}
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
