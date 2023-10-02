import React from 'react'
import { keyframes, styled } from '@mui/material'
import { ReactComponent as Arrowsvg } from '../../../../assets/icons/fagArrow.svg'

export const FagChild = ({ item, isSelected, onIconClick }) => {
   const handleIconClick = () => {
      onIconClick(item.id)
   }

   return (
      <Container key={item.id}>
         <ContentContainer>
            <IdContainer isSelected={isSelected}>{item.id}</IdContainer>
            <p className="title">{item.title}</p>
            <ArrowSvgStyled
               onClick={handleIconClick}
               className={isSelected ? 'rotated' : ''}
            />
         </ContentContainer>
         {isSelected && (
            <Description selected={isSelected}>{item.description}</Description>
         )}
      </Container>
   )
}
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`
const Container = styled('div')`
   width: 52.60416666666667vw;
   box-shadow: 0 0.125rem 0.625rem 0 rgba(48, 60, 51, 0.05);
   border-radius: 0.125rem;
   margin-top: 1.25rem;
   background-color: white;
   transition: transform 0.3s ease;
   .ul {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
   }
`

const ContentContainer = styled('div')`
   display: flex;
   align-items: center;
   user-select: none;

   .title {
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 120%;
      color: #292929;
   }
`

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

const Description = styled('p')((props) => ({
   margin: '-20px 1.25rem 1.25rem 6rem',
   fontSize: '1rem',
   animation: `${props.selected ? slideIn : slideOut} 0.3s ease-in-out`,
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
