import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Sim = () => {
   const dispatch = useDispatch()
   const { simPhoneArray } = useSelector((state) => state.category)

   const postTitle = (id) => {
      dispatch(categoryActions.changeSimPhone(id))
   }

   useEffect(() => {
      dispatch(categoryActions.simPhoneThunk())
   }, [])
   // simPhoneArray

   return (
      <CatalogSelect
         title="Кол-во SIM-карт"
         onToggleCheckbox={postTitle}
         items={simPhoneArray}
      />
   )
}
