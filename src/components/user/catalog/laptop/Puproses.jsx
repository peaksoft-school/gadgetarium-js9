import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const Puproses = memo(() => {
   const { puproses } = useSelector((state) => state.category)

   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.laptopChangePuproses(id))
   }

   useEffect(() => {
      dispatch(categoryActions.laptopPuproses())
   }, [puproses])

   const transformPeproses = {
      FOR_WORK: 'Для работы',
      MULTIMEDIA: 'Мультимедийный',
      GAMING: 'Игровой',
      FOR_BUSINESS: 'Для бизнеса',
      FOR_LEARNING: 'Для учебы',
      OFFICE: 'Офисный',
   }

   const update = puproses.map((el) => {
      return { ...el, title: transformPeproses[el.title] }
   })

   return (
      <CatalogSelect
         title="Назначение"
         onToggleCheckbox={postTitle}
         items={update}
      />
   )
})

Puproses.displayName = 'Puproses'
