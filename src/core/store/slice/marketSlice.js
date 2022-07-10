import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: {},
  loading: false,
  stream: [],
  params: {},
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
    updateCurrentVolume: (state, action) => {
      state.stream = action.payload
    },
    getCurrentFetching: (state, action) => {
      state.current = action.payload.find((e) => state.params === e.symbol)
    },
    getParams: (state, action) => {
      state.params = action.payload
    },
    watchLive: (state, action) => {}
  }
})

export const { updateCurrentVolume, getCurrentFetching, watchLive, getParams } =
  marketSlice.actions

export default marketSlice.reducer
