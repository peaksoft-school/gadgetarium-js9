import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { getColorsCatalog } from '../../../../store/cataog/categoryThunk'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Colors = () => {
   const { itemsColors, itemsColorsTransformation } = useSelector(
      (state) => state.category
   )

   const category = useParams()
   const dispatch = useDispatch()
   const categoryValues = Object.values(category)[0]

   const categoryName = {
      Phone: 1,
      Laptop: 2,
      'Smart Watch': 3,
      Tablet: 4,
   }

   const postTitle = (_, data) => {
      dispatch(categoryActions.changeColor(data.codeColor))
   }

   useEffect(() => {
      dispatch(getColorsCatalog({ categoryId: categoryName[categoryValues] }))
   }, [categoryName[categoryValues]])

   useEffect(() => {
      dispatch(categoryActions.colors())
   }, [itemsColors])

   const updatedItemsColors = itemsColors?.map((el) => ({
      ...el,
      codeColorTransform: itemsColorsTransformation[el.codeColor],
   }))
   return (
      <CatalogSelect
         title="Цвет"
         onToggleCheckbox={postTitle}
         items={updatedItemsColors}
      />
   )
}
