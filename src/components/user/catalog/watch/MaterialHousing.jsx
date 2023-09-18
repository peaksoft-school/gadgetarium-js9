import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const MaterialHousing = () => {
   const { materialHousing } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeMaterialHousing(id))
   }

   useEffect(() => {
      dispatch(categoryActions.watchMaterialHousing())
   }, [materialHousing])

   return (
      <CatalogSelect
         title="Материал корпуса"
         onToggleCheckbox={postTitle}
         items={materialHousing}
      />
   )
}
