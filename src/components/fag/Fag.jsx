import React, { useState } from 'react'
import { styled } from '@mui/material'
import { FagChild } from './FagChild'
import { FagData } from '../../utils/common/constants/Fag'

export const FAG = () => {
   const [selectedId, setSelectedId] = useState(null)

   const handleIconClick = (id) => {
      setSelectedId((prevId) => (prevId === id ? null : id))
   }

   return (
      <Container>
         <Text>FAG</Text>
         <h3>Часто задаваемые вопросы</h3>
         {FagData.map((item) => (
            <FagChild
               key={item.id}
               item={item}
               isSelected={selectedId === item.id}
               onIconClick={handleIconClick}
            />
         ))}
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   h3 {
      margin-bottom: 2.63rem;
   }
`

const Text = styled('p')(({ theme }) => ({
   margin: '1.875rem 0 7.5rem 0',
   paddingBottom: '1.25rem',
   fontFamily: theme.typography.fontFamily,
   fontSize: '1.875rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: '110%',
   borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
   width: '79.6875vw',
}))
