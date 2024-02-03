import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATUS } from 'utils/enum'
import { StocksData } from '../services/types'

export type FetchStocksFailedAction = PayloadAction<{ error: any }>
export type FetchStocksSuccessAction = PayloadAction<{ data: StocksData }>

interface UpstoxStateDataType {
  data: StocksData
  status: string
  error: Error | {}
}

const initialState: UpstoxStateDataType = {
  data: { userHolding: [] },
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
