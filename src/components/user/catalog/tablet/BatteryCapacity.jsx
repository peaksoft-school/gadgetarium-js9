import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const BatteryCapacity = memo(() => {
   const { tabletBattery } = useSelector((state) => state.category)

   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeBattery(id))
   }

   useEffect(() => {
      dispatch(categoryActions.tabletBattery())
   }, [tabletBattery])

   return (
      <CatalogSelect
         title="Емкость аккумулятора планшета, мА/ч"
         onToggleCheckbox={postTitle}
         items={tabletBattery}
      />
   )
})
