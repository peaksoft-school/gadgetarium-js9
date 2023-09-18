import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const WaterProof = () => {
   const { waterProof } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeWaterProof(id))
   }

   useEffect(() => {
      dispatch(categoryActions.watchWaterProof())
   }, [waterProof])

   return (
      <CatalogSelect
         title="Водонепроницаемые"
         onToggleCheckbox={postTitle}
         items={waterProof}
      />
   )
}
