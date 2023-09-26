import { createSlice } from '@reduxjs/toolkit'
import { getUserData, postOrderUserData } from './payment.thunk'

const initialState = {
   isLoading: false,
   user: {},
   dataPartOne: {},
   isError: false,
   validBoolean: false,
   orderData: {},
   token: '',
   orderNumber: '',
   openSuccessModal: false,
   dataSubProductId: [],
}

export const paymentSlice = createSlice({
   name: 'payment',
   initialState,
   reducers: {
      collectorDataPartOne(state, { payload }) {
         if (payload.data.address === '') {
            const updatedData = {
               email: payload.data.email,
               firstName: payload.data.firstName,
               lastName: payload.data.lastName,
               phoneNumber: payload.data.phoneNumber,
               typeDelivery: payload.data.typeDelivery,
            }

            return { ...state, dataPartOne: updatedData }
         }

         return { ...state, dataPartOne: payload.data }
      },

      validForm(state, { payload }) {
         return { ...state, validBoolean: payload }
      },

      collectorDataPartTwo(state, { payload }) {
         const newData = {
            ...state.dataPartOne,
            typePayment: payload.typePayment,
         }

         if (payload.typePayment === 'CASH') {
            return { ...state, orderData: newData }
         }

         return { ...state, orderData: newData, token: payload.token }
      },

      closeOpenSuccessModal(state) {
         state.openSuccessModal = false
      },

      collectorSubProductId(state, { payload }) {
         const res = payload.map((item) => item.subProductId)

         return { ...state, dataSubProductId: res }
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(getUserData.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
         })
         .addCase(getUserData.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getUserData.rejected, (state, action) => {
            state.isLoading = false

            state.isError = action.payload
         })

      builder
         .addCase(postOrderUserData.fulfilled, (state, action) => {
            state.orderNumber = action.payload.orderNumber
            state.isLoading = false
            state.openSuccessModal = true
         })
         .addCase(postOrderUserData.pending, (state) => {
            state.isLoading = true
         })
         .addCase(postOrderUserData.rejected, (state) => {
            state.isLoading = false

            state.isError = true
         })
   },
})

export const {
   collectorDataPartOne,
   validForm,
   collectorDataPartTwo,
   collectorSubProductId,
   closeOpenSuccessModal,
} = paymentSlice.actions
