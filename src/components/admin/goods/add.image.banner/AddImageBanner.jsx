import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { AddImageBannerWhenManyImages } from './AddImageBannerWhenManyImages'
import { ReactComponent as AddPhotoIcon } from '../../../../assets/icons/photo-add/add-photo-icon.svg'

export const AddImageBanner = () => {
   const [smartphonePhoto, setSmartphonePhoto] = useState(null)
   const [containerImg, setContainerImg] = useState([])
   const deleteHandler = (id) => {
      const filteredContainerImg = containerImg.filter((item) => item.id !== id)
      setContainerImg(filteredContainerImg)
   }

   const imgUrl = smartphonePhoto && URL.createObjectURL(smartphonePhoto)

   useEffect(() => {
      if (smartphonePhoto && containerImg.length !== 10) {
         const data = {
            id: Date.now().toString(),
            img: imgUrl,
         }

         setContainerImg((prevContainerImg) => [...prevContainerImg, data])
      }
   }, [smartphonePhoto])

   const handleFileChangeFromDrop = (file) => {
      if (file) {
         const image = new Image()
         const reader = new FileReader()

         reader.onload = (e) => {
            image.onload = () => {
               setSmartphonePhoto(file)
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
         {containerImg.length === 0 ? (
            <FileInputLabel visible={containerImg.length > 0}>
               <StyledAddPhotoIcon />
               <InputText>Нажмите для добавления фотографии</InputText>
               <Input
                  type="file"
                  onChange={(e) => {
                     handleFileChange(e)
                  }}
               />
            </FileInputLabel>
         ) : (
            <AddImageBannerWhenManyImages
               deleteHandler={deleteHandler}
               handleFileChange={handleFileChange}
               containerImg={containerImg}
               handleDrop={handleDrop}
            />
         )}
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   width: 100%;
   justify-content: center;
`
const FileInputLabel = styled('label')`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.296vh;
   justify-content: center;
   width: 11.02927083vw;
   height: 11.02927083vw;
   background-color: #909cb533;
   margin-bottom: 2.96296vh;
   border-radius: 2%;
`
const StyledAddPhotoIcon = styled(AddPhotoIcon)`
   width: 1.4589vw;
   height: 1.4589vw;
`
const InputText = styled('p')`
   font-family: Inter;
   font-size: 0.625vw;
   font-style: normal;
   font-weight: 400;
   line-height: 120%;
   color: #91969e;
   text-align: center;
   margin: 0;
`
const Input = styled('input')`
   display: none;
`
