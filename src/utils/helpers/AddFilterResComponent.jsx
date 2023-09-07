import { NotebooksOptions } from '../../components/admin/addingAProduct/partOne/advancedOptions/NotebooksOptions'
import { SmartphoneAdvancedOptions } from '../../components/admin/addingAProduct/partOne/advancedOptions/SmartphoneAdvancedOptions'
import { TabletsOptions } from '../../components/admin/addingAProduct/partOne/advancedOptions/TabletsOptions'
import { WatchAdvancedOptions } from '../../components/admin/addingAProduct/partOne/advancedOptions/WatchAdvancedOptions'

export const filterResComponent = (value, errorCategory) => {
   let resComponent

   switch (value.category) {
      case 'Смартфоны':
         resComponent = (
            <SmartphoneAdvancedOptions errorCategory={errorCategory} />
         )

         return resComponent
      case 'Смарт-часы и браслеты':
         resComponent = <WatchAdvancedOptions errorCategory={errorCategory} />

         return resComponent

      case 'Ноутбуки':
         resComponent = <NotebooksOptions errorCategory={errorCategory} />

         return resComponent

      case 'Планшеты':
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
