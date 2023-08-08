import { styled } from '@mui/material'
import { ReactComponent as AddAPhotoIcon } from '../../assets/icons/photo-add/add-photo-camera-icon.svg'

export const RatingPhoto = ({ handleDrop, handleFileChange, img }) => {
   return (
      <Container>
         {img ? (
            <div>
               <div className="img-wrapper">
                  <img src={img} alt="" />
               </div>
            </div>
         ) : (
            <label
               onDragOver={(e) => e.drag}
               onDrop={handleDrop}
               className="box-label-photo"
            >
               <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  multiple
                  onChange={handleFileChange}
               />

               <BoxContent>
                  <div>
                     <AddAPhotoIcon />
                  </div>

                  <p>
                     <a href="http://localhost:3000/">Нажмите на ссылку, </a>{' '}
                     чтобы выбрать фотографии или просто перетащите их сюда
                  </p>
               </BoxContent>
            </label>
         )}
      </Container>
   )
}

const Container = styled('div')`
   width: 35.5625rem;

   margin-top: 0.75rem;
   margin-bottom: 1rem;

   border-radius: 0.25rem;
   border: 1px solid #cdcdcd;

   label {
      width: 100%;
      height: 100%;
      margin: 1.5rem 0;

      display: flex;
      justify-content: center;
   }

   .img-wrapper {
      width: 100%;
      height: 15rem;

      img {
         width: 100%;
         height: 100%;
      }
   }
`

const BoxContent = styled('div')`
   display: flex;
   align-items: center;
   gap: 1.47rem;

   p {
      width: 25.6875rem;
      color: #91969e;

      a {
         text-decoration: none;
         color: #2c68f5;
      }
   }
`
