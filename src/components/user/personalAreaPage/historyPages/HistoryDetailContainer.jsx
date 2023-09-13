import React from 'react'
import { styled } from '@mui/material'
import { HistoryDetail } from './HistoryDetail'

export const HistoryDetailContainer = () => {
   return (
      <Container>
         <HistoryDetail />
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
`
