import { axiosInstance } from '../config/axiosInstants'

export const getInfographicDayRequest = () => {
   return axiosInstance.get('/v1/products/info?period=day')
}

export const getInfographicMonthRequest = () => {
   return axiosInstance.get('/v1/products/info?period=month')
}

export const getInfographicYearRequest = () => {
   return axiosInstance.get('/v1/products/info?period=year')
}
