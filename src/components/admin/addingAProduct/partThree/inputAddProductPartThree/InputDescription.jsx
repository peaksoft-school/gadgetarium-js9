import { memo } from 'react'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { styled } from '@mui/material'
import Underline from '@tiptap/extension-underline'
import { MenuBar } from './MenuBarInputDescription'

const content = '<div></div>'

const extensions = [StarterKit, Underline]

export const InputDescription = memo(({ formik }) => {
   return (
      <Container>
         <EditorProvider
            slotBefore={<MenuBar formik={formik} />}
            extensions={extensions}
            content={content}
         />
      </Container>
   )
})

const Container = styled('div')`
   width: 45.3vw;
   height: 22.1875rem;
   margin: 0;
   border: 1px solid #cdcdcd;
   border-radius: 4px;

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
