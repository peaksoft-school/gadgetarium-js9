import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const ScreenResolution = memo(() => {
   const { screen } = useSelector((state) => state.category)

   const dispatch = useDispatch()

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
         items={screen}
      />
   )
})
ScreenResolution.displayName = 'ScreenResolution'
