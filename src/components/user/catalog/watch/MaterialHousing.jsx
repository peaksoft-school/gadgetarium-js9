import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'

export const MaterialHousing = () => {
   const { materialHousing } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.changeMaterialHousing(id))
   }

   const transformMaterialHousing = {
      ACRYLIC: 'Акриловый',
      ALUMINIUM: 'Алюминий',
      CERAMIC: 'Керамика',
      PLASTIC: 'Пластик',
      METAL: 'Метал',
      STAINLESS_STEEL: 'Нержавеющая сталь',
      GLASS: 'Стекло',
   }

   const update = materialHousing.map((el) => {
      return { ...el, title: transformMaterialHousing[el.title] }
   })

   useEffect(() => {
      dispatch(categoryActions.watchMaterialHousing())
   }, [materialHousing])

   return (
      <CatalogSelect
         title="Материал корпуса"
         onToggleCheckbox={postTitle}
         items={update}
      />
   )
}
