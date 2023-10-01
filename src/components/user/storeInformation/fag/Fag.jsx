import React, { useState } from 'react'
import { styled } from '@mui/material'
import { FagChild } from './FagChild'
import { FagData } from '../../../../utils/common/constants/Fag'
import { BreadCrumbs } from '../../../UI/breadCrumbs/BreadCrumbs'

export const FAQ = () => {
   const [selectedId, setSelectedId] = useState(null)

   const handleIconClick = (id) => {
      setSelectedId((prevId) => (prevId === id ? null : id))
   }

   return (
      <Container>
         <BreadCrumbsBox>
            <BreadCrumbs
               breadcrumbs={[{ path: '/', label: 'Главная' }, { label: 'FAQ' }]}
            />
         </BreadCrumbsBox>
         <Text>FAQ</Text>
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

const BreadCrumbsBox = styled('div')`
   width: 79.688vw;
`

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 0 7.5rem 0;

   h3 {
      font-size: 1.75rem;
      margin-bottom: 2.63rem;
   }
`

const Text = styled('p')(({ theme }) => ({
   margin: '1.88rem 0 7.5rem 0',
   paddingBottom: '1.25rem',
   fontFamily: theme.typography.fontFamily,
   fontSize: '1.875rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: '110%',
   borderBottom: `1.6px solid ${theme.palette.secondary.main}`,
   width: '79.688vw',
}))
