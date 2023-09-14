import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Puproses = () => {
   const { puproses } = useSelector((state) => state.category)

   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.laptopChangePuproses(id))
   }

   useEffect(() => {
      dispatch(categoryActions.laptopPuproses())
   }, [puproses])

   return (
      <CatalogSelect
         title="Назначение"
         onToggleCheckbox={postTitle}
         items={puproses}
      />
   )
}
