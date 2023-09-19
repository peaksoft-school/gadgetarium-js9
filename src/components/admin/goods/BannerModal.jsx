import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Modal } from '../../UI/Modal'
import { Button } from '../../UI/Button'
import { AddImageBanner } from './add.image.banner/AddImageBanner'
import { postBanners } from '../../../store/admin.goods/admin.goods.thunk'
import { useSnackbar } from '../../../hooks/useSnackbar'

export const BannerModal = ({ open, onClose }) => {
   const [containerImg, setContainerImg] = useState([])
   const changeContainerImg = (value) => {
      setContainerImg(value)
   }
   const dispatch = useDispatch()
   const { snackbarHandler } = useSnackbar()
   const submitHandler = () => {
      if (containerImg.length === 0) {
         snackbarHandler({
            message: 'Выберите баннер чтобы загрузить',
            type: 'warning',
         })
      } else {
         const bannerImages = containerImg.map((el) => {
            return el.img
         })
         dispatch(postBanners({ data: { bannerImages }, snackbarHandler }))
         onClose()
         setContainerImg([])
      }
   }
   return (
      <StyledModal open={open} onClose={onClose} padding="2.083vw 1.667vw">
         <Title>Загрузить баннер</Title>
         <AddImageBanner
            containerImg={containerImg}
            changeContainerImg={changeContainerImg}
         />
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
               onClick={submitHandler}
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
