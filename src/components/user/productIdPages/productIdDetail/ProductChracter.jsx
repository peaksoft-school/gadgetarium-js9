import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { format } from 'date-fns'

const formatDate = (dateString) => {
   const date = new Date(dateString)
   return format(date, 'yyyy-MM-dd')
}

export const ProductChracteristics = () => {
   const { screenResolution, rom, category, dataOfIssue, brandName, name } =
      useSelector((state) => state.product.infoPhone)

   return (
      <>
         <strong>Коротко о товаре:</strong>
         {category === 'Smart Watch' ? (
            <Product>
               <Key>
                  <p>Бренд:</p>
                  <p>Название</p>
                  <p>ОЗУ:</p>
                  <p>Дата выпуска:</p>
               </Key>
               <Value>
                  <p>{brandName}</p>
                  <p>{name}</p>
                  <p>{rom}</p>
                  <p>{formatDate(dataOfIssue)}</p>
               </Value>
            </Product>
         ) : (
            ''
         )}
         {category === 'Laptop' ? (
            <Product>
               <Key>
                  <p>Бренд:</p>
                  <p>Название:</p>
                  <p>Экран:</p>
                  <p>ОЗУ:</p>
                  <p>Дата выпуска:</p>
               </Key>

               <Value>
                  <p>{brandName}</p>
                  <p>{name}</p>
                  <p>
                     {screenResolution === null
                        ? ' 13-, 14- и 16-дюймовый экран.'
                        : screenResolution}
                  </p>
                  <p>{rom}</p>
                  <p>{formatDate(dataOfIssue)}</p>
               </Value>
            </Product>
         ) : (
            ''
         )}
         {category === 'Phone' ? (
            <Product>
               <Key>
                  <p>Бренд:</p>
                  <p>Название:</p>
                  <p>Экран:</p>
                  <p>ОЗУ:</p>
                  <p>Дата выпуска:</p>
               </Key>

               <Value>
                  <p>{brandName}</p>
                  <p>{name}</p>
                  <p>
                     {screenResolution === null
                        ? '2532 × 1170'
                        : screenResolution}
                  </p>
                  <p>{rom}</p>
                  <p>{formatDate(dataOfIssue)}</p>
               </Value>
            </Product>
         ) : (
            ''
         )}

         {category === 'Tablet' ? (
            <Product>
               <Key>
                  <p>Бренд:</p>
                  <p>Название:</p>
                  <p>Экран:</p>
                  <p>ОЗУ:</p>
                  <p>Дата выпуска:</p>
               </Key>

               <Value>
                  <p>{brandName}</p>
                  <p>{name}</p>
                  <p>
                     {screenResolution === null
                        ? '2532 × 1170'
                        : screenResolution}
                  </p>
                  <p>{rom}</p>
                  <p>{formatDate(dataOfIssue)}</p>
               </Value>
            </Product>
         ) : (
            ''
         )}
      </>
   )
}

const Product = styled('div')`
   display: flex;
   width: 100%;
   justify-content: space-between;
   margin-top: 0.5rem;
`
const Key = styled('div')`
   width: 100%;
   color: #91969e;
   font-size: 1rem;
`
const Value = styled('div')`
   width: 200%;
   color: #292929;
   font-size: 1rem;
`
