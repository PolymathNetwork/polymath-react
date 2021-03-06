import React, { Fragment } from 'react'
import { Typography, Icon } from 'antd'
const { Text } = Typography

export default function Network({networkId}) {
  const networks = {
    0: 'Disconnected',
    1: 'Mainnet',
    5: 'Goerli',
    42: 'Kovan'
  }
  return (
    <Fragment>
      <Icon type="global" style={{
        marginRight: 10,
        marginLeft: 20
      }} />
      <Text>{networks[networkId]}</Text>
    </Fragment>
  )
}