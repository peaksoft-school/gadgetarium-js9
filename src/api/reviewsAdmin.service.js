import { axiosInstance } from '../config/axiosInstants'

export const getAllRatingCountRequest = () => {
   return axiosInstance.get('/reviews/all-ratings-info')
}

export const getAllReviewsRequest = (numberPage) => {
   return axiosInstance.get(
      `/reviews/get-all-reviews?filter=Все отзывы&pageSize=4&numberPage=${numberPage}`
   )
}

export const getUnansweredReviewsRequest = (numberPage) => {
   return axiosInstance.get(
      `/reviews/get-all-reviews?filter=Неотвеченные&pageSize=4&numberPage=${numberPage}`
   )
}

export const getAnsweredReviewsRequest = (numberPage) => {
   return axiosInstance.get(
      `/reviews/get-all-reviews?filter=Отвеченные&pageSize=4&numberPage=${numberPage}`
   )
}

export const putEditAnswerReviewsRequest = (data) => {
   return axiosInstance.put('/reviews', data)
}

export const deleteReviewsIdRequest = (id) => {
   return axiosInstance.delete(`/reviews/${id}`)
}
