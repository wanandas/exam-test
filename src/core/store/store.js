import { configureStore } from '@reduxjs/toolkit'
import marketSlice from './slice/marketSlice'
import createSagaMiddleware from 'redux-saga'
import watchSaga from './saga/marketLiveSaga'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: marketSlice,
  middleware: [saga]
})

saga.run(watchSaga)
