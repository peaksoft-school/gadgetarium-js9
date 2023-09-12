import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategory } from '../../../../store/cataog/categoryThunk'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Category = () => {
   const dispatch = useDispatch()
   const { items } = useSelector((state) => state.category)

   const toggleCheckedHandler = (categoryId, category) => {
      dispatch(categoryActions.toggleCheckedHandler(categoryId))
      dispatch(categoryActions.addBrandsId())
      dispatch(categoryActions.addSelectedCategories(category))
   }

   useEffect(() => {
      dispatch(getCategory())
   }, [])

   return (
      <CatalogSelect
         title="Категория"
         onToggleCheckbox={toggleCheckedHandler}
         items={items}
      />
   )
}
