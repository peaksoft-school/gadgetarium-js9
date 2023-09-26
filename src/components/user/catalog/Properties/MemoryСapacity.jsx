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
      (Object.values(category)[0] === 'Tablet' && memoryCapacity.slice(1, 7)) ||
      (Object.values(category)[0] === 'Phone' && memoryCapacity.slice(1, 8)) ||
      (Object.values(category)[0] === 'Smart Watch' &&
         memoryCapacity.slice(0, 4))

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
