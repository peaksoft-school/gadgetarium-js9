export const routes = {
   SIGN_IN: '/signIn',
   SIGN_UP: '/signUp',

   ADMIN: {
      index: '/admin',
      addProduct: '/admin/add-products/part-1',
   },

   USER: {
      index: '/',
      aboutShop: 'aboutStore',
      delivery: 'delivery',
      faq: 'faq',
      contacts: 'contacts',
      favorite: 'favorite',
      personal: {
         index: 'personalArea/:tab',
         personalDetail: 'personalArea/:orderId/details',
      },
      personalFavorites: '/personalArea/:tab',
      personalProfile: '/personalArea/:tab',
   },
}

export const USER_ROLE = {
   GUEST: 'GUEST',
   USER: 'USER',
   ADMIN: 'ADMIN',
}
