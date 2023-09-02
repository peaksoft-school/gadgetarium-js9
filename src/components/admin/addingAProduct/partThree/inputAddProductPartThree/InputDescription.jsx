import React, { useEffect, useState } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { IconButton, styled } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
// import { ReactComponent as BoldIcon } from '../../../../.
// ./assets/icons/editor-text-tools/bold-icon.svg'
// import { ReactComponent as ItalicIcon } from '../../../..
// /../assets/icons/editor-text-tools/italic-icon.svg'
// import { ReactComponent as OrderedListIcon } from '../../
// ../../../assets/icons/editor-text-tools/ordered-list-icon.svg'
// import { ReactComponent as UnderLineIcon } from '../../..
// /../../assets/icons/editor-text-tools/under-line-icon.svg'
// import { ReactComponent as UnorderedListIcon } from '../../..
// /../../assets/icons/editor-text-tools/unordered-list-icon.svg'

export const InputDescription = () => {
   const [editorState, setEditorState] = useState(EditorState.createEmpty())
   const [rr, setRr] = useState(false)
   console.log('editorState: ', editorState)
   console.log('rr: ', rr)

   function onChange(editorState) {
      setEditorState(editorState)
   }

   const handleKeyCommand = (command) => {
      console.log('command: ', command)
      const newState = RichUtils.handleKeyCommand(editorState, command)

      if (newState) {
         setEditorState(newState)
         return 'handled'
      }

      // if (rr) {
      //    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
      // }

      return 'not-handled'
   }

   useEffect(() => {
      if (rr) {
         setEditorState(RichUtils.toggleBlockType(editorState, 'BOLD'))
      }
   }, [rr])

   const onBoldClick = () => {
      setRr((prev) => !prev)
   }

   return (
      <Container>
         <ContainerButton>
            <IconButton onClick={onBoldClick}>
               <FormatBoldIcon />
            </IconButton>
            <IconButton onClick={onBoldClick}>
               <FormatItalicIcon />
            </IconButton>
            <IconButton onClick={onBoldClick}>
               <FormatUnderlinedIcon />
            </IconButton>
            <IconButton onClick={onBoldClick}>
               <FormatListBulletedIcon />
            </IconButton>
            <IconButton onClick={onBoldClick}>
               <FormatListNumberedIcon />
            </IconButton>
         </ContainerButton>

         <ContainerInput>
            <EditorStyle
               editorState={editorState}
               handleKeyCommand={handleKeyCommand}
               onChange={onChange}
               textAlignment="right"
            />
         </ContainerInput>
      </Container>
   )
}

const Container = styled('div')`
   border: 1px solid #000;
   width: 694px;
`

const ContainerButton = styled('div')`
   padding: 1.25rem 3.1875rem;
   display: flex;
   align-items: center;
   gap: 5rem;

   button {
      margin: 0;
      border: 1px solid #ff73df;
      border-radius: 1px;
      padding: 0px;
      /* background-color: #ffbee8; */
   }

   svg {
      fill: red;
      height: 28px;
      width: 28px;
   }
`

const ContainerInput = styled('div')`
   border: 1px solid #000;
   width: 694px;
   height: 287px;
`

const EditorStyle = styled(Editor)``
