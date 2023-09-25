import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Shapes = () => {
   const { shapes } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeShapes(id))
   }

   const transformShapes = {
      SQUARE: 'Квадратный',
      ROUND: 'Круглый',
      OVAL: 'Овальный',
      RECTANGULAR: 'Прямоугольный',
   }

   const update = shapes.map((el) => {
      return { ...el, title: transformShapes[el.title] }
   })

   useEffect(() => {
      dispatch(categoryActions.watchShapes())
   }, [shapes])

   return (
      <CatalogSelect
         title="Форма корпуса"
         onToggleCheckbox={postTitle}
         items={update}
      />
   )
}
