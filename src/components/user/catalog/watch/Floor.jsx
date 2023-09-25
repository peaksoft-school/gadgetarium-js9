import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Floor = () => {
   const { floor } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeFloor(id))
   }

   const transformFloor = {
      UNI: 'Унисекс',
      MALE: 'Мужской',
      FEMALE: 'Женский',
   }

   const update = floor.map((el) => {
      return { ...el, title: transformFloor[el.title] }
   })

   useEffect(() => {
      dispatch(categoryActions.watchFloor())
   }, [floor])

   return (
      <CatalogSelect title="Пол" onToggleCheckbox={postTitle} items={update} />
   )
}
