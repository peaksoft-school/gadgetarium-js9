import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Sim = () => {
   const { simPhone } = useSelector((state) => state.category)
   console.log('simPhoneArray: ', simPhone)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeSimPhone(id))
   }

   useEffect(() => {
      dispatch(categoryActions.simPhoneThunk())
   }, [simPhone])
   // simPhoneArray

   return (
      <CatalogSelect
         title="Кол-во SIM-карт"
         onToggleCheckbox={postTitle}
         items={simPhone}
      />
   )
}
