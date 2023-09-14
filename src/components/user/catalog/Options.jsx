import { styled } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { categoryActions } from '../../../store/cataog/catalogSlice'
import { Category } from './Properties/Category'
import { Colors } from './Properties/Colors'
import { MemoryСapacity } from './Properties/MemoryСapacity'
import { Price } from './Properties/Price'
import { Sim } from './Properties/Sim'
import { RamMemory } from './Properties/RamMemory'
import { Processor } from './laptop/Processor'
import { ScreenResolution } from './laptop/ScreenResolution'
import { Puproses } from './laptop/Puproses'
import { ScreenSize } from './laptop/ScreenSize'

export const Options = () => {
   const dispatch = useDispatch()
   const resetAllFilters = () => {
      dispatch(categoryActions.resetChecked())
   }
   const params = useParams()
   return (
      <Content>
         <ButtonStyled onClick={resetAllFilters}>
            Сбросить все фильтры
         </ButtonStyled>
         <Category />
         <Price />
         <Colors />

         {Object.values(params)[0] === 'Phone' ? <Sim /> : null}

         {Object.values(params)[0] === 'Laptop' ? (
            <div>
               <Processor />
               <ScreenResolution />
               <Puproses />
               <ScreenSize />
            </div>
         ) : null}

         <MemoryСapacity />
         <RamMemory />
      </Content>
   )
}

const Content = styled('div')`
   flex-shrink: 0;
   padding: 1.875rem;
   height: auto;
   width: 18.28125vw;
   padding-right: 1.375rem;
   scroll-snap-align: auto;
   border-radius: 0.25rem 0rem 0rem 0.25rem;
`

const ButtonStyled = styled('button')`
   margin: 0;
   padding: 0;
   width: 100%;
   border: none;
   font-size: 16px;
   background: none;
   font-weight: 500;
   font-family: Inter;
   text-align: left;
   color: #2c68f5;
   line-height: 140%;
   font-style: normal;
   text-transform: none;
   margin-bottom: 1.25rem;
   padding-bottom: 1.25rem;
   border-bottom: 1px solid #e8e8e8;
   cursor: pointer;
`
