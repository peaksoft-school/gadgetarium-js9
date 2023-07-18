import { styled } from '@mui/material'
import React from 'react'
import { CourseInfo } from './courseInfo'
import { UserInfo } from './userInfo'

export const Contacts = () => {
   return (
      <>
         <TextHeader>Контакты</TextHeader>
         <Container>
            <CourseInfo />
            <UserInfo />
         </Container>
      </>
   )
}

const Container = styled('div')`
   width: 79.6875vw;
   margin: 0 auto;
   padding: 0;
   display: flex;
   justify-content: space-between;
`

const TextHeader = styled('h1')(({ theme }) => ({
   borderBottom: `1px solid ${theme.palette.secondary.main}`,
   fontFamily: theme.typography.fontFamily,
   width: '79.6875vw',
   fontSize: '1.875rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: '110%',
   margin: '0 auto',
   marginTop: '1.88rem',
   paddingBottom: '1.25rem',
}))
