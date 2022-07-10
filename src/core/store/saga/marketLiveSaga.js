import { eventChannel } from 'redux-saga'
import { put, call, take, takeEvery } from 'redux-saga/effects'
import env from '@core/config/env'
import { compact, map } from 'lodash'
import { symbolToName } from '@core/utils/helper'

function initWebsocket(payload) {
  return eventChannel((emitter) => {
    const ws = new WebSocket(
      env.SOCKET_URL + '/stream?streams=!miniTicker@arr@3000ms'
    )

    ws.onmessage = (e) => {
      let msg = null
      try {
        msg = JSON.parse(e.data)
      } catch (e) {
        console.error(`Error parsing : ${e.data}`)
      }
      if (msg) {
        const data = compact(
          map(msg.data, (e) => {
            if (['busd_thb', 'btc_thb', 'usdt_thb'].includes(e.s)) {
              return {
                symbol: e.s,
                lastPrice: e.c,
                volume: Math.random(),
                name: symbolToName(e.s).toUpperCase()
              }
            }
          })
        )

        emitter({
          type: 'market/updateCurrentVolume',
          payload: data
        })

        emitter({
          type: 'market/getCurrentFetching',
          payload: data
        })
      }
    }

    // unsubscribe function
    return () => {
      ws.close()
    }
  })
}
export function* wsSagas({ payload }) {
  const channel = yield call(initWebsocket, payload)
  while (true) {
    const action = yield take(channel)
    yield put(action)
  }
}

export default function* watchSaga() {
  yield takeEvery('market/watchLive', wsSagas)
}
