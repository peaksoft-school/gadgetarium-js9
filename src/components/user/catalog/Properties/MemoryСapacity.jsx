import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const MemoryСapacity = () => {
   const { memoryCapacity } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeMemory(id))
   }
   useEffect(() => {
      dispatch(categoryActions.memoryPhone())
   }, [memoryCapacity])

   return (
      <CatalogSelect
         title="Объем памяти (GB)"
         onToggleCheckbox={postTitle}
         items={memoryCapacity}
      />
   )
}
