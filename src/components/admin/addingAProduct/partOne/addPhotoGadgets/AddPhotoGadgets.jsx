import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { InitialStateAddPhotoGadgets } from './InitialStateAddPhotoGadgets'
import { StateAfterAddingOnePhoto } from './StateAfterAddingOnePhoto'

export const AddPhotoGadgets = ({
   onPhotoCollector,
   photoStateData,
   errorcategory,
}) => {
   const [smartphonePhoto, setSmartphonePhoto] = useState(null)
   const { snackbarHandler } = useSnackbar()
   const [containerImg, setContainerImg] = useState(photoStateData || [])

   const error = errorcategory === 'true' ? containerImg[0] === '' : true

   const deleteHandler = (id) => {
      const filteredContainerImg = containerImg.filter((item) => item.id !== id)
      setContainerImg(filteredContainerImg)
   }

   useEffect(() => {
      if (photoStateData === null) {
         setContainerImg([])
      } else {
         setContainerImg(photoStateData)
      }
   }, [photoStateData])

   const imgUrl = smartphonePhoto && URL.createObjectURL(smartphonePhoto)

   useEffect(() => {
      onPhotoCollector(containerImg)
   }, [containerImg])

   useEffect(() => {
      if (smartphonePhoto && containerImg.length !== 10) {
         const data = {
            id: Date.now().toString(),
            img: imgUrl,
            imgObg: smartphonePhoto,
         }

         setContainerImg((prevContainerImg) => [...prevContainerImg, data])
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

         reader.onload = (e) => {
            image.onload = () => {
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
         <ContainerAddPhoto error={error ? 'true' : 'false'}>
            <span className="span">Добавьте фото</span>

            {containerImg.length === 0 ? (
               <InitialStateAddPhotoGadgets
                  handleFileChange={handleFileChange}
                  handleDrop={handleDrop}
               />
            ) : (
               <StateAfterAddingOnePhoto
                  deleteHandler={deleteHandler}
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

const ContainerAddPhoto = styled('div')(({ theme, error }) => ({
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
      border: `1px dashed ${error === 'false' ? '#ff0000' : '#000000'}`,
      backgroundColor: '#d2d4d87f',
   },

   '.span': {
      color: theme.palette.primary.light,
      fontSize: '1rem',
   },
}))
