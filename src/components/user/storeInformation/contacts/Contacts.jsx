import { styled } from '@mui/material'
import React from 'react'
import { CourseInfo } from './courseInfo'
import { MapComponent } from './Map'
import { UserInfo } from './userInfo'
import { BreadCrumbs } from '../../../UI/breadCrumbs/BreadCrumbs'

export const Contacts = () => {
   return (
      <Container>
         <BreadCrumbs
            breadcrumbs={[
               { path: '/', label: 'Главная' },
               { label: 'Контакты' },
            ]}
         />

         <TextHeader>Контакты</TextHeader>
         <ContentContainer>
            <CourseInfo />
            <UserInfo />
         </ContentContainer>
         <MapComponent />
      </Container>
   )
}

const Container = styled('div')`
   width: 79.688vw;
   margin: 0 auto;
`

const ContentContainer = styled('div')`
   display: flex;
   justify-content: space-between;
`

const TextHeader = styled('h1')(({ theme }) => ({
   borderBottom: `1px solid ${theme.palette.secondary.main}`,
   fontFamily: theme.typography.fontFamily,
   width: '100%',
   fontSize: '1.875rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: '110%',
   margin: '0 auto',
   paddingBottom: '1.25rem',
   marginTop: '1.875rem',
}))
