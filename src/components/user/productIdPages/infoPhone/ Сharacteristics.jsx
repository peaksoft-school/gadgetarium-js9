import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'

export const Сharacteristics = () => {
   const { screenResolution, rom, category } = useSelector(
      (state) => state.phone.infoPhone
   )
   return (
      <div>
         <strong>Коротко о товаре:</strong>

         {category === 'Smart Watch' ? (
            <Product>
               <Key>
                  <p>ПЗУ..............................................</p>
                  <p>Дата выпуска..............................</p>
                  <p>Операционная система............</p>
                  <p>Память.........................................</p>
               </Key>
               <Value>
                  <p>{rom}</p>
                  <p>Март 2022</p>
                  <p>Android 12</p>
                  <p>128GB</p>
               </Value>
            </Product>
         ) : (
            ''
         )}

         {category === 'Laptop' ? (
            <Product>
               <Key>
                  <p>Экран............................................</p>
                  <p>ПЗУ..............................................</p>
                  <p>Дата выпуска..............................</p>
                  <p>Операционная система............</p>
                  <p>Память.........................................</p>
               </Key>
               <Value>
                  <p>{screenResolution}</p>
                  <p>{rom}</p>
                  <p>Март 2022</p>
                  <p>Android 12</p>
                  <p>128GB</p>
               </Value>
            </Product>
         ) : (
            ''
         )}

         {category === 'Phone' ? (
            <Product>
               <Key>
                  <p>Экран............................................</p>
                  <p>ПЗУ..............................................</p>
                  <p>Дата выпуска..............................</p>
                  <p>Операционная система............</p>
                  <p>Память.........................................</p>
               </Key>
               <Value>
                  <p>{screenResolution}</p>
                  <p>{rom}</p>
                  <p>Март 2022</p>
                  <p>Android 12</p>
                  <p>128GB</p>
               </Value>
            </Product>
         ) : (
            ''
         )}
      </div>
   )
}
const Product = styled('div')`
   display: flex;
   margin-top: 0.5rem;
`
const Key = styled('div')`
   color: #91969e;
   font-size: 1rem;
`
const Value = styled('div')`
   color: #292929;
   font-size: 1rem;
`
