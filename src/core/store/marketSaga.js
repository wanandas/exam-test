import { call, put, takeEvery } from 'redux-saga/effects'
import { getCurrentSuccess } from './slice/marketSlice'
import env from '@core/config/env'
import { symbolToName } from '@core/utils/helper'

function* getPrice({ payload }) {
  try {
    const response = yield call(
      fetch,
      `${env.API_URL}/v3/ticker/24hr?symbol=${payload}`
    )
    const data = yield response.json()
    yield put(getCurrentSuccess({ ...data, name: symbolToName(payload) }))
  } catch (error) {
    console.log(error)
  }
}

function* marketSaga() {
  yield takeEvery('market/getCurrentFetching', getPrice)
}

export default marketSaga
