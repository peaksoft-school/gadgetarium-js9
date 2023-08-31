import { AddingAProduct } from '../components/admin/addingAProduct/partOne/AddingAProduct'
import { QuantityOfGoodsAndPrice } from '../components/admin/addingAProduct/partTwo/QuantityOfGoodsAndPrice'

export const adminRoutes = [
   {
      path: '/admin/add-products-part-1',
      element: <AddingAProduct />,
   },
   {
      path: '/admin/add-products-part-2',
      element: <QuantityOfGoodsAndPrice />,
   },
]
