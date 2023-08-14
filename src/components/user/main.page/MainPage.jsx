import { styled } from '@mui/material'
import { BannerCarousel } from './Banner'
import { FilteredProducts } from './FilteredProducts'

export const MainPage = () => {
   return (
      <Container>
         <BannerCarousel />
         <MainContainer>
            <FilteredProducts>Акции</FilteredProducts>
         </MainContainer>
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
