export const routes = {
   SIGN_IN: '/signIn',
   SIGN_UP: '/signUp',

   ADMIN: {
      index: '/admin',
   },

   USER: {
      index: '/',
      aboutShop: 'aboutStore',
      delivery: 'delivery',
      faq: 'faq',
      contacts: 'contacts',
   },
}

export const USER_ROLE = {
   GUEST: 'GUEST',
   USER: 'USER',
   ADMIN: 'ADMIN',
}
