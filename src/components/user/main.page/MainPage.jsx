import React from 'react'
import { styled } from '@mui/material'
import { BannerCarousel } from './Banner'
import { FilteredProducts } from './FilteredProducts'
import { arrayForTools } from '../../../utils/common/constants/constants'

export const MainPage = React.memo(() => {
   return (
      <Container>
         <BannerCarousel />
         <MainContainer>
            <FilteredProducts array="stock">Акции</FilteredProducts>
            <FilteredProducts array="novelties">Новинки</FilteredProducts>
            <FilteredProducts array="recommend">
               Мы рекомендуем
            </FilteredProducts>
         </MainContainer>
         <ToolsContainer>
            {arrayForTools.map(({ id, component: Icon, text }) => {
               const StyledIcon = styled(Icon)`
                  width: 4.167vw;
                  height: 6.4815vh;
               `
               return (
                  <ToolContainer key={id}>
                     <StyledIcon />
                     <Text state={id}>{text}</Text>
                  </ToolContainer>
               )
            })}
         </ToolsContainer>
      </Container>
   )
})
MainPage.displayName = 'MainPage'

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const MainContainer = styled('div')`
   width: 79.8vw;
`
const ToolsContainer = styled('div')`
   display: flex;
   gap: 2.083vw;
`
const Text = styled('p')`
   width: ${(props) => (props.state === 4 ? '3.698vw' : '10vw')};
   height: 3.8889vh;
   text-align: center;
   color: #292929;
   margin: 0;
   font-family: Inter;
   font-size: 0.833333vw;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
`
const ToolContainer = styled('div')`
   margin-top: 11.1111vh;
   margin-bottom: 11.1111vh;
   width: 11.563vw;
   height: 17.7778vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 1.8519vh;
   border-radius: 4px;
   background: #fff;
`
