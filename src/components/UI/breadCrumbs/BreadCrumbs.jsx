import { Breadcrumbs, Link, Typography, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const BreadCrumbs = ({ breadcrumbs }) => {
   return (
      <Container>
         <Breadcrumbs separator="»" aria-label="breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => {
               const isLast = index === breadcrumbs.length - 1
               const { path, label } = breadcrumb

               if (isLast) {
                  return (
                     <Typography key={label} color="text.primary">
                        {label}
                     </Typography>
                  )
               }

               return (
                  <Link
                     underline="hover"
                     key={label}
                     color="inherit"
                     component={RouterLink}
                     to={path}
                  >
                     {label}
                  </Link>
               )
            })}
         </Breadcrumbs>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 3.75rem;
`
