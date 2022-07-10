import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: {},
  loading: false,
  cryptoList: [
    { symbol: 'BTC_THB', name: 'BTC/THB' },
    { symbol: 'BUSD_THB', name: 'BUSD/THB' },
    { symbol: 'USDT_THB', name: 'USDT/THB' }
  ]
}

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    getCurrentFetching: (state) => {
      state.loading = true
    },
    getCurrentSuccess: (state, action) => {
      state.current = action.payload
      state.loading = false
    },
    getCurrentFailure: (state) => {
      state.loading = false
    }
  }
})

export const { getCurrentFailure, getCurrentFetching, getCurrentSuccess } =
  marketSlice.actions

export default marketSlice.reducer
