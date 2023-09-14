import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Processor = () => {
   const { processor } = useSelector((state) => state.category)

   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.laptopChangeProcessor(id))
   }

   useEffect(() => {
      dispatch(categoryActions.laptopProcessor())
   }, [processor])

   return (
      <CatalogSelect
         title="Процессор ноутбука"
         onToggleCheckbox={postTitle}
         items={processor}
      />
   )
}
