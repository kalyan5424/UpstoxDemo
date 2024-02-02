import fetchStockReducer from 'features/home/saga/fetchStocksSlice'

const rootReducer = {
  stocks: fetchStockReducer,
}

export default rootReducer
