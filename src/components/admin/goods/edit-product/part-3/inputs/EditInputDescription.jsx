import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import { styled } from '@mui/material'
import Underline from '@tiptap/extension-underline'
import { EditMenuBar } from './EditMenuBarInputDescription'

const content = '<div></div>'

const extensions = [StarterKit, Underline]

export const EditInputDescription = ({ formik }) => {
   const [placeholder, setPlaceholder] = useState(false)

   const onFocusHandler = () => {
      setPlaceholder(true)
   }

   const onBlurHandler = () => {
      setPlaceholder(false)
   }

   const returnBoolHandler =
      placeholder === false && formik.values.description === '<p></p>'

   return (
      <Container>
         {returnBoolHandler && (
            <span className="placeholder">Введите описание o товаре</span>
         )}
         <EditorProvider
            slotBefore={<EditMenuBar formik={formik} />}
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
