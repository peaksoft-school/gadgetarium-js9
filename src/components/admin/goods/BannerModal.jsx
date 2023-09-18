import { styled } from '@mui/material'
import { Modal } from '../../UI/Modal'
import { Button } from '../../UI/Button'
import { AddImageBanner } from './add.image.banner/AddImageBanner'

export const BannerModal = ({ open, onClose }) => {
   return (
      <StyledModal open={open} onClose={onClose} padding="2.083vw 1.667vw">
         <Title>Загрузить баннер</Title>
         <AddImageBanner />
         <ButtonContainer>
            <Button
               variant="outlined"
               texttransform="uppercase"
               backgroundhover="#CB11AB"
               backgroundactive="#CB11AB"
               padding="0.9259vh 5vw"
               fontSize="0.791vw"
               onClick={onClose}
            >
               Отменить
            </Button>
            <Button
               variant="contained"
               texttransform="uppercase"
               padding="0.9259vh 5vw"
               fontSize="0.791vw"
               type="submit"
            >
               Загрузить
            </Button>
         </ButtonContainer>
      </StyledModal>
   )
}
const StyledModal = styled(Modal)`
   .MuiBox-root {
      width: 28.333vw;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`
const ButtonContainer = styled('div')`
   width: 100%;
   display: flex;
   justify-content: space-between;
   gap: 1.07vw;
   margin-top: 1.667vw;
`
const Title = styled('p')`
   color: #292929;
   text-align: center;
   font-feature-settings: 'clig' off, 'liga' off;
   font-family: Inter;
   font-size: 1.25vw;
   font-style: normal;
   font-weight: 500;
   line-height: 1.667vw;
   margin: 0;
   margin-bottom: 1.875vw;
`
