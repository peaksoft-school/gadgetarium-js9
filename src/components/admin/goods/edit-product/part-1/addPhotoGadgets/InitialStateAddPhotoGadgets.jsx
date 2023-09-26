import { styled } from '@mui/material'
import { ReactComponent as AddPhotoIcon } from '../../../../../../assets/icons/photo-add/add-photo-icon.svg'

export const InitialStateAddPhotoGadgets = ({
   handleFileChange,
   handleDrop,
}) => {
   return (
      <label className="label" onDragOver={(e) => e.drag} onDrop={handleDrop}>
         <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            multiple
            onChange={handleFileChange}
         />

         <ContainerPlaceholder>
            <div>
               <AddPhotoIcon />
            </div>
            <div>
               <span>Нажмите или перетащите сюда файл</span>

               <ul>
                  <li>Минимальное разрешение - 450x600</li>
                  <li>Maкcимaльнoe количество - 10 фото</li>
               </ul>
            </div>
         </ContainerPlaceholder>
      </label>
   )
}

InitialStateAddPhotoGadgets.displayName = 'InitialStateAddPhotoGadgets'

const ContainerPlaceholder = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100%;
   gap: 1.2rem;

   font-size: 0.86rem;
   font-weight: 400;

   ul {
      margin-top: 0.52rem;
      margin-left: 1rem;

      li {
         list-style: disc;
      }
   }
`
