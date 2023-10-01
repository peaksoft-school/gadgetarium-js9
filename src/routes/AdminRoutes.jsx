import { AddingAProduct } from '../components/admin/addingAProduct/partOne/AddingAProduct'
import { FinishingTouchAddingProduct } from '../components/admin/addingAProduct/partThree/FinishingTouchAddingProduct'
import { QuantityOfGoodsAndPrice } from '../components/admin/addingAProduct/partTwo/QuantityOfGoodsAndPrice'
import { PhonePage } from '../components/user/productIdPages/productIdDetail/PhonePage'
import { AdminGoods } from '../components/admin/goods/AdminGoods'
import { EditProduct } from '../components/admin/goods/edit-product/EditProduct'
import { ReviewsAndRating } from '../components/admin/reviewsAndRating/ReviewsAndRating'
import { AdminOrdersContainer } from '../components/admin/orders/AdminOrdersContainer'
import { PaymentPage } from '../components/admin/paymant/PaymentPage'

export const adminRoutes = [
   {
      path: '/admin/goods',
      element: <AdminGoods />,
   },
   {
      path: '/admin/goods/edit-product/:subProductId',
      element: <EditProduct />,
   },
   {
      path: '/admin/goods/add-products-part-1',
      element: <AddingAProduct />,
   },
   {
      path: '/admin/goods/add-products-part-2',
      element: <QuantityOfGoodsAndPrice />,
   },
   {
      path: '/admin/goods/add-products-part-3',
      element: <FinishingTouchAddingProduct />,
   },
   {
      path: '/admin/reviewsAndRating',
      element: <ReviewsAndRating />,
   },
   {
      path: '/admin/goods/product/:productId',
      element: <PhonePage />,
   },
   {
      path: '/admin/orders',
      element: <AdminOrdersContainer />,
   },
   {
      path: '/admin/orders/:orderId/paymentIsOrder/:name',
      element: <PaymentPage />,
   },
]
