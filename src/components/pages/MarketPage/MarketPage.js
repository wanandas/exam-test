import { useEffect, useCallback, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { withPage } from '@core/hocs'
import { useFetch } from '@core/hooks'
import { symbolToName } from '@core/utils/helper'
import { Button, Card } from '@components/atoms'

import {
  ButtonWrapper,
  ControlWrapper,
  MarketPageWrapper
} from './MarketPage.styled'
import { includes } from 'lodash'

const MarketPage = () => {
  const [activeCrypto, setActiveCrypto] = useState()
  const cryptoVolumeList = useMemo(() => {
    return [
      { symbol: 'btc_thb', name: 'BTC/THB' },
      { symbol: 'busd_thb', name: 'BUSD/THB' },
      { symbol: 'usdt_thb', name: 'USDT/THB' }
    ]
  }, [])

  const { execute: getItem } = useFetch({
    url: '/v3/ticker/24hr',
    method: 'GET'
  })

  const navigate = useNavigate()
  const params = useParams()

  const getPrice = useCallback(
    async (symbol = params.symbol) => {
      await getItem(
        {
          payload: {
            symbol: symbol
          }
        },
        {
          onSuccess: ({ data }) => {
            setActiveCrypto({ ...data, name: symbolToName(data.symbol) })
          }
        }
      )
    },
    [getItem, params.symbol]
  )

  const handleClick = useCallback(
    (symbol) => {
      navigate(`/market/${symbol}`)
    },
    [navigate]
  )

  useEffect(() => {
    if (
      !includes(
        cryptoVolumeList.map((e) => e.symbol),
        params.symbol
      )
    ) {
      navigate('/market/btc_thb')
    }
    if (!activeCrypto || activeCrypto.symbol !== params.symbol) {
      getPrice()
    }
  }, [activeCrypto, cryptoVolumeList, getPrice, navigate, params.symbol])

  useEffect(() => {
    const timer = setInterval(getPrice, 5000)
    return () => clearInterval(timer)
  }, [getPrice])

  return (
    <MarketPageWrapper>
      <span>Exchange Market</span>
      <h1>Web Application</h1>
      <ControlWrapper>
        <ButtonWrapper>
          {cryptoVolumeList.map((item) => (
            <Button
              type={`${item.symbol === params.symbol ? 'primary' : 'default'}`}
              key={item.symbol}
              onClick={() => handleClick(item.symbol)}
            >
              {item.name}
            </Button>
          ))}
        </ButtonWrapper>
        {activeCrypto && (
          <Card title={activeCrypto.name}>
            <h1>{activeCrypto.lastPrice}</h1>
            <p>Volumes : {activeCrypto.volume}</p>
          </Card>
        )}
      </ControlWrapper>
    </MarketPageWrapper>
  )
}

export default withPage({ title: `Market Page ` })(MarketPage)
