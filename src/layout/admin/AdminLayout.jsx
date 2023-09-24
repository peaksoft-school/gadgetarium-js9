import { Outlet } from 'react-router-dom'
import { CustomToast } from '../../components/UI/snackbar/CustomToast'
// import { Infographic } from '../../components/admin/infographic/Infographic'
import { ReviewsAndRating } from '../../components/admin/reviewsAndRating/ReviewsAndRating'

export const AdminLayout = () => {
   return (
      <div>
         <Outlet />

         <ReviewsAndRating />

         {/* <Infographic /> */}

         <CustomToast />
      </div>
   )
}
