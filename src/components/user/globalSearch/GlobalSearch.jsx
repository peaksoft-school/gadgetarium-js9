import { styled } from '@mui/material'
import { useSelector } from 'react-redux'

export const GlobalSearch = () => {
   const globalSearch = useSelector((state) => state.globalSearch.globalSearch)
   if (
      globalSearch.brandList.length +
         globalSearch.categoryList.length +
         globalSearch.subProductResponses.length ===
      0
   ) {
      return null
   }

   return (
      <Container
         length={
            globalSearch.brandList.length +
            globalSearch.categoryList.length +
            globalSearch.subProductResponses.length
         }
      >
         {globalSearch.brandList?.map((el) => {
            return <GlobalSearchItem key={el.id}>{el.name}</GlobalSearchItem>
         })}
         {globalSearch.categoryList?.map((el) => {
            return (
               <GlobalSearchItem key={el.categoryId}>
                  {el.title}
               </GlobalSearchItem>
            )
         })}
         {globalSearch.subProductResponses?.map((el) => {
            return (
               <GlobalSearchItem key={el.subProductId}>
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
