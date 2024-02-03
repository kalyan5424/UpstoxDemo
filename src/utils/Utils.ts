import { AxiosError } from 'axios'

export const isEmptyObject = (obj: Object) => {
  let name
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false
    }
  }
  return true
}

export const isNetworkError = (err: AxiosError) => {
  return 'ERR_NETWORK' === err?.code ? true : false
}
