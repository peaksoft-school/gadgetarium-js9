import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import { StageOfEditProduct } from './StageOfEditProduct'
import { EditProductPartOne } from './part-1/EditProductPartOne'
import {
   getAllCategory,
   getBrandAll,
   getProductToEdit,
} from '../../../../store/edit.product/edit.product.thunk'
import { Loading } from '../../../UI/loading/Loading'
import { EditProductPartTwo } from './part-2/EditProductPartTwo'
import { EditProductPartThree } from './part-3/EditProductPartThree'
import { BreadCrumbs } from '../../../UI/breadCrumbs/BreadCrumbs'

export const EditProduct = () => {
   const { subProductId } = useParams()
   const { isLoading } = useSelector((state) => state.editProduct)
   const [breadcrumbs, setBreadCrumbs] = useState([
      { path: '/admin/goods', label: 'Товары' },

      { label: 'Редактирование товара' },
   ])
   const [part, setPart] = useState(1)
   const changePartPlus = () => {
      setPart(part + 1)
   }
   const changePartMinus = () => {
      setPart(part - 1)
   }
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllCategory())
      dispatch(getBrandAll())
   }, [])
   useEffect(() => {
      if (part === 1) {
         setBreadCrumbs([
            { path: '/admin', label: 'Товары' },

            { label: 'Редактирование товара' },
         ])
      }
      if (part === 2) {
         setBreadCrumbs([
            { path: '/admin', label: 'Товары' },

            { label: 'Установка цены и количества' },
         ])
      }
      if (part === 3) {
         setBreadCrumbs([
            { path: '/admin', label: 'Товары' },

            { label: 'Описание и обзор' },
         ])
      }
   }, [part])
   useEffect(() => {
      dispatch(getProductToEdit(subProductId))
   }, [subProductId])
   return (
      <>
         {isLoading && <Loading />}
         <Container>
            <WidthContainer>
               <BreadCrumbs breadcrumbs={breadcrumbs} />
               <StageOfEditProduct pathNumber={part} />
               {part === 1 && (
                  <EditProductPartOne changePart={changePartPlus} />
               )}
               {part === 2 && (
                  <EditProductPartTwo
                     changePartPlus={changePartPlus}
                     changePartMinus={changePartMinus}
                  />
               )}
               {part === 3 && (
                  <EditProductPartThree changePart={changePartPlus} />
               )}
            </WidthContainer>
         </Container>
      </>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: center;
`
const WidthContainer = styled('div')`
   width: 89.583vw;
`
