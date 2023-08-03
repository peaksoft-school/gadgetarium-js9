import { axiosInstance } from '../config/axiosFileInstance'

export const signIn = (data) => {
   return axiosInstance.post('/register', data)
}

export const signUp = (data) => {
   return axiosInstance.post('/register', data)
}
