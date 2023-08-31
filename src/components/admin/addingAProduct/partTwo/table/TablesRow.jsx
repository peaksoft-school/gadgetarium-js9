import { TableCell, TableRow, styled } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { InputUi } from '../../../../UI/Input'
import {
   addAndEditPrice,
   addAndEditQuantity,
} from '../../../../../store/addProduct/addProductPartOne.slice'

const schema = Yup.object().shape({
   price: Yup.number().required('Обязательное поле'),
   quantity: Yup.number().required('Обязательное поле'),
})

export const TablesRow = ({
   collectorRowsDataHandler,
   rows,
   row,
   onChangeBooleanValueQuantity,
   onChangeBooleanValuePrice,
   changeBooleanValue,
}) => {
   const dispatch = useDispatch()
   const { values, handleChange, setFieldValue } = useFormik({
      initialValues: {
         price: row.price,
         quantity: row.quantity,
      },

      validateOnBlur: true,
      validationSchema: schema,
   })

   useEffect(() => {
      const dataRow = {
         ...row,
         category: rows.category,
      }

      collectorRowsDataHandler(dataRow)
   }, [])

   useEffect(() => {
      if (changeBooleanValue === true) {
         setFieldValue('price', row.price)
      }

      setFieldValue('quantity', row.quantity)
   }, [row, changeBooleanValue])

   const onAddAndEditPriceHandler = () => {
      dispatch(addAndEditPrice({ id: row.id, price: values.price }))
   }

   const onAddAndEditQuantityHandler = () => {
      dispatch(addAndEditQuantity({ id: row.id, quantity: values.quantity }))
   }

   return (
      <TableRowStyle hover role="checkbox" tabIndex={-1} key={row.id}>
         <TableCellStyle width="5.4vw" sx={{ paddingLeft: '1.25rem' }}>
            {rows.brand}
         </TableCellStyle>
         <TableCellStyle width="8vw">{row.codeColor}</TableCellStyle>
         {row.rom && <TableCellStyle width="10vw">{row.rom}ГБ</TableCellStyle>}
         {rows.category !== 'Планшеты' && row.screenSize && (
            <TableCellStyle width="10vw">{row.screenSize}</TableCellStyle>
         )}
         {rows.category === 'Планшеты' && row.screenResolution && (
            <TableCellStyle width="12vw">{row.screenResolution}</TableCellStyle>
         )}
         {rows.category !== 'Планшеты'
            ? row.ram && (
                 <TableCellStyle width="12vw">RAM {row.ram}ГБ</TableCellStyle>
              )
            : null}
         {row.processor && (
            <TableCellStyle width="11vw">{row.processor}</TableCellStyle>
         )}
         {row.sim && <TableCellStyle width="11vw">{row.sim}</TableCellStyle>}
         {row.housingMaterial && (
            <TableCellStyle width="12vw">{row.housingMaterial}</TableCellStyle>
         )}
         {row.diagonalScreen && (
            <TableCellStyle width="11vw">{row.diagonalScreen}</TableCellStyle>
         )}
         {row.gender && (
            <TableCellStyle width="11vw">{row.gender}</TableCellStyle>
         )}
         <TableCellStyle width="10vw">{rows.dateOfIssue}</TableCellStyle>

         <TableCellStyle width="11vw">
            <InputBox>
               <InputUi
                  height="67px"
                  border="1px solid #CDCDCD"
                  borderradius="0"
                  fontSize="1rem"
                  type="number"
                  onChange={handleChange}
                  onFocus={onChangeBooleanValueQuantity}
                  value={values.quantity}
                  name="quantity"
                  background="#cb11ab19"
                  onBlur={onAddAndEditQuantityHandler}
               />
            </InputBox>
         </TableCellStyle>
         <TableCellStyle width="12.1vw">
            <InputBox>
               <InputUi
                  height="67px"
                  border="1px solid #CDCDCD"
                  borderradius="0 6px 6px 0"
                  value={values.price}
                  name="price"
                  onChange={handleChange}
                  fontSize="1rem"
                  type="number"
                  background="#cb11ab19"
                  onFocus={onChangeBooleanValuePrice}
                  onBlur={onAddAndEditPriceHandler}
               />
            </InputBox>
         </TableCellStyle>
      </TableRowStyle>
   )
}

const TableRowStyle = styled(TableRow)(({ theme }) => ({
   borderRadius: '0.375rem',
   border: `1px solid ${theme.palette.secondary.main}`,
   display: 'flex',
   width: '79.688vw',
}))

const TableCellStyle = styled(TableCell)(({ theme, width }) => ({
   fontFamily: theme.typography.mainFontFamily,
   fontSize: '1rem',
   color: '#292929',
   height: '4.625rem',
   padding: '0',
   width,
   display: 'flex',
   alignItems: 'center',
   margin: 0,
}))

const InputBox = styled('div')`
   margin-right: -2.1px;
`
