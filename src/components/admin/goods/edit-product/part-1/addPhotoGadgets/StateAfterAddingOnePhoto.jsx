import { styled } from '@mui/material'
import { ReactComponent as AddPhotoIcon } from '../../../../../../assets/icons/photo-add/add-photo-icon.svg'
import { ReactComponent as DeleteItem } from '../../../../../../assets/icons/tools-for-site/delete-icon.svg'

export const StateAfterAddingOnePhoto = ({
   deleteHandler,
   handleFileChange,
   containerImg,
   handleDrop,
}) => {
   return (
      <ContainerPhotoAndAddNewPhoto containerImg={containerImg.length}>
         <div
            className={`box box${
               containerImg.length === 3
                  ? '-length-three-true'
                  : '-length-three-false'
            }`}
         >
            <ContainerPhoto>
               {containerImg.length === 10 ? null : (
                  <Label
                     containerImg={containerImg.length}
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
                        <StyledAddPhotoIcon />
                        <span>Добавить фото</span>
                     </BoxLabelContent>
                  </Label>
               )}
               {containerImg.length >= 4 && (
                  <SecondContainerForImg>
                     {containerImg.map((item, index) => {
                        if (
                           (containerImg.length === 4 && index >= 2) ||
                           (containerImg.length === 5 && index >= 3) ||
                           (containerImg.length === 7 && index >= 6) ||
                           (containerImg.length === 8 && index >= 6) ||
                           (containerImg.length >= 9 && index >= 8) ||
                           (containerImg.length === 10 && index >= 9)
                        ) {
                           return (
                              <BoxPhoto
                                 containerImg={containerImg.length}
                                 index={index}
                                 key={item.id}
                                 sx={{
                                    width:
                                       containerImg.length === 7 ||
                                       containerImg.length === 10 ||
                                       containerImg.length === 9
                                          ? '10.7rem'
                                          : '6.90025rem',
                                 }}
                              >
                                 <ImageContainer
                                    className="img-wrapper"
                                    image={item.img}
                                 >
                                    <DeleteContainer
                                       onClick={() => deleteHandler(item.id)}
                                    >
                                       <StyledDeleteIcon />
                                    </DeleteContainer>
                                 </ImageContainer>
                              </BoxPhoto>
                           )
                        }
                        return null
                     })}
                  </SecondContainerForImg>
               )}
            </ContainerPhoto>
            <FirstContainerForImg containerImg={containerImg.length}>
               {containerImg
                  .slice()
                  .reverse()
                  .map((item, index) => {
                     if (
                        containerImg.length === 4 &&
                        (index === 0 || index === 1)
                     ) {
                        return null
                     }
                     if (
                        containerImg.length === 5 &&
                        (index === 0 || index === 1)
                     ) {
                        return null
                     }
                     if (
                        (containerImg.length === 7 && index === 0) ||
                        (containerImg.length === 8 &&
                           (index === 0 || index === 1))
                     ) {
                        return null
                     }
                     if (containerImg.length === 9 && index === 0) {
                        return null
                     }
                     if (
                        (containerImg.length === 10 && index === 0) ||
                        (containerImg.length === 10 && index === 1)
                     ) {
                        return null
                     }
                     return (
                        <BoxPhoto
                           containerImg={containerImg.length}
                           index={index}
                           key={item.id}
                        >
                           <ImageContainer
                              className="img-wrapper"
                              image={item.img}
                           >
                              <DeleteContainer
                                 onClick={() => deleteHandler(item.id)}
                              >
                                 <StyledDeleteIcon />
                              </DeleteContainer>
                           </ImageContainer>
                        </BoxPhoto>
                     )
                  })}
            </FirstContainerForImg>
         </div>
      </ContainerPhotoAndAddNewPhoto>
   )
}

const widthNestForLabel = (containerImg) => {
   if ([3, 6].includes(containerImg)) {
      return '21.87rem'
   }
   if ([1, 7, 9].includes(containerImg)) {
      return '10.70rem'
   }
   return '6.90025rem'
}

const widthNestForBoxPhoto = (containerImg, index) => {
   if (
      (containerImg === 4 && (index === 2 || index === 3)) ||
      containerImg === 1 ||
      (containerImg === 9 && index === 8) ||
      (containerImg === 9 && index === 7) ||
      (containerImg === 10 && index === 8) ||
      (containerImg === 10 && index === 9) ||
      (containerImg === 9 && index === 0)
   ) {
      return '10.70rem'
   }
   return '6.90025rem'
}
const ContainerPhotoAndAddNewPhoto = styled('div')(({ containerImg }) => ({
   border: `1px dashed black`,
   backgroundColor: '#d2d4d87f',
   borderRadius: '4px',

   '.box': {
      padding: '0.98rem',
      width: (containerImg >= 4 || containerImg === 1) && '24.6875rem',
      display: 'flex',
      flexDirection: containerImg > 2 ? 'column' : 'row',
      transition: 'width 0.3s ease-in-out',
   },

   '.box-length-three-false': {
      display: 'flex',
      gap: '0.98rem',
   },

   '.box-length-three-true': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.82rem',
   },
}))

const Label = styled('label')(({ containerImg }) => ({
   width: widthNestForLabel(containerImg),
   transition: 'width 0.3s ease-in-out',
   height: '7.17rem',
   backgroundColor: '#E8E9EB',

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
   gap: '0.33rem',
   justifyContent: 'center',
   fontSize: '0.8rem',
   color: theme.palette.secondary.contrastText,
   fontWeight: 500,

   span: {
      fontFamily: 'Inter',
      color: '#91969E',
      fontSize: '0.59rem',
      fontStyle: 'normal',
      lineHeight: 'normal',
   },
}))

const ContainerPhoto = styled('div')(() => ({
   display: 'flex',
   gap: '0.98rem',
   justifyContent: 'space-between',
}))

const BoxPhoto = styled('div')(({ containerImg, index }) => ({
   width: widthNestForBoxPhoto(containerImg, index),
   height: '7.240rem',

   '.img-wrapper': {
      display: 'flex',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
   },

   transition: 'width 0.3s ease-in-out',
   transitionDelay: `${index * 0.1}s`,
}))

const ImageContainer = styled('div')(({ image }) => ({
   backgroundImage: `url(${image})`,
   display: 'flex',
   justifyContent: 'flex-end',
   backgroundPosition: 'center',
   borderRadius: '0.2rem',
   backgroundSize: '100%',
   backgroundRepeat: 'no-repeat',
   backgroundColor: 'white',
}))

const DeleteContainer = styled('div')`
   cursor: pointer;
   background-color: #909cb5;
   width: 2rem;
   height: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 0.2rem;
`

const StyledDeleteIcon = styled(DeleteItem)`
   path {
      fill: white;
   }
`

const SecondContainerForImg = styled('div')`
   display: flex;
   gap: 0.98rem;
`

const FirstContainerForImg = styled('div')(({ containerImg }) => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   flexWrap: containerImg >= 6 ? 'wrap' : 'nowrap',
   gap: '0.98rem',
}))

const StyledAddPhotoIcon = styled(AddPhotoIcon)`
   width: 2.37rem;
   height: 2.37rem;
`
