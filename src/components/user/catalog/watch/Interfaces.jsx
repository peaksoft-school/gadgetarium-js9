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

   const transformInterfaces = {
      BLUETOOTH: 'Bluetooth',
      WIFI: 'Wi-Fi',
      GPS: 'GPS',
      NFC: 'NFC',
   }

   const update = interfaces.map((el) => {
      return { ...el, title: transformInterfaces[el.title] }
   })

   useEffect(() => {
      dispatch(categoryActions.watchInterfaces())
   }, [interfaces])

   return (
      <CatalogSelect
         title="Беспроводные интерфейсы"
         onToggleCheckbox={postTitle}
         items={update}
      />
   )
}
