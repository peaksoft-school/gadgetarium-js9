import React from 'react'
import { styled } from '@mui/material'
import { ReactComponent as Arrowsvg } from '../../assets/icons/fagArrow.svg'

export const FagChild = ({ item, isSelected, onIconClick }) => {
   const handleIconClick = () => {
      onIconClick(item.id)
   }

   return (
      <Container key={item.id}>
         <ContentContainer>
            <IdContainer isSelected={isSelected}>{item.id}</IdContainer>
            <h5>{item.title}</h5>
            <ArrowSvgStyled
               onClick={handleIconClick}
               className={isSelected ? 'rotated' : ''}
            />
         </ContentContainer>
         {isSelected && <Description>{item.description}</Description>}
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '52.60416666666667vw',
   boxShadow: '0 0.125rem 0.625rem 0 rgba(48, 60, 51, 0.05)',
   borderRadius: '0.125rem',
   marginTop: '1.25rem',
}))

const ContentContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
}))

const IdContainer = styled('p')(({ theme, isSelected }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',

   width: '2.5rem',
   height: '2.5rem',

   fontSize: '1.25rem',
   fontStyle: 'normal',
   fontWeight: '700',

   lineHeight: 'normal',
   backgroundColor: isSelected ? `${theme.palette.primary.main}` : '#cb11ac15',
   color: isSelected ? 'white' : `${theme.palette.primary.main}`,
   borderRadius: '50%',
   margin: '1.5rem',
}))

const Description = styled('p')(() => ({
   margin: '0.86rem 1.25rem 1.25rem 6.37rem',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: '150%',
   overflow: 'hidden',
}))

const ArrowSvgStyled = styled(Arrowsvg)(() => ({
   transition: 'transform 0.3s ease',
   cursor: 'pointer',
   margin: '1.62rem 1.25rem',
   marginLeft: 'auto',

   '&.rotated': {
      transform: 'rotate(-90deg)',
   },
}))
