import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import Underline from '@tiptap/extension-underline'
import { MenuBar } from './MenuBarInputDescription'
import { collectorFinishingProductData } from '../../../../../store/addProduct/addProductPartOne.slice'

const content = '<div></div>'

const extensions = [StarterKit, Underline]

export const InputDescription = ({ formik, validForm }) => {
   const dispatch = useDispatch()
   const [placeholder, setPlaceholder] = useState(false)
   const [value, setValue] = useState('')
   const { newProduct } = useSelector((state) => state.addProduct)

   const onCollectorValue = (e) => {
      setValue(e)
   }

   const onFocusHandler = () => {
      setPlaceholder(true)
   }

   const onBlurHandler = () => {
      setPlaceholder(false)

      dispatch(collectorFinishingProductData(newProduct.description))
   }

   const returnBoolHandler = placeholder === false && value === ''

   const validDescription = validForm && value === ''

   return (
      <Container validForm={validDescription}>
         {returnBoolHandler && (
            <span className="placeholder">Введите описание o товаре</span>
         )}
         <EditorProvider
            slotBefore={
               <MenuBar onCollectorValue={onCollectorValue} formik={formik} />
            }
            extensions={extensions}
            content={content}
            placeholder="hello world name"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
         />
      </Container>
   )
}

const Container = styled('div')`
   width: 45.3vw;
   height: 22.1875rem;
   margin: 0;
   border: 1px solid #cdcdcd;
   border: 1px solid ${(props) => (props.validForm ? '#ff0000' : '#cdcdcd')};
   border-radius: 0.25rem;
   position: relative;

   .placeholder {
      position: absolute;
      margin: 5.4rem 0 0 1.25rem;
      color: #91969e;

      font-family: Inter;
      font-size: 1rem;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
   }

   .ProseMirror {
      min-height: 17.9375rem;
      max-height: 17.9375rem;
      border: none;
      outline: none;
      padding: 1rem 1.25rem;
      overflow-y: auto;

      p {
         margin: 0;
      }
   }
`
