import { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { ReactComponent as AddPhotoIcon } from '../../../../../assets/icons/photo-add/add-photo-icon.svg'
import { postBrandImg } from '../../../../../store/addProduct/addProduct.thunk'

const PhotoUploader = ({ error }) => {
   const dispatch = useDispatch()
   const [selectedFile, setSelectedFile] = useState(null)

   const handleFileChange = (event) => {
      const file = event.target.files[0]
      setSelectedFile(file)
   }

   useEffect(() => {
      if (selectedFile) {
         dispatch(postBrandImg(selectedFile))
      }
   }, [selectedFile])

   return (
      <label>
         <BoxAddImg error={error ? 'true' : 'false'}>
            <input
               id="upload-button"
               type="file"
               accept="image/*"
               style={{ display: 'none' }}
               onChange={handleFileChange}
            />

            {selectedFile ? (
               <div className="img-wrapper">
                  <img
                     src={URL.createObjectURL(selectedFile)}
                     alt="Выбранное фото"
                     style={{ maxWidth: '100%', maxHeight: 200 }}
                  />
               </div>
            ) : (
               <BoxAddImgContent>
                  <div>
                     <AddPhotoIcon />
                  </div>
                  <div>
                     <span>Нажмите для добавления фотографии</span>
                  </div>
               </BoxAddImgContent>
            )}
         </BoxAddImg>
      </label>
   )
}

export default PhotoUploader

const BoxAddImg = styled('div')(({ error }) => ({
   width: '13.5625rem',
   height: '13.5625rem',
   background: 'rgba(144, 156, 181, 0.20)',
   border: `1px solid ${error === 'true' ? '#ff0000' : '#909cb533'}`,

   '.img-wrapper': {
      display: 'flex',
      width: '100%',
      height: '100%',
      overflow: 'hidden',

      img: {
         width: '100%',
         height: '100%',
         objectFit: 'contain',
      },
   },
}))

const BoxAddImgContent = styled('div')(({ theme }) => ({
   display: 'flex',
   height: '100%',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '0.86rem',
   textAlign: 'center',

   span: {
      color: theme.palette.secondary.contrastText,
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: '0.9rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '120%',
   },
}))
