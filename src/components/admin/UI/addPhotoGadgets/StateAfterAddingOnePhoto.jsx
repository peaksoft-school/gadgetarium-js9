import { styled } from '@mui/material'
import { ReactComponent as AddPhotoIcon } from '../../../../assets/icons/photo-add/add-photo-icon.svg'

export const StateAfterAddingOnePhoto = ({
   handleFileChange,
   containerImg,
   handleDrop,
}) => {
   const lengthContainerImg = containerImg.length === 3
   console.log('lengthContainerImg: ', lengthContainerImg)

   return (
      <ContainerPhotoAndAddNewPhoto>
         <div
            className={`box box${
               lengthContainerImg ? '-length-three-true' : '-length-three-false'
            }`}
         >
            <Label
               containerImg={containerImg}
               onDragOver={(e) => e.preventDefault()}
               onDragEnter={(e) => e.preventDefault()}
               onDragLeave={(e) => e.preventDefault()}
               onDrop={handleDrop}
            >
               <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
               />

               <BoxLabelContent>
                  <AddPhotoIcon />
                  <span>Добавить фото</span>
               </BoxLabelContent>
            </Label>
            <ContainerPhoto containerImg={containerImg}>
               <div className={lengthContainerImg ? 'trueThree' : 'falseThree'}>
                  {containerImg.map((item) => (
                     <BoxPhoto key={item.id}>
                        <div className="img-wrapper">
                           <img src={item.img} alt="smartphone photos" />
                        </div>
                     </BoxPhoto>
                  ))}
               </div>
            </ContainerPhoto>
         </div>
      </ContainerPhotoAndAddNewPhoto>
   )
}

const containerImgLengthBigThree = (containerImg) => {
   const lengthContainerImg = containerImg.length === 3

   return lengthContainerImg ? '27rem' : '8rem'
}

const ContainerPhotoAndAddNewPhoto = styled('div')(({ theme }) => ({
   borderRadius: '0.20833rem',
   border: `1px dashed ${theme.palette.primary.mainContrastText}`,
   backgroundColor: '#d2d4d87f',

   '.box': {
      padding: '1.4rem',
   },

   '.box-length-three-false': {
      display: 'flex',
      gap: '1.4rem',
   },

   '.box-length-three-true': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.04rem',
   },
}))

const Label = styled('label')(({ containerImg }) => ({
   width: containerImgLengthBigThree(containerImg),
   height: '8.60417rem',
   backgroundColor: '#E8E9EB',
   outline: '1px solid #000',

   input: {
      display: 'none',
   },
}))

const BoxLabelContent = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   textAlign: 'center',
   height: '100%',
   gap: '0.42rem',
   justifyContent: 'center',

   fontSize: '0.8rem',
   color: theme.palette.secondary.contrastText,
   fontWeight: 500,
}))

const ContainerPhoto = styled('div')(() => ({
   '.falseThree': {
      display: 'flex',
      gap: '1.4rem',
   },

   '.trueThree': {
      display: 'flex',
      gap: '1.4rem',
   },
}))

const BoxPhoto = styled('div')(() => ({
   width: '8rem',
   height: '8.60417rem',
   border: '1px solid #f00',

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

/*

<BoxPhoto>
  <div className="img-wrapper">
    <img
			src=''
      alt="smartphone photos"
    />
	</div>
</BoxPhoto>

*/
