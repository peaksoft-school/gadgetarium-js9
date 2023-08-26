import { CustomToast } from '../../components/UI/snackbar/CustomToast'
import { QuantityOfGoodsAndPrice } from '../../components/admin/addingAProduct/partTwo/QuantityOfGoodsAndPrice'
// import { AddingAProduct } from '../../components/admin/addingAProduct/partOne/AddingAProduct'

export const AdminLayout = () => {
   return (
      <div>
         <QuantityOfGoodsAndPrice />

         {/* <AddingAProduct /> */}

         <CustomToast />
      </div>
   )
}
