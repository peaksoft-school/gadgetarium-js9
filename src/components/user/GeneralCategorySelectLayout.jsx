import React, { useState } from 'react'
import { styled } from '@mui/material'
import Category from '../UI/category.select/CategorySelect'
import { ReactComponent as Smartphone } from '../../assets/icons/goods/mobile-android-two-icon.svg'
import { ReactComponent as Headphone } from '../../assets/icons/goods/headphones-icon.svg'
import { ReactComponent as Desktop } from '../../assets/icons/goods/desktop-two-icon.svg'
import { ReactComponent as Watch } from '../../assets/icons/goods/watch-icon.svg'

const categories = [
   { id: 1, title: 'Смартфоны', icon: Smartphone },
   { id: 2, title: 'Ноутбуки и планшеты', icon: Desktop },
   { id: 3, title: 'Смарт-часы и браслеты', icon: Watch },
   { id: 4, title: 'Аксессуары', icon: Headphone },
]

const GeneralCategorySelectLayout = () => {
   const [categoryStates, setCategoryStates] = useState({
      smartphone: false,
      desktop: false,
      watch: false,
      headphone: false,
   })

   const handleCategoryOpen = (categoryName) => {
      setCategoryStates({
         smartphone: categoryName === 'smartphone',
         desktop: categoryName === 'desktop',
         watch: categoryName === 'watch',
         headphone: categoryName === 'headphone',
      })
   }
   const handleCategoryClose = () => {
      setCategoryStates({
         smartphone: false,
         desktop: false,
         watch: false,
         headphone: false,
      })
   }

   return (
      <Container onMouseLeave={handleCategoryClose}>
         {categories.map((category, index) => {
            switch (index) {
               case 1:
                  return (
                     <Category
                        key={category.id}
                        index={index + 1}
                        componentIcon={Desktop}
                        isMenuOpen={categoryStates.desktop}
                        handleCategoryOpen={() => handleCategoryOpen('desktop')}
                        handleCategoryClose={handleCategoryClose}
                     >
                        {category.title}
                     </Category>
                  )
               case 2:
                  return (
                     <Category
                        key={category.id}
                        index={index + 1}
                        componentIcon={Watch}
                        isMenuOpen={categoryStates.watch}
                        handleCategoryOpen={() => handleCategoryOpen('watch')}
                        handleCategoryClose={handleCategoryClose}
                     >
                        {category.title}
                     </Category>
                  )
               case 3:
                  return (
                     <Category
                        key={category.id}
                        index={index + 1}
                        componentIcon={Headphone}
                        isMenuOpen={categoryStates.headphone}
                        handleCategoryOpen={() =>
                           handleCategoryOpen('headphone')
                        }
                        handleCategoryClose={handleCategoryClose}
                     >
                        {category.title}
                     </Category>
                  )
               default:
                  return (
                     <Category
                        key={category.id}
                        index={index + 1}
                        componentIcon={Smartphone}
                        isMenuOpen={categoryStates.smartphone}
                        handleCategoryOpen={() =>
                           handleCategoryOpen('smartphone')
                        }
                        handleCategoryClose={handleCategoryClose}
                     >
                        {category.title}
                     </Category>
                  )
            }
         })}
      </Container>
   )
}

export default GeneralCategorySelectLayout

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: white;
   width: 372px;
   height: 186px;
   border-radius: 4px 0px 0px 4px;
   padding: 0px 8px 0px 8px;
   /* box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1); */
`
