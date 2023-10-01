import { Breadcrumbs, Link, Typography, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const BreadCrumbs = ({ breadcrumbs }) => {
   return (
      <Container>
         <StyledBreadcrumbs separator="»" aria-label="breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => {
               const isLast = index === breadcrumbs.length - 1
               const { path, label } = breadcrumb
               const key = index + 1
               if (isLast) {
                  return (
                     <StyledTypography key={key} color="text.primary">
                        {label}
                     </StyledTypography>
                  )
               }

               return (
                  <StyledLink
                     underline="hover"
                     key={key}
                     color="inherit"
                     component={RouterLink}
                     to={path}
                  >
                     {label}
                  </StyledLink>
               )
            })}
         </StyledBreadcrumbs>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 3.75rem;
`
const StyledBreadcrumbs = styled(Breadcrumbs)`
   .MuiBreadcrumbs-ol {
      display: flex;
      align-items: center;
      .MuiBreadcrumbs-separator {
         margin-bottom: 2px;
      }
      li {
         height: 19px;
         display: flex;
         align-items: center;
      }
   }
`
const StyledLink = styled(Link)`
   font-family: Inter;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
`
const StyledTypography = styled(Typography)`
   font-family: Inter;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
`
