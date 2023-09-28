import { NotebooksOptions } from '../../components/admin/addingAProduct/partOne/advancedOptions/NotebooksOptions'
import { SmartphoneAdvancedOptions } from '../../components/admin/addingAProduct/partOne/advancedOptions/SmartphoneAdvancedOptions'
import { TabletsOptions } from '../../components/admin/addingAProduct/partOne/advancedOptions/TabletsOptions'
import { WatchAdvancedOptions } from '../../components/admin/addingAProduct/partOne/advancedOptions/WatchAdvancedOptions'
import { LaptopOptions } from '../../components/admin/goods/edit-product/part-1/options/LaptopOptions'
import { SmartWatchOptions } from '../../components/admin/goods/edit-product/part-1/options/SmartWatchOptions'
import { SmartphoneOptions } from '../../components/admin/goods/edit-product/part-1/options/SmartphoneOptions'
import { TabletOptions } from '../../components/admin/goods/edit-product/part-1/options/TabletOptions'

export const filterResComponent = (value, errorCategory) => {
   let resComponent

   switch (value?.categoryId) {
      case 1:
         resComponent = (
            <SmartphoneAdvancedOptions errorCategory={errorCategory} />
         )

         return resComponent
      case 3:
         resComponent = <WatchAdvancedOptions errorCategory={errorCategory} />

         return resComponent

      case 2:
         resComponent = <NotebooksOptions errorCategory={errorCategory} />

         return resComponent

      case 4:
         resComponent = <TabletsOptions errorCategory={errorCategory} />

         return resComponent
      default:
         break
   }

   return resComponent
}

export const pathNumberTrueColorPinkBackgroundColorAndColor = (
   theme,
   pathNumber,
   num,
   bgColorAndColorNumber
) => {
   const resultBackgroundColor =
      pathNumber === num
         ? theme.palette.primary.main
         : theme.palette.secondary.contrastText

   const resultColor =
      pathNumber === num
         ? theme.palette.primary.main
         : theme.palette.primary.light

   const resultColorAndBackgroundColor =
      bgColorAndColorNumber === 1 ? resultBackgroundColor : resultColor

   return resultColorAndBackgroundColor
}

export const editFilterResComponent = (value) => {
   let resComponent

   switch (value.categoryId) {
      case 1:
         resComponent = <SmartphoneOptions />

         return resComponent
      case 3:
         resComponent = <SmartWatchOptions />

         return resComponent

      case 2:
         resComponent = <LaptopOptions />

         return resComponent

      case 4:
         resComponent = <TabletOptions />

         return resComponent
      default:
         break
   }

   return resComponent
}
