import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const ScreenSize = memo(() => {
   const category = useParams()

   const { screenSize } = useSelector((state) => state.category)

   const dispatch = useDispatch()

   const updatedRamArray =
      Object.values(category)[0] === 'Tablet'
         ? screenSize.slice(2, 8)
         : screenSize

   const postTitle = (id) => {
      dispatch(categoryActions.laptopChangeScreenSize(id))
   }

   useEffect(() => {
      dispatch(categoryActions.laptopScreenSize())
   }, [screenSize])

   return (
      <CatalogSelect
         title="Размер экрана (дюйм)"
         onToggleCheckbox={postTitle}
         items={updatedRamArray}
      />
   )
})
ScreenSize.displayName = 'ScreenSize'
