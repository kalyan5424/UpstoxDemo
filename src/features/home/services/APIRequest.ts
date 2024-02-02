import axios from 'axios'
import { FetchStocksRq } from 'features/home/services/types'

class APIRequests {
  static fetchStocksApiRq = (fetchStocksRq: FetchStocksRq) => {
    return new Promise((resolve, reject) => {
      axios({
        method: fetchStocksRq.method,
        url: fetchStocksRq.url,
      })
        .then((res) => {
          resolve(res?.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default APIRequests
