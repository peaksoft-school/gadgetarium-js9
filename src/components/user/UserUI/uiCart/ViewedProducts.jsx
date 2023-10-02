import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { SecondProductCard } from './SecondProductCard'
import { getRecentlyViewedProduct } from '../../../../store/informationPhone/infoPageThunk'

export const ViewedProducts = () => {
   const dispatch = useDispatch()

   const productViewed = useSelector((state) => state.product.viewedProduct)

   const [currentPage, setCurrentPage] = useState(1)
   const itemsPerPage = 5

   useEffect(() => {
      dispatch(getRecentlyViewedProduct())
   }, [])

   const renderProductsOnPage = () => {
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      return productViewed
         .slice(startIndex, endIndex)
         .map((el) => <SecondProductCard key={el.subProductId} el={el} />)
   }

   const handlePageChange = (event, newPage) => {
      setCurrentPage(newPage)
   }

   return (
      <Container>
         <ViewedTitle>Просмотренные товары</ViewedTitle>
         {productViewed.length === 0 ? (
            ''
         ) : (
            <>
               <ProductCard>{renderProductsOnPage()}</ProductCard>
               <Pagination
                  count={Math.ceil(productViewed.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
               />
            </>
         )}
      </Container>
   )
}

const Container = styled('div')`
   width: 79.888vw;
   height: 41.69rem;
   .MuiPagination-ul {
      display: flex;
      width: 100%;
      margin-top: 2rem;
      justify-content: center;
   }
`
const ViewedTitle = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 1.875rem;
   font-weight: 500;
   margin-top: 7rem;
`

const ProductCard = styled('div')`
   display: flex;
   gap: 1rem;
`
