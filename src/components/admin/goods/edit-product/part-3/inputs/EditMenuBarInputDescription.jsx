import React, { useEffect, useState } from 'react'
import { useCurrentEditor } from '@tiptap/react'
import { styled, IconButton } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'

export const EditMenuBar = ({ formik }) => {
   const { editor } = useCurrentEditor()
   const [content, setContent] = useState(formik.values.description)

   if (!editor) {
      return null
   }

   useEffect(() => {
      formik.setFieldValue('description', content)
   }, [content])
   useEffect(() => {
      const handleUpdate = () => {
         const newContent = editor.getHTML()
         setContent(newContent)
      }

      editor.on('update', handleUpdate)

      editor.commands.setContent(content)

      return () => {
         editor.off('update', handleUpdate)
      }
   }, [editor, content])
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

const ContainerButton = styled('div')`
   padding: 1.25rem 3.1875rem;
   display: flex;
   gap: 5rem;
   border-bottom: 1px solid #cdcdcd;

   button {
      margin: 0;
      border-radius: 1px;
      padding: 0;
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
