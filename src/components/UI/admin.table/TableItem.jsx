import { TableCell, TableRow, styled } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as EditIcon } from '../../../assets/icons/tools-for-site/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import CheckboxInput from '../icon.input/CheckboxInput'
import { themes } from '../../../utils/common/styles/themes'

const TableItem = () => {
   const productPrice = 50000
   const purchaseTime = '05:05:2222 12:10'
   const discount = 30
   const time = purchaseTime.split(' ')[1]
   const date = purchaseTime.split(' ')[0]
   const discountAmount = (productPrice * discount) / 100
   const finalPrice = productPrice - discountAmount
   const [isHovered, setIsHovered] = useState(false)
   const toggleHoveredHandler = () => {
      setIsHovered((prev) => !prev)
   }
   return (
      <StyledTableRow
         isHovered={isHovered}
         sx={{ marginTop: '10px' }}
         onMouseEnter={toggleHoveredHandler}
      >
         <StyledTableCell
            align="left"
            sx={{
               width: '66px',
               paddingLeft: isHovered ? '5px' : '20px',
               display: 'flex',
               alignItems: 'flex-start',
               marginTop: isHovered ? '17px' : '18px',
            }}
         >
            {isHovered ? <CheckboxInput bgColor="black" /> : '1'}
         </StyledTableCell>
         <StyledTableCell sx={{ width: 106, marginTop: '5px' }}>
            <Photo />
         </StyledTableCell>
         <StyledTableCell sx={{ width: 139, marginTop: '18px' }}>
            154665884
         </StyledTableCell>
         <StyledTableCell
            sx={{
               width: 240,
               marginTop: '18px',
            }}
         >
            Кол-во товара 105шт.
            <ModelName>Samsung Galaxy S21...</ModelName>
         </StyledTableCell>
         <StyledTableCell sx={{ width: 174, marginTop: '18px' }}>
            {date}
            <Time>{time}</Time>
         </StyledTableCell>
         <StyledTableCell sx={{ width: 145, marginTop: '18px' }}>
            105
         </StyledTableCell>
         <StyledTableCell
            sx={{
               width: 158,
               marginTop: '18px',
               color: '#2C68F5',
            }}
         >
            {productPrice.toLocaleString()}с
            <PersentDiscount>{discount}%</PersentDiscount>
         </StyledTableCell>
         <StyledTableCell
            sx={{ width: 182, marginTop: '18px', color: '#2C68F5' }}
         >
            {finalPrice.toLocaleString()}с
         </StyledTableCell>
         <StyledTableCell sx={{ width: 95, marginTop: '18px' }}>
            <StyledEditIcon />
            <StyledDeleteIcon />
         </StyledTableCell>
      </StyledTableRow>
   )
}

export default TableItem

const StyledTableRow = styled(TableRow)(({ isHovered }) => ({
   width: '81.5625rem',
   height: '4.75rem',
   background: isHovered ? themes.palette.secondary.main : 'none',
   borderRadius: '0.375rem',
   transition: 'background 0.3s',
   border: `1px solid ${themes.palette.secondary.main}`,
   boxSizing: 'border-box',
   display: 'flex',
   alignItems: 'flex-start',
}))

const StyledTableCell = styled(TableCell)(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 500,
   lineHeight: 'normal',
   borderBottom: 'none',
   letterSpacing: '0.0625rem',
   padding: 0,
   flex: '1 1 auto',
   minWidth: 0,
   maxWidth: 'none',
}))
const Photo = styled('div')`
   width: 4rem;
   height: 4rem;
   background-color: rgba(56, 58, 83, 0.9);
`
const PersentDiscount = styled('p')`
   color: #f10000;
   margin: 0;
   margin-top: 0.125rem;
`
const ModelName = styled('p')`
   color: #909cb5;
   font-family: Inter;
   font-size: 0.8125rem;
   font-style: normal;
   font-weight: 400;
   margin: 0;
   margin-top: 0.125rem;
   line-height: normal;
`
const Time = styled('p')`
   color: #909cb5;
   margin: 0;
   margin-top: 0.125rem;
`
const StyledDeleteIcon = styled(DeleteIcon)`
   cursor: pointer;
   margin-left: 1.25rem;
   :hover {
      path {
         fill: #f10000;
      }
   }
`
const StyledEditIcon = styled(EditIcon)`
   cursor: pointer;
   :hover {
      path {
         fill: black;
      }
   }
`
