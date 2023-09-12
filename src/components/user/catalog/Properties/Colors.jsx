import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getColorsCatalog } from '../../../../store/cataog/categoryThunk'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Colors = () => {
   const { itemsColors } = useSelector((state) => state.category)
   console.log('itemsColors: ', itemsColors)

   const dispatch = useDispatch()

   // const ItemsColors = itemsColors.map((el) => {
   //    return {
   //       id: el.id,
   //       title:el.
   //    }
   // })

   const postTitle = (id) => {
      dispatch(categoryActions.changeMemoryRam(id))
   }

   useEffect(() => {
      dispatch(getColorsCatalog({ categoryId: 1 }))
   }, [])

   return (
      <CatalogSelect
         title="Цвет"
         onToggleCheckbox={postTitle}
         items={itemsColors}
      />
   )
}
