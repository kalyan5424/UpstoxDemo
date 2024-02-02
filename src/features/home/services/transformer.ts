import { FetchStocksData, FetchStocksRq } from './types'

export const fetchStocksRqAdapter = (fetchStocksRq: FetchStocksRq) => {
  const fetchStocksRqObj = {
    ...fetchStocksRq,
    url: 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
    method: 'GET',
  }
  return fetchStocksRqObj
}

export const fetchStocksResAdapter = (fetchStocksRes: FetchStocksData) => {
  return fetchStocksRes
}
