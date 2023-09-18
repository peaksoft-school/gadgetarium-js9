import { axiosInstance } from '../config/axiosInstants'

// export const getColorNameRequest = (color) => {
//    console.log('color: ', color)

//    return axiosInstance.get(`/v1/products/colors/%23${color}`)
// }

export const getUserDataRequest = () => {
   return axiosInstance.get(`/v1/user`)
}
