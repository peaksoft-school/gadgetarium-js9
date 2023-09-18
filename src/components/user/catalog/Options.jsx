import { styled } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { categoryActions } from '../../../store/cataog/catalogSlice'
import { Category } from './Properties/Category'
import { Colors } from './Properties/Colors'
import { MemoryСapacity } from './Properties/MemoryСapacity'
import { Price } from './Properties/Price'
import { Sim } from './phone/Sim'
import { RamMemory } from './Properties/RamMemory'
import { Processor } from './laptop/Processor'
import { ScreenResolution } from './laptop/ScreenResolution'
import { Puproses } from './laptop/Puproses'
import { ScreenSize } from './laptop/ScreenSize'
import { Interfaces } from './watch/Interfaces'
import { MaterialBracelets } from './watch/MaterialBracelets'
import { MaterialHousing } from './watch/MaterialHousing'
import { WaterProof } from './watch/WaterProof'
import { Floor } from './watch/Floor'
import { DisplayDiagonal } from './watch/DisplayDiagonal'
import { Shapes } from './watch/Shapes'
import { VideoMemory } from './laptop/VideoMemory'
import { BatteryCapacity } from './tablet/BatteryCapacity'

export const Options = () => {
   const dispatch = useDispatch()
   const containerRef = useRef(null)

   useEffect(() => {
      const container = containerRef.current
      console.log('container: ', container)
      if (container) {
         const hasScrollbar = container.scrollHeight > container.clientHeight
         if (!hasScrollbar) {
            container.style.paddingRight = '2.1rem'
         } else {
            container.style.paddingRight = '1.6rem'
         }
      }
   }, [])
   const resetAllFilters = () => {
      dispatch(categoryActions.resetChecked())
   }

   const params = useParams()

   return (
      <Content>
         <div ref={containerRef} className="box-options">
            <ButtonStyled onClick={resetAllFilters}>
               Сбросить все фильтры
            </ButtonStyled>
            <Category />
            <Price />
            <Colors />

            {Object.values(params)[0] === 'Phone' ? (
               <div>
                  <Sim />
                  <MemoryСapacity />
                  <RamMemory />
               </div>
            ) : null}

            {Object.values(params)[0] === 'Tablet' ? (
               <div>
                  <BatteryCapacity />
                  <ScreenSize />
                  <MemoryСapacity />
                  <RamMemory />
               </div>
            ) : null}

            {Object.values(params)[0] === 'Laptop' ? (
               <div>
                  <Processor />
                  <ScreenResolution />
                  <Puproses />
                  <ScreenSize />
                  <VideoMemory />
                  <RamMemory />
               </div>
            ) : null}

            {Object.values(params)[0] === 'Smart Watch' ? (
               <div>
                  <Interfaces />
                  <MaterialBracelets />
                  <MaterialHousing />
                  <WaterProof />
                  <Floor />
                  <Shapes />
                  <DisplayDiagonal />
               </div>
            ) : null}
         </div>
      </Content>
   )
}

const Content = styled('div')`
   flex-shrink: 0;
   padding: 1.875rem;
   padding-top: 0;
   width: 18.28125vw;
   padding-right: 1.6rem;
   border-radius: 0.25rem 0rem 0rem 0.25rem;
   background-color: #ffffff;
   position: relative;

   height: 76vw;

   .box-options {
      max-height: 74vw;
      overflow-y: auto;

      position: absolute;
      right: -0.5rem;
      padding-right: 1.6rem;
      top: 0;

      &::-webkit-scrollbar {
         width: 0.5rem;
      }

      &::-webkit-scrollbar-thumb {
         background-color: #91969e7f;
         border-radius: 0.25rem;
      }

      &::-webkit-scrollbar-track {
         height: 20px;
         background-color: #e8e8e8;
         border-radius: 0.25rem;
      }
   }
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
   margin-top: 1.875rem;
`
