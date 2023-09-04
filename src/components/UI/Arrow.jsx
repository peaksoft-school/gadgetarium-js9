import React from 'react'
import { ReactComponent as Arrow } from '../../assets/icons/arrows/up-icon.svg'

export const ArrowIcon = ({ checked, onClick, ...props }) => {
   return <Arrow checked={checked} onClick={onClick} {...props} />
}
