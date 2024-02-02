import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATUS } from 'utils/enum'
import { FetchStocksData } from '../services/types'

export type FetchStocksFailedAction = PayloadAction<{ error: any }>
export type FetchStocksSuccessAction = PayloadAction<{ data: FetchStocksData }>

const initialState = {
  data: {},
  status: '',
  error: {},
}

const fetchStocksSlice = createSlice({
  name: 'fetchStocks',
  initialState,
  reducers: {
    fetchStocks: () => {},
    fetchStocksLoading: (state) => {
      state.status = STATUS.LOADING
      state.error = {}
    },
    fetchStocksFailed: (state, action: FetchStocksFailedAction) => {
      const { error } = action.payload
      state.status = STATUS.ERROR
      state.error = error
    },
    fetchStocksSuccess: (state, action: FetchStocksSuccessAction) => {
      const { data } = action.payload
      state.status = STATUS.SUCCESS
      state.data = data
      state.error = {}
    },
  },
})

export const { fetchStocks, fetchStocksLoading, fetchStocksFailed, fetchStocksSuccess } = fetchStocksSlice.actions

export default fetchStocksSlice.reducer
