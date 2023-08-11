import { axiosInstance } from '../config/axiosInstants'

export const signIn = (data) => {
   return axiosInstance.post('/api/v1/auth/sign-in', data)
}

export const signUp = (data) => {
   return axiosInstance.post('/api/v1/auth/sign-up', data)
}
