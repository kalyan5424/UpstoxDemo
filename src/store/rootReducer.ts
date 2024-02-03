import fetchStockReducer from 'features/home/saga/fetchStocksSlice'

/**
 *  rootReducer() holds all the reducers available.
 */
const rootReducer = {
  stocks: fetchStockReducer,
}

export default rootReducer
