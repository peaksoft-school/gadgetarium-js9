import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { categoryActions } from '../../../store/cataog/catalogSlice'
import { infoPageActions } from '../../../store/informationPhone/infoPageSlice'

export const GlobalSearch = ({ toggleInputFocused }) => {
   const globalSearch = useSelector((state) => state.globalSearch.globalSearch)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const brandHandler = (category) => {
      navigate('/category/Phone')
      dispatch(categoryActions.addSelectedCategoriesTrue(category))
      dispatch(categoryActions.itemsCheckedHandler(category.id))
      dispatch(categoryActions.addBrandsId())
      toggleInputFocused(false)
   }

   const categoryHandler = (value) => {
      navigate(`/category/${value}`)
      dispatch(categoryActions.resetAll())
      toggleInputFocused(false)
   }

   const subProductHandler = (value, color) => {
      navigate(`/product/${value}/details`)
      dispatch(infoPageActions.changeSubProductColor(color))
      toggleInputFocused(false)
   }

   const length =
      globalSearch.brandList.length +
      globalSearch.categoryList.length +
      globalSearch.subProductResponses.length
   if (
      globalSearch.brandList.length +
         globalSearch.categoryList.length +
         globalSearch.subProductResponses.length ===
      0
   ) {
      return null
   }
   return (
      <Container length={length}>
         {globalSearch.brandList?.map((el) => {
            return (
               <GlobalSearchItem onClick={() => brandHandler(el)} key={el.id}>
                  {el.name}
               </GlobalSearchItem>
            )
         })}
         {globalSearch.categoryList?.map((el) => {
            return (
               <GlobalSearchItem
                  onClick={() => categoryHandler(el.title)}
                  key={el.categoryId}
               >
                  {el.title}
               </GlobalSearchItem>
            )
         })}
         {globalSearch.subProductResponses?.map((el) => {
            return (
               <GlobalSearchItem
                  onClick={() => subProductHandler(el.productId, el.color)}
                  key={el.productId}
               >
                  <ImageTitleContainer>
                     <Image src={el.image} />
                     {el.name}
                  </ImageTitleContainer>
                  <Price>
                     {el.price.toLocaleString()} <span>с</span>
                  </Price>
               </GlobalSearchItem>
            )
         })}
      </Container>
   )
}
const Container = styled('div')`
   width: 39.7vw;
   padding: 12px 18px;
   height: ${(props) => {
      if (props.length > 7) {
         return '292px'
      }
      return 'auto'
   }};
   overflow-y: ${(props) => {
      if (props.length > 7) {
         return 'scroll'
      }
      return 'none'
   }};
   ::-webkit-scrollbar {
      width: 1px;
   }
   display: flex;
   flex-direction: column;
   gap: 16px;
   position: absolute;
   top: 48px;
   background: white;
   border-radius: 4px;
`
const ImageTitleContainer = styled('div')`
   display: flex;
   gap: 8px;
   align-items: center;
`
const GlobalSearchItem = styled('div')`
   height: 19px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: #292929 !important;
   font-family: Inter;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   margin: 0;
   cursor: pointer;

   :hover {
      color: #cb11ab !important;

      p {
         color: #cb11ab !important;
         span {
            border-bottom: 1.6px solid #cb11ab;
         }
      }
   }
`
const Image = styled('img')`
   width: 19px;
   height: 100%;
`
const Price = styled('p')`
   font-weight: 600;
   font-size: 14px;
   color: #292929 !important;
   span {
      border-bottom: 1.6px solid #292929;
   }
`
