import { axiosInstance } from '../config/axiosInstants'

export const getAdminOrderRequest = (data) => {
   return axiosInstance.get(
      `/order?status=${data.valueTab}&pageSize=6&pageNumber=1&startDate=${data.startDate}&endDate=${data.endDate}`
   )
}
