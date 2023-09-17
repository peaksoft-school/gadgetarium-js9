import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { format } from 'date-fns'

const formatDate = (dateString) => {
   const date = new Date(dateString)
   return format(date, 'yyyy-MM-dd')
}

export const Сharacteristics = () => {
   const { screenResolution, rom, category, dataOfIssue, brandName, name } =
      useSelector((state) => state.product.infoPhone)

   return (
      <div>
         <strong>Коротко о товаре:</strong>
         {category === 'Smart watch' ? (
            <Product>
               <Key>
                  <p>ПЗУ</p>
                  <p>Дата выпуска</p>
               </Key>
               <Value>
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
                  <p>Экран</p>
                  <p>ПЗУ</p>
                  <p>Дата выпуска</p>
               </Key>
               <Value>
                  <p>
                     <p>{brandName}</p>
                     <p>{name}</p>
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
                  <p>Экран</p>
                  <p>ПЗУ</p>
                  <p>Дата выпуска</p>
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
      </div>
   )
}
const Product = styled('div')`
   display: flex;
   width: 80%;
   justify-content: space-between;
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
