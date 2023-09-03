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

      category: {
         index: 'category/',
         smartphone: ':smartphone',
         smartWatch: ':smartWatch',
         tablets: ':tablets',
         laptops: ':laptops',
      },
      favorite: 'favorite',
   },
}

export const USER_ROLE = {
   GUEST: 'GUEST',
   USER: 'USER',
   ADMIN: 'ADMIN',
}
