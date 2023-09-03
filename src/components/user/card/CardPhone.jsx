import { Skeleton, styled } from '@mui/material'
import React from 'react'

export const CardPhone = ({ ...props }) => {
   return (
      <Container {...props}>
         <div className="header">
            <SkeletonDiscount variant="circular" />

            <SkeletonNav variant="rounded" />
         </div>

         <div className="Image">
            <SkeletonImage variant="rounded" />
         </div>

         <SkeletonInStock variant="rectangular" />

         <SkeletonTitle variant="rounded" />

         <SkeletonRating variant="rectangular" />

         <SkeletonPrice variant="rounded" />
      </Container>
   )
}

const Container = styled('div')`
   width: 15.625vw;
   height: 45.84vh;
   padding: 10px 14px 20.5px 10px;
   .header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .Image {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 0.75rem;
   }
`

const SkeletonDiscount = styled(Skeleton)`
   width: 2.25rem;
   height: 2.25rem;
`
const SkeletonImage = styled(Skeleton)`
   width: 9.375vw;
   height: 21.853vh;
`
const SkeletonInStock = styled(Skeleton)`
   width: 4.636vw;
   height: 0.9375rem;
   margin-top: 1.75rem;
   margin-left: 10px;
`

const SkeletonNav = styled(Skeleton)`
   width: 3.3334vw;
   height: 2.223vh;
`
const SkeletonTitle = styled(Skeleton)`
   width: 13.542vw;
   height: 4.167vh;
   margin: 0.5rem 0 0.5rem 0.625rem;
`

const SkeletonRating = styled(Skeleton)`
   width: 6.25vw;
   height: 1.39vh;
   margin-left: 0.625rem;
`

const SkeletonPrice = styled(Skeleton)`
   width: 13.542vw;
   height: 4.167vh;
   margin-top: 1.03rem;
   margin-left: 0.625rem;
`
