import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const RamMemory = () => {
   const { memoryRamArray } = useSelector((state) => state.category)
   console.log('memoryRamArray: ', memoryRamArray)

   const dispatch = useDispatch()

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
         items={memoryRamArray}
      />
   )
}
