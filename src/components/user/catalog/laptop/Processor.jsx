import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { CatalogSelect } from '../../../UI/CatalogSelect'
import { dataProductNotebooks } from '../../../../utils/common/constants/constantsAdminAddNewProduct'

export const Processor = memo(() => {
   const { processor } = useSelector((state) => state.category)

   const dispatch = useDispatch()

   const postTitle = (id) => {
      dispatch(categoryActions.laptopChangeProcessor(id))
   }

   useEffect(() => {
      dispatch(categoryActions.laptopProcessor())
   }, [processor])
   const update = processor.map((el) => {
      const updatedEl = dataProductNotebooks.processorNotebooks.find(
         (item) => item.id === el.title
      )
      return { ...el, title: updatedEl?.name }
   })
   console.log('update: ', update)
   return (
      <CatalogSelect
         title="Процессор ноутбука"
         onToggleCheckbox={postTitle}
         items={update}
      />
   )
})
Processor.displayName = 'Processor'
