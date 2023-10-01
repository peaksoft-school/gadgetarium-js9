export const categoryProduct = {
   Phone: 'Смартфоны',
   Laptop: 'Ноутбук',
   'Smart Watch': 'Смарт-Часы',
   Tablet: 'Планшет',
}

export const subProductDataCategory = {
   Android: 'Android',
   iOS: 'iOS',
   'Camera Phones': 'Камерофоны',
   'Gaming Phones': 'Игровые телефоны',
   Ultrabooks: 'Ультрабуки',
   'Business Laptops': 'Деловые ноутбуки',
   'Touchscreen Laptops': 'Сенсорные ноутбуки',
   Chromebooks: 'Chromebook',
   'Gaming Laptops': 'Игровые ноутбуки',
   'Fitness Trackers': 'Фитнес-трекеры',
   'Sports Watches': 'Спортивные часы',
   'Children Smart Watches': 'Детские смарт-часы',
   'Entertainment Tablets': 'Планшеты для развлечений',
   'Proffessional Tablets': 'Профессиональные планшеты',
   'Educational Tablets': 'Образовательные планшеты',
}

export const statusTranslate = {
   PENDING: 'В ожидании',
   IN_PROCESSING: 'В обработке',
   READY_FOR_DELIVERY: 'Готов к выдаче',
   RECEIVED: 'Получен',
   CANCEL: 'Отменить',
   COURIER_ON_THE_WAY: 'Курьер в пути',
   DELIVERED: 'Доставлен',
}

export const dataProductWatch = {
   rom: [
      { id: '4', name: '4' },
      { id: '8', name: '8' },
      { id: '16', name: '16' },
      { id: '32', name: '32' },
   ],
   bracelet: [
      { id: 'SILICONE', name: 'Силикон' },
      { id: 'LEATHER', name: 'Кожа' },
      { id: 'RUBBER', name: 'Резина' },
      { id: 'PLASTIC', name: 'Пластик' },
      { id: 'NYLON', name: 'Нейлон' },
      { id: 'IMITATION_LEATHER', name: 'Из искусственной кожи' },
      { id: 'CERAMIC_IMITATION', name: 'Имитация керамики' },
   ],
   housingMaterial: [
      { id: 'ACRYLIC', name: 'Акриловый' },
      { id: 'ALUMINIUM', name: 'Алюминий' },
      { id: 'CERAMIC', name: 'Керамика' },
      { id: 'PLASTIC', name: 'Пластик' },
      { id: 'METAL', name: 'Металл' },
      { id: 'STAINLESS_STEEL', name: 'Нержавейщая сталь' },
      { id: 'GLASS', name: 'Стекло' },
   ],
   display: [
      { id: '1.2', name: '1.2' },
      { id: '1.22', name: '1.22' },
      { id: '1.3', name: '1.3' },
      { id: '1.4', name: '1.4' },
      { id: '1.41', name: '1.41' },
      { id: '1.44', name: '1.44' },
      { id: '1.54', name: '1.54' },
   ],
}

export const dataProductSmartphones = {
   romSmartphones: [
      { id: '8', name: '8' },
      { id: '16', name: '16' },
      { id: '32', name: '32' },
      { id: '64', name: '64' },
      { id: '128', name: '128' },
      { id: '256', name: '256' },
      { id: '512', name: '512' },
   ],
   smartphonesRAM: [
      { id: '2', name: '2' },
      { id: '4', name: '4' },
      { id: '6', name: '6' },
      { id: '8', name: '8' },
      { id: '12', name: '12' },
   ],
   smartphonesSIMcards: [
      { id: '1', name: '1' },
      { id: '2', name: '2' },
   ],
}

