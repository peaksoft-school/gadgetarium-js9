import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const ScreenResolution = memo(() => {
   const { screen } = useSelector((state) => state.category)

   const dispatch = useDispatch()

   const category = useParams()

   const updatedRamArray =
      Object.values(category)[0] === 'Tablet' ? screen.slice(3, 9) : screen

   const postTitle = (id) => {
      dispatch(categoryActions.laptopChangeScreen(id))
   }

   useEffect(() => {
      dispatch(categoryActions.laptopScreen())
   }, [screen])

   return (
      <CatalogSelect
         title="Разрешение экрана"
         onToggleCheckbox={postTitle}
         items={updatedRamArray}
      />
   )
})
ScreenResolution.displayName = 'ScreenResolution'
