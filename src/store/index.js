import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './cataog/catalogSlice'
import { authSlice } from './auth/authSlice'
import { addProductSlice } from './addProduct/addProductPartOne.slice'
import { favoriteSlice } from './favorite/favorite.slice'
import { mainPageSlice } from './main.page/main.page.slice'
import { infoPageSlice } from './informationPhone/infoPageSlice'
import { basketSlice } from './basket/basket.slice'
import { orderSlice } from './order/Order.Slice'
import { compareSlice } from './compare/compare.slice'
import { paymentSlice } from './payment/payment.slice'
import { globalSearchSlice } from './globalSearch/global.search.slice'
import { adminGoodsSlice } from './admin.goods/admin.goods.slice'
import { editProductSlice } from './edit.product/edit.product.slice'
import { profileSlice } from './profile/profile.slice'
import { infographicSlice } from './infographic/Infographic.slice'
import { reviewsSlice } from './reviews/reviews.slice'

export const store = configureStore({
   reducer: {
      [categorySlice.name]: categorySlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [addProductSlice.name]: addProductSlice.reducer,
      [favoriteSlice.name]: favoriteSlice.reducer,
      [mainPageSlice.name]: mainPageSlice.reducer,
      [infoPageSlice.name]: infoPageSlice.reducer,
      [basketSlice.name]: basketSlice.reducer,
      [compareSlice.name]: compareSlice.reducer,
      [globalSearchSlice.name]: globalSearchSlice.reducer,
      [adminGoodsSlice.name]: adminGoodsSlice.reducer,
      [editProductSlice.name]: editProductSlice.reducer,
      [orderSlice.name]: orderSlice.reducer,
      [paymentSlice.name]: paymentSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [infographicSlice.name]: infographicSlice.reducer,
      [reviewsSlice.name]: reviewsSlice.reducer,
   },
})
