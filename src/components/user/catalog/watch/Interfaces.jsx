import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Interfaces = () => {
   const { interfaces } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeInterfaces(id))
   }

   useEffect(() => {
      dispatch(categoryActions.watchInterfaces())
   }, [interfaces])

   return (
      <CatalogSelect
         title="Беспроводные интерфейсы"
         onToggleCheckbox={postTitle}
         items={interfaces}
      />
   )
}
