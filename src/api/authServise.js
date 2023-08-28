import { axiosInstance } from '../config/axiosInstants'

export const signIn = (data) => {
   return axiosInstance.post('/v1/auth/sign-in', data)
}

export const signUp = (data) => {
   return axiosInstance.post('/v1/auth/sign-up', data)
}

export const signUpPhoneNumber = () => {
   return axiosInstance.get('/v1/user/getPhoneNumber')
}