export const dataProductNotebooks = {
   processorNotebooks: [
      { id: 'INTEL_CORE_I3', name: 'Intel Core i3' },
      { id: 'INTEL_ddd_CORE I5', name: 'Intel Core i5' },
      { id: 'INTEL_CORE_I7', name: 'Intel Core i7' },
      { id: 'INTEL_CORE_I9', name: 'Intel Core I9' },
      { id: 'INTEL_CELERON', name: 'Intel Celeron' },
      { id: 'INTEL_PENTIUM', name: 'Intel Pentium' },
      { id: 'AMD', name: 'AMD' },
      { id: 'INTEL_QUAD_CORE', name: 'Intel Quad Core' },
      { id: 'INTEL_DUAL_CORE', name: 'Intel Dual Core' },
      { id: 'AMD_RYZEN_3_3250U', name: 'AMD Ryzen 3 3250U' },
      { id: 'INTEL_CORE_I7-8565U', name: 'Intel Core i7-8565U' },
      { id: 'AMD_RYZEN_7_4700U', name: 'AMD Ryzen 7 4700U' },
   ],
   screenResolutionNotebooks: [
      { id: '1024x600', name: '1024x600' },
      { id: '1280x800', name: '1280x800' },
      { id: '1366x768', name: '1366x768' },
      { id: '1600x900', name: '1600x900' },
      { id: '1920x1080', name: '1920x1080' },
      { id: '2160x1440', name: '2160x1440' },
      { id: '2560x1600', name: '2560x1600' },
      { id: '3072x1920', name: '3072x1920' },
      { id: '3840x2160', name: '3840x2160' },
   ],
   purposeNotebooks: [
      { id: 'FOR_WORK', name: 'Для работы' },
      { id: 'MULTIMEDIA', name: 'Мультимедийный' },
      { id: 'GAMING', name: 'Игровой' },
      { id: 'FOR_BUSINESS', name: 'Для бизнеса' },
      { id: 'FOR_LEARNING', name: 'Для учебы' },
      { id: 'OFFICE', name: 'Офисный' },
   ],
   videoMemoryNotebooks: [
      { id: '2', name: '2' },
      { id: '4', name: '4' },
      { id: '6', name: '6' },
      { id: '8', name: '8' },
      { id: '16', name: '16' },
   ],
   ramNotebooks: [
      { id: '2', name: '2' },
      { id: '4', name: '4' },
      { id: '8', name: '8' },
      { id: '16', name: '16' },
      { id: '32', name: '32' },
      { id: '64', name: '64' },
   ],
   screenSizeNotebooks: [
      { id: '11.6', name: '11.6' },
      { id: '13.3', name: '13.3' },
      { id: '14', name: '14' },
      { id: '15', name: '15' },
      { id: '15.6', name: '15.6' },
      { id: '16', name: '16' },
      { id: '16.1', name: '16.1' },
      { id: '17.8', name: '17.8' },
   ],
}

export const dataProductTablets = {
   screenResolutionTablets: [
      { id: '1600x900', name: '1600x900' },
      { id: '1366x768', name: '1366x768' },
      { id: '1920x1080', name: '1920x1080' },
      { id: '2560x1600', name: '2560x1600' },
      { id: '3072x1920', name: '3072x1920' },
      { id: '3840x2160', name: '3840x2160' },
   ],
   screenSizeTablets: [
      { id: '14', name: '14' },
      { id: '15', name: '15' },
      { id: '16', name: '16' },
      { id: '11.6', name: '11.6' },
      { id: '13.3', name: '13.3' },
      { id: '15.6', name: '15.6' },
      { id: '16.1', name: '16.1' },
      { id: '17.3', name: '17.3' },
   ],
   romTablets: [
      { id: '8', name: '8' },
      { id: '16', name: '16' },
      { id: '32', name: '32' },
      { id: '64', name: '64' },
      { id: '128', name: '128' },
      { id: '256', name: '256' },
   ],
   ramTablets: [
      { id: '2', name: '2' },
      { id: '4', name: '4' },
      { id: '6', name: '6' },
      { id: '8', name: '8' },
      { id: '12', name: '12' },
   ],
   screenDiagonalTablets: [
      { id: '0 - 2', name: '0 - 2' },
      { id: '3 - 5', name: '3 - 5' },
      { id: '6 - 8', name: '6 - 8' },
      { id: '9 - 11', name: '9 - 11' },
      { id: '12 - 15', name: '12 - 15' },
   ],
   batteryCapacity: [
      { id: '0 - 2399 мА/час', name: '0 - 2399 мА/час' },
      { id: '2400 - 4799 мА/час', name: '2400 - 4799 мА/час' },
      { id: '4800 - 7199 мА/час', name: '4800 - 7199 мА/час' },
      { id: '7200 - 9599 мА/час', name: '7200 - 9599 мА/час' },
      { id: '9600 - 12000 мА/час', name: '9600 - 12000 мА/час' },
   ],
}

