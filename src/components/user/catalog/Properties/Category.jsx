import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Category = memo(() => {
   const dispatch = useDispatch()
   const { items } = useSelector((state) => state.category)

   const toggleCheckedHandler = (categoryId, category) => {
      dispatch(categoryActions.toggleCheckedHandler(categoryId))
      dispatch(categoryActions.addBrandsId())
      dispatch(categoryActions.addSelectedCategories(category))
   }
   return (
      <CatalogSelect
         title="Категория"
         onToggleCheckbox={toggleCheckedHandler}
         items={items}
      />
   )
})

Category.dispatch = 'Category'
