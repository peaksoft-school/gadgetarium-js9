import { styled } from '@mui/material'
import { useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export const MapComponent = () => {
   const [clickedCoordinates, setClickedCoordinates] = useState(null)
   const [isMouseDown, setIsMouseDown] = useState(false)
   const handleMouseDown = () => {
      setIsMouseDown(true)
   }

   const handleMouseUp = () => {
      setIsMouseDown(false)
   }
   const handleMapClick = (e) => {
      const clickedCoords = e.get('coords')
      setClickedCoordinates(clickedCoords)
   }

   return (
      <Container
         isMouseDown={isMouseDown}
         onMouseDown={handleMouseDown}
         onMouseUp={handleMouseUp}
      >
         <YMaps>
            <Map
               defaultState={{
                  center: [42.875903, 74.628396],
                  zoom: 11,
               }}
               width="100%"
               height="33.33vw"
               onClick={handleMapClick}
            >
               {clickedCoordinates && (
                  <Placemark
                     options={{
                        iconLayout: 'default#image',
                        iconImageHref:
                           'https://lh3.googleusercontent.com/lHYSx9W9Uf4UTe-BOa30s_91w4GTOy4pvjclDbx2oVXFP0Xf5Wm49ivYEXPc2Rh5G0V79bKrQpfaFcpJdNQTZ9AkabMjNAV1IraqfmT7',
                        iconImageSize: [20, 28],
                     }}
                     geometry={clickedCoordinates}
                  />
               )}
            </Map>
         </YMaps>
      </Container>
   )
}

const Container = styled('div')`
   margin-bottom: 7.5rem;

   .ymaps-2-1-79-events-pane {
      cursor: default !important;
   }
   .ymaps-2-1-79-gototech {
      display: none;
   }
   .ymaps-2-1-79-map-copyrights-promo {
      display: none;
   }
   .ymaps-2-1-79-copyright__wrap {
      display: none;
   }
`
