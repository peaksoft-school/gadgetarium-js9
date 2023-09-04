import { axiosInstance } from '../config/axiosInstants'

export const getCategoryRequest = () => {
   return axiosInstance.get('/v1/brand/get-all')
}

export const filterProductsByCategory = (payload) => {
   console.log('payload: ', payload)
   const requestData = {
      gadgetType: 'string',
      sorting: 'string',
      brandIds: payload.id.length === 0 ? [0] : payload.id,
      priceStart: payload.minValue,
      priceEnd: payload.maxValue,
      codeColor: ['string'],
      rom: [0],
      ram: [0],
      sim: [0],
      processors: ['string'],
      screenResolution: ['string'],
      purposes: ['string'],
      videoMemory: [0],
      screenSize: [0],
      screenDiagonal: ['string'],
      batteryCapacity: ['string'],
      housingMaterials: ['string'],
      materialBracelets: ['string'],
      genders: ['string'],
      interfaces: ['string'],
      hullShapes: ['string'],
   }

   return axiosInstance.post(
      `/v1/products/filter?pageSize=${payload.pageSize}&pageNumber=${payload.pageNumber}`,
      requestData
   )
}
