import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const RamMemory = () => {
   const category = useParams()

   const { memoryRamArray } = useSelector((state) => state.category)

   const dispatch = useDispatch()

   const updatedRamArray =
      Object.values(category)[0] === 'Phone' ||
      Object.values(category)[0] === 'Tablet'
         ? memoryRamArray.slice(0, 5)
         : memoryRamArray

   const postTitle = (id) => {
      dispatch(categoryActions.changeMemoryRam(id))
   }

   useEffect(() => {
      dispatch(categoryActions.memoryRam())
   }, [memoryRamArray])

   return (
      <CatalogSelect
         title="Объем оперативной памяти (GB)"
         onToggleCheckbox={postTitle}
         items={updatedRamArray}
      />
   )
}
