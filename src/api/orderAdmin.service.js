import { axiosInstance } from '../config/axiosInstants'

export const getAdminOrderRequest = () => {
   return axiosInstance.get(
      '/order?status=%D0%92%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B5&pageSize=6&pageNumber=1&startDate=11.11.2023&endDate=11.12.2023'
   )
}
