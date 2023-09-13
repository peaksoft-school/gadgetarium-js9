import { InputAdornment, TextField, styled } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderAddingAProduct } from '../HeaderAddingAProduct'
import { InputPDF } from './inputAddProductPartThree/InputPDF'
import { InputDescription } from './inputAddProductPartThree/InputDescription'
import { ReactComponent as DownloadIcon } from '../../../../assets/icons/tools-for-site/download-icon.svg'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import { addDescriptionAndOverview } from '../../../../store/addProduct/addProductPartOne.slice'
import { Button } from '../../../UI/Button'
import {
   postAddProduct,
   postFileImg,
   postFilePDF,
} from '../../../../store/addProduct/addProduct.thunk'
import { Loading } from '../../../UI/loading/Loading'

const schema = Yup.object().shape({
   videoLink: Yup.string().required('Обязательное поле').url(),
   pdf: Yup.string().required('Обязательное поле'),
   description: Yup.string().required('Обязательное поле'),
})

export const FinishingTouchAddingProduct = memo(() => {
   const dispatch = useDispatch()
   const { snackbarHandler } = useSnackbar()
   const {
      newProduct,
      pathPdf,
      resultAddProductData,
      isLoading,
      isError,
      isSuccessAddProduct,
   } = useSelector((state) => state.addProduct)
   const navigate = useNavigate()
   const [PDFValues, setPDFValues] = useState()
   const [validPDF, setValidPDF] = useState(false)

   const formik = useFormik({
      initialValues: {
         videoLink: '',
         pdf: '',
         description: '',
      },
      validateOnBlur: true,
      validationSchema: schema,
   })

   const pdfDataChangeHandler = (data) => {
      setPDFValues(data)
   }

   const onBlurHandler = (e) => {
      formik.handleBlur(e)

      if (formik.errors.videoLink) {
         snackbarHandler({
            message:
               'Загрузите видеообзор должен быть действительным URL-адресом',
            type: 'error',
         })
      }

      if (!formik.errors.videoLink) {
         dispatch(
            addDescriptionAndOverview({
               videoLink: formik.values.videoLink,
               pdf: formik.values.pdf,
               description: newProduct.description,
            })
         )
      }
   }

   const onDrop = (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file.type !== 'application/pdf') {
         snackbarHandler({
            message: 'Выберите файл в формате PDF',
            type: 'error',
         })

         return
      }

      formik.setFieldValue('pdf', file.name)

      pdfDataChangeHandler(file)
   }

   useEffect(() => {
      if (pathPdf === '') {
         dispatch(
            addDescriptionAndOverview({
               videoLink: formik.values.videoLink,
               pdf: formik.values.pdf,
               description: formik.values.description,
            })
         )
      }

      if (pathPdf !== '') {
         setValidPDF(true)
      }

      dispatch(
         addDescriptionAndOverview({
            videoLink: formik.values.videoLink,
            pdf: pathPdf,
            description: formik.values.description,
         })
      )
   }, [pathPdf])

   useEffect(() => {
      if (validPDF === true) {
         dispatch(postFileImg(newProduct))
      }
   }, [validPDF])

   const finishedPartThree = async () => {
      if (formik.errors && formik.values.description === '<p></p>') {
         snackbarHandler({
            message: 'Bce поле должны быть обязательно заполнены',
            type: 'error',
         })
      } else {
         dispatch(postFilePDF(PDFValues))
      }
   }

   const onClose = () => {
      navigate('/')
   }

   const postAddProductHandler = () => {
      dispatch(postAddProduct(resultAddProductData))
   }

   useEffect(() => {
      if (resultAddProductData.categoryId) {
         postAddProductHandler()
      }
   }, [resultAddProductData])

   useEffect(() => {
      if (isSuccessAddProduct !== '') {
         snackbarHandler({
            message: 'Товар успешно добавлен',
            type: 'success',
         })
      }
   }, [isSuccessAddProduct])

   useEffect(() => {
      if (isError !== '') {
         snackbarHandler({
            message: 'Что то произошло не так',
            type: 'error',
         })
      }
   }, [isError])

   return (
      <>
         {isLoading && <Loading />}
         <Container>
            <HeaderAddingAProduct title="Описание и обзор" pathNumber={3} />

            <ContainerInput>
               <ContainerInputAddVideoAndPDF>
                  <label htmlFor="Загрузите видеообзор">
                     Загрузите видеообзор
                     <InputAddProduct
                        id="Загрузите видеообзор"
                        placeholder="Вставьте ссылку на видеообзор"
                        type="url"
                        value={formik.values.videoLink}
                        onChange={formik.handleChange}
                        onBlur={(e) => onBlurHandler(e)}
                        name="videoLink"
                        InputProps={{
                           startAdornment: (
                              <InputAdornmentStyle position="start">
                                 <DownloadIcon />
                              </InputAdornmentStyle>
                           ),
                        }}
                     />
                  </label>

                  <InputPDF formik={formik} onDrop={onDrop} />
               </ContainerInputAddVideoAndPDF>

               <div>
                  <InputDescription formik={formik} />
               </div>

               <ContainerButton>
                  <Button
                     backgroundHover="#CB11AB"
                     onClick={onClose}
                     variant="outlined"
                  >
                     Отменить
                  </Button>
                  <Button onClick={finishedPartThree} variant="contained">
                     Добавить
                  </Button>
               </ContainerButton>
            </ContainerInput>
         </Container>
      </>
   )
})

FinishingTouchAddingProduct.displayName = 'FinishingTouchAddingProduct'

const Container = styled('div')`
   margin-left: 6.25rem;

   ul {
      list-style: disc;
      padding-left: 1rem;
   }

   ol {
      list-style-type: decimal;
      padding-left: 1rem;
   }

   margin-bottom: 3.125rem;
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

const ContainerButton = styled('div')`
   display: flex;
   width: 45.3vw;
   justify-content: flex-end;
   gap: 3.625rem;
`
