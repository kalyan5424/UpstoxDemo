import axios, { AxiosError } from 'axios'
import { FetchStocksRq } from 'features/home/services/types'

/**
 * APIRequests Service Class to handle all API Calls
 */
class APIRequests {
  /**
   * fetchStocksApiRq() function to fetch all stocks
   */
  static fetchStocksApiRq = (fetchStocksRq: FetchStocksRq) => {
    return new Promise((resolve, reject) => {
      axios({
        method: fetchStocksRq.method,
        url: fetchStocksRq.url,
      })
        .then((res) => {
          console.log('API Res', res)
          resolve(res?.data)
        })
        .catch((err: AxiosError) => {
          console.log('API Err', err)
          console.log('API Msg', err.message)
          console.log('API Code', err.code)
          reject(err)
        })
    })
  }
}

export default APIRequests
