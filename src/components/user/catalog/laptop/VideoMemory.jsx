import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const VideoMemory = memo(() => {
   const { videoMemory } = useSelector((state) => state.category)

   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.laptopChangeVideoMemory(id))
   }

   useEffect(() => {
      dispatch(categoryActions.laptopVideoMemory())
   }, [videoMemory])

   return (
      <CatalogSelect
         title="Объем видеопамяти (GB) "
         onToggleCheckbox={postTitle}
         items={videoMemory}
      />
   )
})
VideoMemory.displayName = 'VideoMemory'
