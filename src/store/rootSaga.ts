import { watchFetchStocks } from 'features/home/saga/fetchStocksSaga'
import { all, fork } from 'redux-saga/effects'

const rootSaga = function* () {
  yield all([fork(watchFetchStocks)])
}

export default rootSaga
