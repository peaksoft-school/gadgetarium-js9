import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const MaterialBracelets = () => {
   const { materialBracelets } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeMaterialBracelets(id))
   }

   useEffect(() => {
      dispatch(categoryActions.watchMaterialBracelets())
   }, [materialBracelets])

   return (
      <CatalogSelect
         title="Материал браслета/ремешка"
         onToggleCheckbox={postTitle}
         items={materialBracelets}
      />
   )
}
