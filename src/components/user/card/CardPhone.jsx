import { Skeleton, styled } from '@mui/material'
import React from 'react'

export const CardPhone = () => {
   return (
      <Container>
         <div className="header">
            <Skeleton
               variant="circular"
               sx={{
                  width: '3rem',
                  height: '2.5rem',
                  marginLeft: '-0.625rem',
               }}
            />

            <Skeleton
               variant="rounded"
               sx={{ width: '4rem', height: '1.5rem' }}
            />
         </div>

         <div className="ImageParent">
            <Skeleton
               variant="rounded"
               sx={{ width: '11.25rem', height: '14.75rem' }}
            />
         </div>

         <Skeleton
            sx={{ width: '40%', height: '0.9375rem', marginTop: '1.75rem' }}
         />
         <Skeleton
            variant="rounded"
            sx={{ height: '2.8rem', margin: '0.5rem 0 0.5rem 0' }}
         />
         <Skeleton sx={{ width: '40%', height: '0.9375rem' }} />
         <Skeleton sx={{ height: '2.8rem' }} />
      </Container>
   )
}

const Container = styled('div')`
   width: 18.75rem;
   height: 30.9375rem;
   padding: 1.25rem;

   .header {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 11.12rem;
   }

   .ImageParent {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 0.75rem;
   }
`
