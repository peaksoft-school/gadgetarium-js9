export const routes = {
   SIGN_IN: '/signIn',
   SIGN_UP: '/signUp',

   ADMIN: {
      index: '/admin',
      addProductPartOne: '/admin/add-products-part-1',
      addProductPartTwo: '/admin/add-products-part-2',
   },

   USER: {
      index: '/',
      aboutShop: 'aboutStore',
      delivery: 'delivery',
      faq: 'faq',
      contacts: 'contacts',

      category: {
         index: 'category/',
         smartphone: ':smartphone',
         smartWatch: ':smartWatch',
         tablets: ':tablets',
         laptops: ':laptops',
      },
      favorite: 'favorite',
      compare: 'compare',
      personal: {
         index: 'personalArea/:tab',
         personalDetail: 'personalArea/:orderId/details',
      },
      payment: '/payment/placing-an-order',
   },
}

export const USER_ROLE = {
   GUEST: 'GUEST',
   USER: 'USER',
   ADMIN: 'ADMIN',
}
