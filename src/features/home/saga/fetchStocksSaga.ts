import APIRequests from 'features/home/services/APIRequest'
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchStocksResAdapter, fetchStocksRqAdapter } from '../services/transformer'
import { FetchStocksRq } from '../services/types'
import { fetchStocks, fetchStocksFailed, fetchStocksLoading, fetchStocksSuccess } from './fetchStocksSlice'

function* fetchStocksSaga(fetchStocksRq: FetchStocksRq): Generator<any, any, any> {
  yield put(fetchStocksLoading())
  try {
    fetchStocksRq = fetchStocksRqAdapter(fetchStocksRq)
    const response = yield call(APIRequests.fetchStocksApiRq, fetchStocksRq)
    const transformedData = fetchStocksResAdapter(response)
    yield put(fetchStocksSuccess({ data: transformedData }))
  } catch (error) {
    yield put(fetchStocksFailed({ error: error }))
  }
}

export function* watchFetchStocks() {
  yield takeLatest(fetchStocks, fetchStocksSaga)
}