export const radioData = {
   genderRadioData: [
      { id: '1', label: 'Унисекс', value: 'UNI' },
      { id: '2', label: 'Женский', value: 'FEMALE' },
      { id: '3', label: 'Мужской', value: 'MALE' },
   ],
   waterproof: [
      { id: '1', label: 'Да', value: true },
      { id: '2', label: 'Нет', value: false },
   ],
   anInterface: [
      { id: '1', label: 'Bluetooth', value: 'BLUETOOTH' },
      { id: '2', label: 'Wi-Fi', value: 'WI-FI' },
      { id: '3', label: 'GPS', value: 'GPS' },
      { id: '4', label: 'NFC', value: 'NFC' },
   ],
   hullShape: [
      { id: '1', label: 'Квадратная', value: 'SQUARE' },
      { id: '2', label: 'Круглая', value: 'ROUND' },
      { id: '3', label: 'Овальная', value: 'OVAL' },
      { id: '4', label: 'Прямоугольная', value: 'RECTANGULAR' },
   ],
}

//! #E1E1E1
//! #732600

export const bgColor = [
   '#FFFFFF',
   '#CCCCCC',
   '#B2B2B2',
   '#9C9C9C',
   '#686868',
   '#343434',
   '#000000',
   '#FFBEBE',
   '#CD6666',
   '#FF0000',
   '#E60000',
   '#A80000',
   '#730000',
   '#F57A7A',
   '#894444',
   '#FFEBBE',
   '#FFA77F',
   '#FF5500',
   '#D7B09E',
   '#CD8966',
   '#895A44',
   '#FFD37F',
   '#FFAA00',
   '#E69800',
   '#A87000',
   '#734C00',
   '#D7C29E',
   '#F5CA7A',
   '#CDAA66',
   '#FFFFBE',
   '#FFFF72',
   '#E6E600',
   '#A8A800',
   '#737300',
   '#CDCD66',
   '#898944',
   '#D1FF73',
   '#AAFF00',
   '#4CE600',
   '#38A800',
   '#267300',
   '#A5F57A',
   '#5C8944',
   '#BEFFE8',
   '#72FFE0',
   '#00FFC5',
   '#00E6A9',
   '#00A884',
   '#00734C',
   '#9ED7C2',
   '#66CDAB',
   '#BEE8FF',
   '#73DFFF',
   '#00C5FF',
   '#00A9E6',
   '#0084A8',
   '#004C73',
   '#9EBBD7',
   '#6699CD',
   '#BED2FF',
   '#73B2FF',
   '#0071FF',
   '#005CE6',
   '#004DA8',
   '#002673',
   '#9EAAD7',
   '#7A8EF5',
   '#172973',
   '#012E95',
   '#040097',
   '#00329A',
   '#0A29C0',
   '#3B3AC4',
   '#035FE4',
   '#0370CB',
   '#E8BEFF',
   '#C500FF',
   '#A900E6',
   '#8400A8',
   '#4C0073',
   '#C29ED7',
   '#AA66CD',
   '#704489',
   '#FFBEE8',
   '#FF73DF',
   '#FF00C5',
   '#A80084',
   '#73004C',
   '#D69DBC',
   '#CD6699',
   '#894465',
]

