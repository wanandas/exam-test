import styled from '@emotion/styled'

export const MarketPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  background-color: #dddddd;
  color: #000;

  & > h1 {
    font-size: 38px;
    text-align: center;
  }
  & > span {
    font-size: 24px;
  }
`
export const ControlWrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));

  .ant-card {
    height: 200px;
    min-width: 350px;

    .ant-card-body {
      p {
        color: grey;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 32px;
    & > .ant-card {
      width: 100%;
      order: -1;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  justify-content: center;

  .ant-btn {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
