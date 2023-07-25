/* eslint-disable no-undef */
import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import { InitialStateAddPhotoGadgets } from './InitialStateAddPhotoGadgets'
import { StateAfterAddingOnePhoto } from './StateAfterAddingOnePhoto'

export const AddPhotoGadgets = () => {
   const [smartphonePhoto, setSmartphonePhoto] = useState(null)
   const { snackbarHandler } = useSnackbar()
   const [containerImg, setContainerImg] = useState([
      {
         id: '1',
         img: 'https://asiastore.kg/image/cache/catalog/iphone/iphone14/iphone14/purple/wwen_iphone14_q422_purple_pdp_image_position-1a-670x540.jpg',
      },
   ])

   console.log('containerImg: ', containerImg)

   const imgUrl = smartphonePhoto && URL.createObjectURL(smartphonePhoto)

   useEffect(() => {
      if (smartphonePhoto && containerImg.length !== 10) {
         const data = {
            id: Date.now().toString(),
            img: imgUrl,
         }

         const result = [...containerImg, data]

         setContainerImg(result)
      }
   }, [smartphonePhoto])

   const handleFileChangeFromDrop = (file) => {
      if (containerImg.length >= 10) {
         snackbarHandler({
            message: 'Максимальное количество фото 10',
            type: 'error',
         })
      } else if (file) {
         const image = new Image()
         const reader = new FileReader()

         reader.onload = function (e) {
            image.onload = function () {
               const { width } = image
               const { height } = image

               if (width >= 450 && height >= 600) {
                  setSmartphonePhoto(file)
               } else {
                  snackbarHandler({
                     message:
                        'Фото должно иметь минимальное разрешение 450x600 пикселей.',
                     type: 'error',
                  })

                  setSmartphonePhoto(null)
               }
            }

            image.src = e.target.result
         }

         reader.readAsDataURL(file)
      }
   }

   const handleFileChange = (event) => {
      const file = event.target.files[0]

      handleFileChangeFromDrop(file)
   }

   const handleDrop = (e) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]

      handleFileChangeFromDrop(file)
   }

   return (
      <Container>
         <ContainerAddPhoto>
            <span className="span">Добавьте фото</span>

            {containerImg.length === 0 ? (
               <InitialStateAddPhotoGadgets
                  handleFileChange={handleFileChange}
                  handleDrop={handleDrop}
               />
            ) : (
               <StateAfterAddingOnePhoto
                  handleFileChange={handleFileChange}
                  containerImg={containerImg}
                  handleDrop={handleDrop}
               />
            )}
         </ContainerAddPhoto>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   width: 10px;
`

const ContainerAddPhoto = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.31rem',
   fontFamily: theme.typography.mainFontFamily,
   lineHeight: 'normal',
   fontWeight: '400',
   fontStyle: 'normal',

   '.label': {
      width: '24.7rem',
      padding: '1.3rem 0',

      borderRadius: '0.20833rem',
      border: `1px dashed ${theme.palette.primary.mainContrastText}`,
      backgroundColor: '#d2d4d87f',
   },

   '.span': {
      color: theme.palette.primary.light,
      fontSize: '1rem',
   },
}))
