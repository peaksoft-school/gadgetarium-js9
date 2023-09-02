import { axiosInstance } from '../config/axiosInstants'

export const getCategoryRequest = () => {
   return axiosInstance.get('/v1/brand/get-all')
}

export const filterProductsByCategory = (payload) => {
   const requestData = {
      gadgetType: 'Phone',
      sorting: 'string',
      brandIds: payload.id.length === 0 ? [0] : payload.id,
      priceStart: 0,
      priceEnd: 0,
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
