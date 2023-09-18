import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const MemoryСapacity = () => {
   const category = useParams()

   const { memoryCapacity } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const updatedRamArray =
      Object.values(category)[0] === 'Tablet'
         ? memoryCapacity.slice(0, 6)
         : memoryCapacity

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
         items={updatedRamArray}
      />
   )
}
