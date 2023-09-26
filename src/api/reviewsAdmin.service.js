import { axiosInstance } from '../config/axiosInstants'

export const getAllRatingCountRequest = () => {
   return axiosInstance.get('/reviews/all-ratings-info')
}

export const getAllReviewsRequest = () => {
   return axiosInstance.get(
      `/reviews/get-all-reviews?filter=Все отзывы&pageSize=4&numberPage=${4}`
   )
}

export const getUnansweredReviewsRequest = () => {
   return axiosInstance.get(
      `/reviews/get-all-reviews?filter=Неотвеченные&pageSize=4&numberPage=${4}`
   )
}

export const getAnsweredReviewsRequest = () => {
   return axiosInstance.get(
      `/reviews/get-all-reviews?filter=Отвеченные&pageSize=4&numberPage=${4}`
   )
}

export const postAdminReplyCommentsReviewsRequest = (data) => {
   return axiosInstance.post('/reviews/reply', data)
}

export const putEditAnswerReviewsRequest = (data) => {
   return axiosInstance.put('/reviews', data)
}

export const updateViewReviewsIdRequest = (data) => {
   return axiosInstance.put(`/reviews/update-view`, data)
}

export const deleteReviewsIdRequest = (id) => {
   return axiosInstance.delete(`/reviews/${id}`)
}