export const backgroundColors = [
   { name: 'Белый', color: '#FFFFFF' },
   { name: 'Серый', color: '#CCCCCC' },
   { name: 'Светло-серый', color: '#B2B2B2' },
   { name: 'Темно-серый', color: '#9C9C9C' },
   { name: 'Темно-серый', color: '#686868' },
   { name: 'Черный', color: '#343434' },
   { name: 'Черный', color: '#000000' },
   { name: 'Розовый', color: '#FFBEBE' },
   { name: 'Красный', color: '#CD6666' },
   { name: 'Ярко-красный', color: '#FF0000' },
   { name: 'Красный', color: '#E60000' },
   { name: 'Темно-красный', color: '#A80000' },
   { name: 'Темно-красный', color: '#730000' },
   { name: 'Светло-коралловый', color: '#F57A7A' },
   { name: 'Коричневый', color: '#894444' },
   { name: 'Персиковый', color: '#FFEBBE' },
   { name: 'Оранжевый', color: '#FFA77F' },
   { name: 'Оранжевый', color: '#FF5500' },
   { name: 'Бежевый', color: '#D7B09E' },
   { name: 'Коричневый', color: '#CD8966' },
   { name: 'Коричневый', color: '#895A44' },
   { name: 'Светло-желтый', color: '#FFD37F' },
   { name: 'Желтый', color: '#FFAA00' },
   { name: 'Желтый', color: '#E69800' },
   { name: 'Желтый', color: '#A87000' },
   { name: 'Темно-желтый', color: '#734C00' },
   { name: 'Светло-зеленый', color: '#D7C29E' },
   { name: 'Светло-коричневый', color: '#F5CA7A' },
   { name: 'Светло-коричневый', color: '#CDAA66' },
   { name: 'Светло-желтый', color: '#FFFFBE' },
   { name: 'Ярко-желтый', color: '#FFFF72' },
   { name: 'Желтый', color: '#E6E600' },
   { name: 'Желтый', color: '#A8A800' },
   { name: 'Темно-желтый', color: '#737300' },
   { name: 'Светло-желтый', color: '#CDCD66' },
   { name: 'Светло-коричневый', color: '#898944' },
   { name: 'Лаймовый', color: '#D1FF73' },
   { name: 'Ярко-зеленый', color: '#AAFF00' },
   { name: 'Ярко-зеленый', color: '#4CE600' },
   { name: 'Ярко-зеленый', color: '#38A800' },
   { name: 'Ярко-зеленый', color: '#267300' },
   { name: 'Светло-голубой', color: '#A5F57A' },
   { name: 'Зеленовато-серый', color: '#5C8944' },
   { name: 'Светло-бирюзовый', color: '#BEFFE8' },
   { name: 'Светло-бирюзовый', color: '#72FFE0' },
   { name: 'Бирюзовый', color: '#00FFC5' },
   { name: 'Бирюзовый', color: '#00E6A9' },
   { name: 'Бирюзовый', color: '#00A884' },
   { name: 'Бирюзовый', color: '#00734C' },
   { name: 'Бирюзовый', color: '#9ED7C2' },
   { name: 'Светло-фиолетовый', color: '#66CDAB' },
   { name: 'Фиолетовый', color: '#BEE8FF' },
   { name: 'Фиолетовый', color: '#73DFFF' },
   { name: 'Светло-голубой', color: '#00C5FF' },
   { name: 'Светло-голубой', color: '#00A9E6' },
   { name: 'Светло-голубой', color: '#0084A8' },
   { name: 'Светло-голубой', color: '#004C73' },
   { name: 'Светло-голубой', color: '#9EBBD7' },
   { name: 'Светло-голубой', color: '#6699CD' },
   { name: 'Светло-серый', color: '#BED2FF' },
   { name: 'Светло-голубой', color: '#73B2FF' },
   { name: 'Светло-синий', color: '#0071FF' },
   { name: 'Светло-синий', color: '#005CE6' },
   { name: 'Светло-синий', color: '#004DA8' },
   { name: 'Темно-синий', color: '#002673' },
   { name: 'Светло-голубой', color: '#9EAAD7' },
   { name: 'Светло-синий', color: '#7A8EF5' },
   { name: 'Синий', color: '#172973' },
   { name: 'Синий', color: '#012E95' },
   { name: 'Синий', color: '#040097' },
   { name: 'Синий', color: '#00329A' },
   { name: 'Темно-синий', color: '#0A29C0' },
   { name: 'Темно-синий', color: '#3B3AC4' },
   { name: 'Светло-синий', color: '#035FE4' },
   { name: 'Светло-синий', color: '#0370CB' },
   { name: 'Светло-фиолетовый', color: '#E8BEFF' },
   { name: 'Фиолетовый', color: '#cb11ab' },
   { name: 'Фиолетовый', color: '#C500FF' },
   { name: 'Фиолетовый', color: '#A900E6' },
   { name: 'Фиолетовый', color: '#8400A8' },
   { name: 'Фиолетовый', color: '#4C0073' },
   { name: 'Светло-фиолетовый', color: '#C29ED7' },
   { name: 'Фиолетовый', color: '#AA66CD' },
   { name: 'Фиолетовый', color: '#704489' },
]
