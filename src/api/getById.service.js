import { axiosInstance } from '../config/axiosInstants'

export const getByIdPhoneRequest = () => {
   return axiosInstance.get('/v1/products/get-by-id?subProductId=1')
}
