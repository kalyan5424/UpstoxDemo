import { FetchStocksRq, StocksData } from './types'

/**
 *  fetchStocksRqAdapter() function is used to perform any transformations to API request.
 */
export const fetchStocksRqAdapter = (fetchStocksRq: FetchStocksRq) => {
  const fetchStocksRqObj = {
    ...fetchStocksRq,
    url: 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
    method: 'GET',
  }
  return fetchStocksRqObj
}

/**
 *  fetchStocksResAdapter() function is used to perform any transformations to API response.
 *  Since no transformations are required returning the response as is.
 */
export const fetchStocksResAdapter = (fetchStocksRes: StocksData) => {
  return fetchStocksRes
}
