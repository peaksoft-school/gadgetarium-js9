import { NotebooksOptions } from '../../components/admin/addingAProduct/advancedOptions/NotebooksOptions'
import { SmartphoneAdvancedOptions } from '../../components/admin/addingAProduct/advancedOptions/SmartphoneAdvancedOptions'
import { TabletsOptions } from '../../components/admin/addingAProduct/advancedOptions/TabletsOptions'
import { WatchAdvancedOptions } from '../../components/admin/addingAProduct/advancedOptions/WatchAdvancedOptions'

export const filterResComponent = (value) => {
   let resComponent

   // eslint-disable-next-line no-debugger
   // debugger

   switch (value.category) {
      case 'Смартфоны':
         resComponent = <SmartphoneAdvancedOptions />

         return resComponent
      case 'Смарт-часы и браслеты':
         resComponent = <WatchAdvancedOptions />

         return resComponent

      case 'Ноутбуки':
         resComponent = <NotebooksOptions />

         return resComponent

      case 'Планшеты':
         resComponent = <TabletsOptions />

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
