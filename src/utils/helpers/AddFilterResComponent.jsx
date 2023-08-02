import { SmartphoneAdvancedOptions } from '../../components/admin/addingAProduct/advancedOptions/SmartphoneAdvancedOptions'
import { WatchAdvancedOptions } from '../../components/admin/addingAProduct/advancedOptions/WatchAdvancedOptions'

export const filterResComponent = (
   value,
   newProduct,
   onCreateNewProduct,
   onCollectorParameters
) => {
   let resComponent

   switch (value.category) {
      case 'Смартфоны':
         resComponent = (
            <SmartphoneAdvancedOptions
               newProduct={newProduct}
               onCreateNewProduct={onCreateNewProduct}
               onCollectorParameters={onCollectorParameters}
            />
         )

         return resComponent
      case 'Смарт-часы и браслеты':
         resComponent = (
            <WatchAdvancedOptions
               newProduct={newProduct}
               onCreateNewProduct={onCreateNewProduct}
               onCollectorParameters={onCollectorParameters}
            />
         )

         return resComponent

      // case 'Ноутбуки':
      //    resComponent = (
      //       <WatchAdvancedOptions
      //          newProduct={newProduct}
      //          onCreateNewProduct={onCreateNewProduct}
      //       />
      //    )

      //    return resComponent

      // case 'Смарт-часы и браслеты':
      //    resComponent = (
      //       <WatchAdvancedOptions
      //          newProduct={newProduct}
      //          onCreateNewProduct={onCreateNewProduct}
      //       />
      //    )

      //    return resComponent
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
