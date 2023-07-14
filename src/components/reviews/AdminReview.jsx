import { styled } from '@mui/material'
import React from 'react'

const AdminReview = () => {
   return (
      <AdminReviewContainer>
         <ModelReviewContainer>
            <ModelContainer>
               <div
                  style={{
                     width: '56px',
                     height: '62px',
                     background: '#cdcdcd',
                  }}
               />
            </ModelContainer>
            <UserReviewContainer></UserReviewContainer>
         </ModelReviewContainer>
         <InfoAboutUserContainer></InfoAboutUserContainer>
      </AdminReviewContainer>
   )
}

export default AdminReview
const AdminReviewContainer = styled('div')``
const ModelReviewContainer = styled('div')``
const ModelContainer = styled('div')``
const UserReviewContainer = styled('div')``
const InfoAboutUserContainer = styled('div')``
