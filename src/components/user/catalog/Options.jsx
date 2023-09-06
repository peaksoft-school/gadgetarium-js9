import { styled } from '@mui/material'
import React from 'react'
import { Category } from './Properties/Category'
import { MemoryСapacity } from './Properties/MemoryСapacity'
import { Price } from './Properties/Price'

export const Options = () => {
   return (
      <Content>
         <Category />
         <Price />
         <MemoryСapacity />
      </Content>
   )
}

const Content = styled('div')`
   flex-shrink: 0;
   padding: 1.875rem;
   height: 139.4444vh;
   width: 18.28125vw;
   padding-right: 1.375rem;
   border-radius: 0.25rem 0rem 0rem 0.25rem;
`
