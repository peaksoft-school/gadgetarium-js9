import React from 'react'
import {
   InputAddProduct,
   InputAdornmentStyle,
} from '../FinishingTouchAddingProduct'
import { ReactComponent as DownloadIcon } from '../../../../../assets/icons/tools-for-site/download-icon.svg'

export const InputPDF = () => {
   return (
      <div>
         <label htmlFor="Загрузите документ PDF">
            Загрузите документ PDF
            <InputAddProduct
               id="Загрузите документ PDF"
               placeholder="Вставьте документ в PDF файле"
               InputProps={{
                  startAdornment: (
                     <InputAdornmentStyle position="start">
                        <DownloadIcon />
                     </InputAdornmentStyle>
                  ),
               }}
            />
         </label>
      </div>
   )
}
