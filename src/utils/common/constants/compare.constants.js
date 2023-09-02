export const columns = [
   { name: 'Бренд', field: 'brandName' },
   { name: 'Экран', render: (item) => `53* (${item.screen}) IPS` },
   { name: 'Цвет', field: 'color' },
   { name: 'Цена', render: (item) => `${item.price.toLocaleString()} с` },
   { name: 'Операционная система', field: 'operationalSystems' },
   { name: 'Память', render: (item) => `${item.rom}ГБ` },
   { name: 'SIM-карты', render: (item) => `${item.simCart} (nano SIM)` },
]
export const isAllValuesEqual = (table, columnName, index) => {
   return table.every((item) => item[columnName] === table[index]?.[columnName])
}
export const columnDataInfo = [
   { columnName: 'brandName', index: 0 },
   { columnName: 'screen', index: 1 },
   { columnName: 'color', index: 2 },
   { columnName: 'price', index: 7 },
   { columnName: 'operationalSystems', index: 4 },
   { columnName: 'rom', index: 5 },
   { columnName: 'simCarts', index: 6 },
]
export const categoryMappings = {
   Phone: 'Смартфоны',
   Tablet: 'Планшеты',
   Laptop: 'Ноутбуки',
   'Smart Watch': 'Смарт-часы',
}
