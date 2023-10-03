import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Category from '../UI/category.select/CategorySelect'
import { ReactComponent as Smartphone } from '../../assets/icons/goods/mobile-android-two-icon.svg'
import { ReactComponent as Desktop } from '../../assets/icons/goods/desktop-two-icon.svg'
import { ReactComponent as Watch } from '../../assets/icons/goods/watch-icon.svg'
import { categoryActions } from '../../store/cataog/catalogSlice'
import { getCatalogRequest } from '../../store/cataog/categoryThunk'

const GeneralCategorySelectLayout = ({ toggleCatalogSelect }) => {
   const catalogProduct = useSelector((state) => state.category)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const [categoryStates, setCategoryStates] = useState({
      smartphone: false,
      desktop: false,
      watch: false,
      tablet: false,
   })

   useEffect(() => {
      dispatch(getCatalogRequest())
   }, [])

   const handleCategoryOpen = (categoryName) => {
      setCategoryStates({
         smartphone: categoryName === 'smartphone',
         desktop: categoryName === 'desktop',
         watch: categoryName === 'watch',
         tablet: categoryName === 'tablet',
      })
   }

   const handleCategoryClose = (id) => {
      if (id < 5) {
         navigate('/category/Phone')
      } else if (id >= 5 && id <= 9) {
         navigate('/category/Laptop')
      } else if (id >= 10 && id <= 12) {
         navigate('/category/Smart Watch')
      } else if (id >= 13 && id <= 15) {
         navigate('/category/Tablet')
      }
      dispatch(categoryActions.resetAll())
      dispatch(categoryActions.addBrandsId())
      toggleCatalogSelect()

      dispatch(categoryActions.changeInfoPage({ id }))
   }

   return (
      <Container>
         {catalogProduct?.allCategory?.map((title, index) => {
            switch (index) {
               case 1:
                  return (
                     <Category
                        key={title.id}
                        id={title.id}
                        index={index + 1}
                        componentIcon={Desktop}
                        open={categoryStates.desktop}
                        handleCategoryOpen={() => handleCategoryOpen('desktop')}
                        handleCategoryClose={handleCategoryClose}
                     >
                        {title.title}
                     </Category>
                  )
               case 2:
                  return (
                     <Category
                        key={title.id}
                        id={title.id}
                        index={index + 1}
                        componentIcon={Watch}
                        open={categoryStates.watch}
                        handleCategoryOpen={() => handleCategoryOpen('watch')}
                        handleCategoryClose={handleCategoryClose}
                     >
                        {title.title}
                     </Category>
                  )
               case 3:
                  return (
                     <Category
                        key={title.id}
                        id={title.id}
                        index={index + 1}
                        componentIcon={Smartphone}
                        open={categoryStates.tablet}
                        handleCategoryOpen={() => handleCategoryOpen('tablet')}
                        tablet
                        handleCategoryClose={handleCategoryClose}
                     >
                        {title.title}
                     </Category>
                  )
               default:
                  return (
                     <Category
                        key={title.id}
                        id={title.id}
                        index={index + 1}
                        componentIcon={Smartphone}
                        open={categoryStates.smartphone}
                        handleCategoryOpen={() =>
                           handleCategoryOpen('smartphone')
                        }
                        handleCategoryClose={handleCategoryClose}
                     >
                        {title.title}
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
   height: 196px;
   border-radius: 4px 0px 0px 4px;
   padding: 0px 12px 0px 12px;
`
