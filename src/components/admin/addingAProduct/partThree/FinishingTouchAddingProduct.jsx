import React from 'react'
import { InputAdornment, TextField, styled } from '@mui/material'
import { HeaderAddingAProduct } from '../HeaderAddingAProduct'
import { InputPDF } from './inputAddProductPartThree/InputPDF'
import { InputDescription } from './inputAddProductPartThree/InputDescription'
import { ReactComponent as DownloadIcon } from '../../../../assets/icons/tools-for-site/download-icon.svg'

export const FinishingTouchAddingProduct = () => {
   return (
      <Container>
         <HeaderAddingAProduct title="Описание и обзор" pathNumber={3} />

         <ContainerInput>
            <ContainerInputAddVideoAndPDF>
               <label htmlFor="Загрузите видеообзор">
                  Загрузите видеообзор
                  <InputAddProduct
                     id="Загрузите видеообзор"
                     placeholder="Вставьте ссылку на видеообзор"
                     InputProps={{
                        startAdornment: (
                           <InputAdornmentStyle position="start">
                              <DownloadIcon />
                           </InputAdornmentStyle>
                        ),
                     }}
                  />
               </label>

               <InputPDF />
            </ContainerInputAddVideoAndPDF>

            <div>
               <InputDescription />
            </div>
         </ContainerInput>
      </Container>
   )
}

const Container = styled('div')`
   margin-left: 6.25rem;
`

const ContainerInput = styled('div')`
   margin-top: 3.75rem;
   display: flex;
   flex-direction: column;
   gap: 2.5rem;

   label {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
      color: #384255;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
   }
`

const ContainerInputAddVideoAndPDF = styled('div')`
   display: flex;
   gap: 1.25rem;
`

export const InputAddProduct = styled(TextField)`
   border-radius: 6px;
   width: 22vw;
   margin: 0;
   padding: 0;

   input {
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      padding: 0.5rem 0;

      ::placeholder {
         color: #91969e;
      }
   }
`

export const InputAdornmentStyle = styled(InputAdornment)`
   margin: 0 10px 0 0;
   padding: 0;
`
