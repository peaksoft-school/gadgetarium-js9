import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { EditSelect } from './EditSelect'
import { categoryProduct } from '../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { editActions } from '../../../../../store/edit.product/edit.product.slice'
import { BrandSelect } from './BrandSelect'
import { EditInput } from './EditInput'

export const FirstSelectContainer = () => {
   const { product } = useSelector((state) => state.editProduct)
   const dispatch = useDispatch()
   const getCategoryId = (value) => {
      dispatch(editActions.getCategoryId(value))
   }
   console.log(product)
   const subcategorySelectOne =
      product.categoryId === 1
         ? categoryProduct.subcategorySmartphones
         : categoryProduct.subcategorySmartWatch

   const subcategorySelect =
      product.categoryId === 3
         ? categoryProduct.subcategoryNotebooks
         : subcategorySelectOne
   return (
      <Container>
         <EditSelect
            value=""
            onChange={getCategoryId}
            label="Выберите категорию"
            array={categoryProduct.category}
         />
         {product.categoryId !== 0 && (
            <>
               <EditSelect
                  value=""
                  onChange={(value) =>
                     dispatch(editActions.getSubCategoryId(value))
                  }
                  label="Выберите подкатегорию"
                  array={
                     product.categoryId === 4
                        ? categoryProduct.subcategoryTablets
                        : subcategorySelect
                  }
               />
               <BrandSelect
                  value=""
                  onChange={(value) => dispatch(editActions.getBrandId(value))}
                  label="Бренд"
                  array={categoryProduct.brand}
               />
               <EditInput
                  handleChange={(e) =>
                     dispatch(editActions.getGuarantee(e.target.value))
                  }
                  value={product.guarantee}
                  type="number"
                  label="Гарантия месяцев"
               />
               <EditInput
                  handleChange={(e) =>
                     dispatch(editActions.getProductName(e.target.value))
                  }
                  value={product.name}
                  type="text"
                  label="Название товара"
               />
            </>
         )}
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 16px;
   width: 812px;
`
