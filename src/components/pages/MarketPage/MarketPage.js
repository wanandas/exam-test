import { useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { includes } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

import { withPage } from '@core/hocs'
import { Button, Card } from '@components/atoms'
import { getParams } from '@core/store/slice/marketSlice'

import {
  ButtonWrapper,
  ControlWrapper,
  MarketPageWrapper
} from './MarketPage.styled'

const MarketPage = () => {
  const cryptoVolumeList = useSelector((state) => state.cryptoList)
  const currentVolume = useSelector((state) => state.current)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const handleClick = useCallback(
    (symbol) => {
      navigate(`/market/${symbol}`)
    },
    [navigate]
  )
  useEffect(() => {
    dispatch(getParams(params.symbol.toLocaleLowerCase()))
    if (params.symbol) {
      dispatch({
        type: 'market/watchLive',
        payload: params.symbol.toLocaleLowerCase()
      })
    }
  }, [dispatch, params.symbol])

  useEffect(() => {
    if (
      !includes(
        cryptoVolumeList.map((e) => e.symbol),
        params.symbol
      )
    ) {
      navigate('/market/BTC_THB')
    }
  }, [cryptoVolumeList, dispatch, navigate, params.symbol])

  return (
    <MarketPageWrapper>
      <span>Exchange Market</span>
      <h1>Web Application</h1>
      <ControlWrapper>
        <ButtonWrapper>
          {cryptoVolumeList.map((item) => (
            <Button
              type={`${
                includes(params.symbol, item.symbol) ? 'primary' : 'default'
              }`}
              key={item.symbol}
              onClick={() => handleClick(item.symbol)}
            >
              {item.name}
            </Button>
          ))}
        </ButtonWrapper>
        <Card
          title={currentVolume && currentVolume.name}
          loading={!(currentVolume && currentVolume.name)}
        >
          <h1>{currentVolume && currentVolume.lastPrice}</h1>
          <p>Volumes : {currentVolume && currentVolume.volume}</p>
        </Card>
      </ControlWrapper>
    </MarketPageWrapper>
  )
}

export default withPage({ title: `Market Page ` })(MarketPage)
