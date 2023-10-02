import { backgroundColors } from './constantsAdminAddNewProduct'

export const columns = [
   { name: 'Бренд', field: 'brandName' },
   { name: 'Экран', render: (item) => `53* (${item.screen}) IPS` },
   {
      name: 'Цвет',
      render: (item) =>
         backgroundColors.find((el) => el.color === item.color).name,
   },
   { name: 'Цена', render: (item) => `${item.price.toLocaleString()} с` },
   { name: 'Память', render: (item) => `${item.rom}ГБ` },
   { name: 'SIM-карты', render: (item) => `${item.simCard} (nano SIM)` },
]
export const columnDataInfo = [
   { columnName: 'brandName' },
   { columnName: 'screen' },
   { columnName: 'color' },
   { columnName: 'price' },
   { columnName: 'rom' },
   { columnName: 'simCard' },
]
export const isAllValuesEqual = (table, columnName) => {
   return table.every((item) => item[columnName] === table[0][columnName])
}

export const categoryMappings = {
   Phone: 'Смартфоны',
   Tablet: 'Планшеты',
   Laptop: 'Ноутбуки',
   'Smart Watch': 'Смарт-часы',
}
