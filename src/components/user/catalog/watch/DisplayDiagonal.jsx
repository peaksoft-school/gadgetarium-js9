import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const DisplayDiagonal = () => {
   const { displayDiagonal } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeDisplayDiagonal(id))
   }

   useEffect(() => {
      dispatch(categoryActions.watchDisplayDiagonal())
   }, [displayDiagonal])

   return (
      <CatalogSelect
         title="Диагональ дисплея (дюйм)"
         onToggleCheckbox={postTitle}
         items={displayDiagonal}
      />
   )
}
