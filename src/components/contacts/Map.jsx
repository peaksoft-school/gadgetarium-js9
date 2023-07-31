import { styled } from '@mui/material'
import React, { useEffect } from 'react'

export const MapComponent = () => {
   useEffect(() => {
      const script = document.createElement('script')
      script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full'
      script.onload = () => {
         window.DG.then(() => {
            const map = window.DG.map('map', {
               center: [42.88036, 74.606476],
               zoom: 11.28,
            })
            map.setCenter([42.88036, 74.606476])
            map.setZoom(11.28)
         })
      }
      document.body.appendChild(script)
      return () => {
         document.body.removeChild(script)
      }
   }, [])
   return <Container id="map" />
}

const Container = styled('div')`
   width: 100%;
   height: 71.125vh;
   margin-bottom: 7.5rem;
`
