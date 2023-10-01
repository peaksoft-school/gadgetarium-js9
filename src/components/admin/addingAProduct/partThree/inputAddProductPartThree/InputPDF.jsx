import React from 'react'
import { useDropzone } from 'react-dropzone'
import {
   InputAddProduct,
   InputAdornmentStyle,
} from '../FinishingTouchAddingProduct'
import { ReactComponent as DownloadIcon } from '../../../../../assets/icons/tools-for-site/download-icon.svg'

export const InputPDF = ({ formik, onDrop, validForm }) => {
   const { getRootProps } = useDropzone({
      onDrop,
      accept: ['.pdf', 'application/pdf'],
   })

   return (
      <div>
         <label htmlFor="Загрузите документ PDF">
            Загрузите документ PDF
            <div {...getRootProps()}>
               <InputAddProduct
                  id="Загрузите документ PDF"
                  placeholder="Вставьте документ в PDF файле"
                  value={formik.values.pdf}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="pdf"
                  type="text"
                  error={validForm && formik.values.pdf === ''}
                  accept=".pdf"
                  InputProps={{
                     startAdornment: (
                        <InputAdornmentStyle position="start">
                           <DownloadIcon style={{ cursor: 'pointer' }} />
                        </InputAdornmentStyle>
                     ),
                  }}
               />
            </div>
         </label>
      </div>
   )
}
