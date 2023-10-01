import { TableCell, TableRow, styled } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
   addAndEditPrice,
   addAndEditQuantity,
} from '../../../../../../store/addProduct/addProductPartOne.slice'
import {
   backgroundColors,
   dataProductNotebooks,
   dataProductWatch,
   radioData,
} from '../../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { editActions } from '../../../../../../store/edit.product/edit.product.slice'

const schema = Yup.object().shape({
   price: Yup.number().required('Обязательное поле'),
   quantity: Yup.number().required('Обязательное поле'),
})

export const EditTableRow = ({ rows, row, onChange, value }) => {
   const dispatch = useDispatch()
   const { brandAll } = useSelector((state) => state.editProduct)
   const { values, setFieldValue } = useFormik({
      initialValues: {
         price: row.price,
         quantity: row.quantity,
      },

      validateOnBlur: true,
      validationSchema: schema,
   })
   useEffect(() => {
      onChange(values)
   }, [value])
   useEffect(() => {
      dispatch(
         editActions.onChangePartTwo(
            Number(values.price) && Number(values.quantity)
         )
      )
   }, [values])
   useEffect(() => {
      setFieldValue('price', row.price)
      setFieldValue('quantity', row.quantity)
   }, [row])
   const handleChangeNoMinus = (e) => {
      const newValue = e.target.value

      if (!Number.isNaN(newValue) && newValue >= 0) {
         setFieldValue(e.target.name, newValue)
      }
   }

   const onAddAndEditPriceHandler = () => {
      dispatch(addAndEditPrice({ id: row.id, price: +values.price }))
   }

   const onAddAndEditQuantityHandler = () => {
      dispatch(addAndEditQuantity({ id: row.id, quantity: +values.quantity }))
   }

   const housingMaterial = row.housingMaterial
      ? dataProductWatch.housingMaterial.find(
           (item) => item.id === row?.housingMaterial
        )
      : ''

   const materialBracelet = row.materialBracelet
      ? dataProductWatch.bracelet.find(
           (item) => item.id === row?.materialBracelet
        )
      : ''

   const gender =
      row.gender &&
      radioData.genderRadioData.find((item) => item.value === row?.gender)

   const color =
      row.codeColor &&
      backgroundColors.find((item) => item.color === row?.codeColor)

   const brand = rows.brandId
      ? brandAll.find((item) => item.id === rows.brandId)
      : ''
   const processor =
      row.processor &&
      dataProductNotebooks.processorNotebooks.find(
         (item) => item.id === row.processor
      )
   return (
      <TableRowStyle hover role="checkbox" tabIndex={-1} key={row.id}>
         <TableCellStyle sx={{ paddingLeft: '1.042vw' }} width="10.26vw">
            {brand.name || ''}
         </TableCellStyle>
         <TableCellStyle width="8.333vw">{color.name || ''}</TableCellStyle>
         {row.rom ? (
            <TableCellStyle width="10.052vw">{row.rom} ГБ</TableCellStyle>
         ) : (
            ''
         )}
         {row.screenResolution ? (
            <TableCellStyle width="11.306vw">
               {row.screenResolution}
            </TableCellStyle>
         ) : (
            ''
         )}
         {row.screenSize ? (
            <TableCellStyle width="10vw">{row.screenSize}</TableCellStyle>
         ) : (
            ''
         )}
         {row.ram ? (
            <TableCellStyle width="12.708vw">RAM {row.ram}ГБ</TableCellStyle>
         ) : (
            ''
         )}
         {row.processor ? (
            <TableCellStyle width="10vw">{processor.name}</TableCellStyle>
         ) : (
            ''
         )}
         {row.sim ? (
            <TableCellStyle width="12.24vw">{row.sim}</TableCellStyle>
         ) : (
            ''
         )}
         {row.materialBracelet ? (
            <TableCellStyle width="12vw">
               {materialBracelet.name || ''}
            </TableCellStyle>
         ) : (
            ''
         )}
         {row.housingMaterial ? (
            <TableCellStyle width="12vw">
               {housingMaterial.name || ''}
            </TableCellStyle>
         ) : (
            ''
         )}
         {row.gender ? (
            <TableCellStyle width="10vw">{gender.label || ''}</TableCellStyle>
         ) : (
            ''
         )}
         <TableCellStyle width={rows.categoryId === 1 ? '19.063vw' : '10vw'}>
            {rows.dateOfIssue}
         </TableCellStyle>

         <TableCellStyle
            width="8.333vw"
            sx={{
               background: 'rgba(203, 17, 171, 0.10)',
               paddingLeft: '1.042vw',
            }}
         >
            <StyledInput
               value={values.quantity}
               onChange={handleChangeNoMinus}
               type="number"
               onBlur={onAddAndEditQuantityHandler}
               name="quantity"
               width="7.291vw"
            />
         </TableCellStyle>
         <TableCellStyle
            width="8.594vw"
            sx={{
               background: 'rgba(203, 17, 171, 0.10)',
               paddingLeft: '1.042vw',
            }}
         >
            <StyledInput
               value={values.price}
               onChange={handleChangeNoMinus}
               onBlur={onAddAndEditPriceHandler}
               type="number"
               name="price"
               width="7.552vw"
            />
         </TableCellStyle>
      </TableRowStyle>
   )
}

const TableRowStyle = styled(TableRow)(({ theme }) => ({
   borderRadius: '0.375rem',
   border: `1px solid ${theme.palette.secondary.main}`,
   display: 'flex',
   height: '4.625rem',
}))

const TableCellStyle = styled(TableCell)(({ theme, width }) => ({
   fontFamily: theme.typography.mainFontFamily,
   fontSize: '1rem',
   color: '#292929',
   padding: '0',
   width,
   display: 'flex',
   alignItems: 'center',
   margin: 0,
}))

const StyledInput = styled('input')`
   background: none;
   border: none;
   font-family: Inter;
   width: ${(props) => props.width};
   font-size: 1rem;
   font-weight: 500;
   font-style: normal;
   letter-spacing: 0.0625rem;
   :focus {
      outline: none;
   }
`
