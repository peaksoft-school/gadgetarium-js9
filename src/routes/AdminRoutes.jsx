import { AddingAProduct } from '../components/admin/addingAProduct/partOne/AddingAProduct'
import { FinishingTouchAddingProduct } from '../components/admin/addingAProduct/partThree/FinishingTouchAddingProduct'
import { QuantityOfGoodsAndPrice } from '../components/admin/addingAProduct/partTwo/QuantityOfGoodsAndPrice'
import { ProductDetails } from '../components/user/productIdPages/ProductDetails'
import { PhonePage } from '../components/user/productIdPages/productIdDetail/PhonePage'

export const adminRoutes = [
   {
      path: '/admin/add-products-part-1',
      element: <AddingAProduct />,
   },
   {
      path: '/admin/add-products-part-2',
      element: <QuantityOfGoodsAndPrice />,
   },
   {
      path: '/admin/add-products-part-3',
      element: <FinishingTouchAddingProduct />,
   },
   {
      path: '/admin/product/:productId',
      element: <PhonePage />,
   },
   {
      path: '/admin/product/:productId/details',
      element: <ProductDetails />,
   },
]
