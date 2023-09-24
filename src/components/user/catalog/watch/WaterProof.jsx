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

   const transformWaterProof = {
      TRUE: 'Да',
      FALSE: 'Нет',
   }

   const update = waterProof.map((el) => {
      return { ...el, title: transformWaterProof[el.title] }
   })

   useEffect(() => {
      dispatch(categoryActions.waterProof())
   }, [waterProof])

   return (
      <CatalogSelect
         title="Водонепроницаемые"
         onToggleCheckbox={postTitle}
         items={update}
      />
   )
}
