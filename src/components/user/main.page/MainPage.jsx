import { styled } from '@mui/material'
import { BannerCarousel } from './Banner'

export const MainPage = () => {
   const banners = [
      { src: 'banner1.jpg', id: 1 },
      { src: 'banner2.jpg', id: 2 },
      { src: 'banner3.jpg', id: 3 },
   ]
   return (
      <Container>
         <BannerCarousel banners={banners} />
         <MainContainer>HI</MainContainer>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const MainContainer = styled('div')`
   width: 85.35vw;
`
// const Banner = styled('div')`
//    width: 100%;
//    background-color: #505053;
//    height: 46.2963vh;
// `
