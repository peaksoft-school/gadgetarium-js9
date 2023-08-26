export const columns = [
   {
      header: 'Бренд',
      key: 'brand',
      // index: true,
   },
   {
      header: 'Цвет',
      key: 'codeColor',
   },
   {
      header: 'Объем памяти',
      key: 'rom',
      // fontStyle: 'italic',
      // fontWeight: 400,
   },
   {
      header: 'Оперативная память',
      key: 'ram',
      // color: '#ad5502',
      // number: true,
      // fontWeight: 600,
   },
   {
      header: 'Кол-во SIM-карт',
      key: 'sim',
      // color: '#ad5502',
      // number: true,
      // fontWeight: 600,
   },
   {
      header: 'Дата выпуска',
      key: 'dateOfIssue',
      // color: '#ad5502',
      // number: true,
      // fontWeight: 600,
   },
   {
      header: 'Кол-во товара',
      key: 'quantity',
      render: () => {
         return (
            <div>
               <input type="text" />
            </div>
         )
      },
   },
   {
      header: 'Цена',
      key: 'price',
      render: () => {
         return (
            <div>
               <input type="text" />
            </div>
         )
      },
   },
]

export const rows = {
   category: '',
   subcategory: '',
   brand: '1',
   guarantee: '',
   name: '',
   dateOfIssue: '12.12.2020',
   subProductRequests: [
      {
         id: 1,
         codeColor: 'Черный',
         rom: '128',
         ram: '8',
         sim: '2',
         quantity: '',
         price: '',
         images: [],
      },
      {
         id: 2,
         codeColor: 'Белый',
         rom: '64',
         ram: '4',
         sim: '1',
         quantity: '',
         price: '',
         images: [],
      },
   ],
}

// <Grid sx={{ display: 'flex', justifyContent: 'center' }}>

/* <IconButton onClick={() => editMealHandler(meal)}> */

/* <EditIcon /> */

/* </IconButton> */

/* <IconButton onClick=() => deleteMealHandler(meal._id)> */

/* <DeleteIcon /> */

/* </IconButton> */

/* </Grid> */
