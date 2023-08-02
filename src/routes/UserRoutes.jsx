import { styled } from '@mui/material'
import { AboutShop } from '../components/user/aboutShop/AboutShop'
import { Delivery } from '../components/user/delivery/Delivery'
import { routes } from '../utils/common/constants/routesConstants'

const Container = styled('div')`
   height: 300px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const userRoutes = [
   {
      path: routes.USER.home,
      element: (
         <Container>
            <h1>Hello World</h1>
         </Container>
      ),
   },
   {
      path: routes.USER.aboutShop,
      element: <AboutShop />,
   },
   {
      path: routes.USER.delivery,
      element: <Delivery />,
   },
]