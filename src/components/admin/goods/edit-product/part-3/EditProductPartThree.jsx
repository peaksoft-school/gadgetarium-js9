import { InputAdornment, TextField, styled } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as DownloadIcon } from '../../../../../assets/icons/tools-for-site/download-icon.svg'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { Button } from '../../../../UI/Button'
import { Loading } from '../../../../UI/loading/Loading'
import { EditInputPDF } from './inputs/EditInputPDF'
import { EditInputDescription } from './inputs/EditInputDescription'
import {
   postFilePDF,
   putProduct,
} from '../../../../../store/edit.product/edit.product.thunk'
import { editActions } from '../../../../../store/edit.product/edit.product.slice'

const schema = Yup.object().shape({
   videoLink: Yup.string().required('Обязательное поле').url(),
   pdf: Yup.string().required('Обязательное поле'),
   description: Yup.string().required('Обязательное поле'),
})

export const EditProductPartThree = memo(() => {
   const dispatch = useDispatch()
   const { subProductId } = useParams()
   const { snackbarHandler } = useSnackbar()
   const [changePdf, setChangePdf] = useState(true)
   const { product, isLoading } = useSelector((state) => state.editProduct)
   const navigate = useNavigate()

   const formik = useFormik({
      initialValues: {
         videoLink: product.videoLink,
         pdf: '',
         description: product.description,
      },
      validateOnBlur: true,
      validationSchema: schema,
   })
   useEffect(() => {
      formik.setFieldValue('description', product.description)
   }, [product.description])
   const toggleChangePdfHandler = () => {
      setChangePdf(!changePdf)
   }
   const onBlurHandler = (e) => {
      formik.handleBlur(e)

      if (formik.errors.videoLink) {
         snackbarHandler({
            message: 'Видеообзор должен быть действительным URL-адресом',
            type: 'error',
         })
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
      dispatch(postFilePDF(file))
   }

   const finishedPartThree = async () => {
      const valid = product.pdf !== '' && product.description !== ''

      if (valid) {
         if (formik.values.videoLink.includes('https')) {
            dispatch(
               putProduct({ product, subProductId, snackbarHandler, navigate })
            )
         } else {
            snackbarHandler({
               message: 'Видеообзор должен быть действительным URL-адресом',
               type: 'error',
            })
         }
      } else {
         snackbarHandler({
            message: 'Bce поле должны быть обязательно заполнены',
            type: 'error',
         })
      }
   }

   const onClose = () => {
      navigate('/admin/goods')
   }
   useEffect(() => {
      dispatch(editActions.getVideoLink(formik.values.videoLink))
      dispatch(editActions.getDescription(formik.values.description))
   }, [formik.values])

   return (
      <>
         {isLoading && <Loading />}
         <Container>
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
                                 <DownloadIcon style={{ cursor: 'pointer' }} />
                              </InputAdornmentStyle>
                           ),
                        }}
                     />
                  </label>
                  {product.pdf && changePdf ? (
                     <PdfContainer>
                        <CheckPdf
                           href={product.pdf}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Посмотреть PDF
                        </CheckPdf>
                        <StyledButton onClick={toggleChangePdfHandler}>
                           Сменить PDF
                        </StyledButton>
                     </PdfContainer>
                  ) : (
                     <>
                        <EditInputPDF formik={formik} onDrop={onDrop} />
                        <StyledButton
                           style={{ marginTop: '20px' }}
                           onClick={toggleChangePdfHandler}
                        >
                           Не сменять PDF
                        </StyledButton>
                     </>
                  )}
               </ContainerInputAddVideoAndPDF>

               <div>
                  <EditInputDescription formik={formik} />
               </div>

               <ContainerButton>
                  <Button
                     backgroundhover="#CB11AB"
                     onClick={onClose}
                     variant="outlined"
                     padding="6px 20px"
                     fontSize="16px"
                  >
                     Отменить
                  </Button>
                  <Button
                     onClick={finishedPartThree}
                     variant="contained"
                     padding="6px 20px"
                     fontSize="16px"
                  >
                     Изменить
                  </Button>
               </ContainerButton>
            </ContainerInput>
         </Container>
      </>
   )
})

EditProductPartThree.displayName = 'EditProductPartThree'

const Container = styled('div')`
   ul {
      list-style: disc;
      padding-left: 1rem;
   }

   ol {
      list-style-type: decimal;
      padding-left: 1rem;
   }
`
const CheckPdf = styled('a')`
   margin-bottom: 1px;
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
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
   }
`
const StyledButton = styled('button')`
   border: none;
   background: none;
   color: #384255;
   font-family: Inter;
   font-size: 1rem;
   cursor: pointer;
   font-style: normal;
   font-weight: 400;
   :hover {
      color: #cb11ab;
   }
`

const ContainerInputAddVideoAndPDF = styled('div')`
   display: flex;
   gap: 1.25rem;
`

export const InputAddProduct = styled(TextField)`
   border-radius: 0.375rem;
   width: 22vw;
   margin: 0;
   padding: 0;

   input {
      font-size: 1rem;
      font-style: normal;
      font-family: Inter;
      font-weight: 300;
      padding: 0.5rem 0;

      ::placeholder {
         color: #000000;
      }
   }
`

export const InputAdornmentStyle = styled(InputAdornment)`
   margin: 0 0.625rem 0 0;
   padding: 0;
`

const ContainerButton = styled('div')`
   display: flex;
   width: 45.3vw;
   justify-content: flex-end;
   gap: 3.625rem;
`
const PdfContainer = styled('div')`
   display: flex;
   align-items: flex-end;
   margin-bottom: 9px;
`
