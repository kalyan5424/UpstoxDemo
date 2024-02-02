export interface FetchStocksData {
  userHolding: UserHolding[]
}

export interface UserHolding {
  symbol: string
  quantity: number
  ltp: number
  avgPrice: number
  close: number
}

export interface FetchStocksRq {
  url: string
  method: string
  body: any
  headers: any
}
