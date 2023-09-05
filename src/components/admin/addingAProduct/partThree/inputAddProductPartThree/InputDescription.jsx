import React from 'react'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { styled, IconButton } from '@mui/material'
import { BulletList } from '@tiptap/extension-bullet-list'
import { OrderedList } from '@tiptap/extension-ordered-list'
import Underline from '@tiptap/extension-underline'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'

export function MenuBar() {
   const { editor } = useCurrentEditor()

   if (!editor) {
      return null
   }

   return (
      <ContainerButton>
         <IconButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
         >
            <FormatBoldIcon />
         </IconButton>
         <IconButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
         >
            <FormatItalicIcon />
         </IconButton>
         <IconButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            disabled={!editor.can().chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
         >
            <FormatUnderlinedIcon />
         </IconButton>
         <IconButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
         >
            <FormatListBulletedIcon />
         </IconButton>
         <IconButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
         >
            <FormatListNumberedIcon />
         </IconButton>
      </ContainerButton>
   )
}

const content = '<div></div>'

const extensions = [StarterKit, Underline, BulletList, OrderedList]

export const InputDescription = () => {
   return (
      <Container>
         <EditorProvider
            slotBefore={<MenuBar />}
            extensions={extensions}
            content={content}
         />
      </Container>
   )
}

const Container = styled('div')`
   width: 49.4rem;
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

      ul {
         list-style: disc;
         padding-left: 1rem;
      }

      ol {
         list-style-type: decimal;
         padding-left: 1rem;
      }

      p {
         margin: 0;
      }
   }
`

const ContainerButton = styled('div')`
   padding: 1.25rem 3.1875rem;
   display: flex;
   gap: 5rem;
   border-bottom: 1px solid #cdcdcd;

   button {
      margin: 0;
      border-radius: 1px;
      padding: 0px;
   }

   .is-active {
      svg {
         fill: #f011cb;
      }
   }

   svg {
      fill: #292929;
      height: 1.75rem;
      width: 1.75rem;
   }
`
