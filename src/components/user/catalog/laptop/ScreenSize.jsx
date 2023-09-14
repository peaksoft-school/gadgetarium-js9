import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const ScreenSize = () => {
   const { screenSize } = useSelector((state) => state.category)

   const dispatch = useDispatch()

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
         items={screenSize}
      />
   )
}
