import { watchFetchStocks } from 'features/home/saga/fetchStocksSaga'
import { all, fork } from 'redux-saga/effects'

/**
 *  rootSaga() holds all the saga's available.
 */
const rootSaga = function* () {
  yield all([fork(watchFetchStocks)])
}

export default rootSaga
